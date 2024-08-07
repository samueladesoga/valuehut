import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { InvoiceSchemaType, invoiceSchema } from '../../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/react'
import { pdf } from '@react-pdf/renderer'
import InvoiceDocument from '../../../components/invoice-file/file'
import { TrainingTypes, training } from '../../../data/training'
import { useRouter, withRouter } from 'next/router'
import classNames from 'classnames'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDateInWords } from '../../../components/dates-table/dates-table.component'

export interface ICourse {
    id: string
    title: string
    price: number
    startDate: string
    endDate: string
    label: string
    time: string
    acronym?: string
}

function InvoicePage() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<InvoiceSchemaType>({
        mode: 'onChange',
        defaultValues: {
            quantity: 1,
        },
        resolver: zodResolver(invoiceSchema),
    })

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString)
        return getDateInWords(date)
    }

    useEffect(() => {
        setValue('quantity', 1, { shouldValidate: true })
    }, [setValue])

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value, 10)
        if (isNaN(value)) value = 1
        if (value < 1) {
            setValue('quantity', 1, { shouldValidate: true })
        } else {
            setValue('quantity', value, { shouldValidate: true })
        }
    }

    const router = useRouter()
    const { query } = router

    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string | null>(null)

    const [_errors, setError] = useState<string | null>(null)

    const formatStreams = useCallback(
        (trainings: TrainingTypes[]): (ICourse | undefined)[] => {
            return trainings
                .filter((training) => training.isTraining && training.streams && training.streams?.length > 0)
                .flatMap((training) =>
                    training?.streams
                        ?.filter((stream) => !stream.filled)
                        .map((stream) => ({
                            id: stream.id,
                            title: `${training.acronym} (${training.title})`,
                            price: (
                                stream.price.find((p) => p.regionDescription.includes(query.country as string)) ??
                                stream.price[3]
                            ).amount,
                            startDate: formatDate(stream.startDate),
                            endDate: formatDate(stream.endDate),
                            label: training.title,
                            time: stream.time,
                            acronym: training.acronym,
                        })),
                )
        },
        [query.country],
    )

    useEffect(() => {
        if (query.courseId) {
            const courseList = formatStreams(training.training)
            const course = courseList.find((c) => c?.id === query.courseId)

            setSelectedCourse(course ?? null)
        }
    }, [formatStreams, query])

    const onSubmit: SubmitHandler<InvoiceSchemaType> = async (data) => {
        setLoading(true)
        const doc = (
            <InvoiceDocument data={data} selectedCourse={selectedCourse} isUk={query.country === 'United Kingdom'} />
        )
        const asPdf = pdf()

        asPdf.updateContainer(doc)

        const blob = await asPdf.toBlob()

        const fileName = `Invoice_ValueHut_${data.fullName}_${new Date().getTime()}.pdf`

        const formData = new FormData()

        formData.append('file', blob, fileName)
        formData.append('toEmail', data.email) // Assuming you want to send it to the email provided in the form
        formData.append('subject', 'ValueHut Consulting: Your Invoice')
        formData.append('text', 'Please find attached your invoice.')
        formData.append('customerName', data.fullName)
        formData.append('courseName', selectedCourse?.title ?? '')

        // Send the email with the PDF attached via your API route
        fetch('/api/sendEmail', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError('An error occurred while sending you an invoice. please try again later!')
                    setSuccess(null)
                } else {
                    onOpen()
                }
            })
            .catch((error) => {
                console.error(error)
                setError('An error occurred while sending you an email. please try again later!')
                setSuccess(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const { ref, ...rest } = register('quantity', { required: true, valueAsNumber: true })

    return (
        <div className="max-w-[700px] flex flex-col justify-center items-center m-auto min-h-[1000px] px-2">
            <h1 className="mb-2 text-stone-800">Checkout: Invoice</h1>
            <span className="mb-40 text-stone-600">Please fill the below form to proceed.</span>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="Full name (or Company name)"
                        fullWidth
                        errorMessage={errors.fullName ? <>{errors?.fullName.message}</> : null}
                        disabled={loading}
                        {...register('fullName', { required: true })}
                        className={`${errors?.fullName?.message ? '!outline-red-400' : ''}`}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        type="email"
                        label="Email"
                        fullWidth
                        errorMessage={errors.email ? <>{errors?.email.message}</> : null}
                        disabled={loading}
                        {...register('email', { required: true })}
                        className={`${errors?.email?.message ? '!outline-red-400' : ''}`}
                    />
                    <Input
                        label="Phone Number"
                        fullWidth
                        errorMessage={errors.phoneNumber ? <>{errors?.phoneNumber.message}</> : null}
                        disabled={loading}
                        {...register('phoneNumber', { required: true })}
                        className={`${errors.phoneNumber ? 'border-red-400' : ''}`}
                    />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="Address"
                        fullWidth
                        disabled={loading}
                        errorMessage={errors.address ? <>{errors?.address.message}</> : null}
                        {...register('address', { required: true })}
                        className={`${errors.address ? 'border-red-400' : ''}`}
                    />
                </div>
                <div className="w-[100%] mb-4">
                    <Input
                        label="Number of Attendees"
                        fullWidth
                        type="number"
                        min={1}
                        disabled={loading}
                        errorMessage={errors.quantity ? <>{errors?.quantity.message}</> : null}
                        {...rest}
                        ref={ref}
                        onChange={(e) => {
                            handleQuantityChange(e)
                            rest.onChange(e)
                        }}
                    />
                </div>
                <div className="p-3 rounded-lg mb-8 bg-gray-100">
                    <p className="text-stone-600 text-xs mb-3">Course details:</p>
                    <h3 className="text-stone-600 text-sm mb-1">Course: {selectedCourse?.title}</h3>
                    <h3 className="text-stone-600 text-sm mb-1">
                        Date: {selectedCourse?.startDate} - {selectedCourse?.endDate}
                    </h3>
                    <h3 className="text-stone-600 text-sm">Time: {selectedCourse?.time}</h3>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    fullWidth
                    variant="solid"
                    className="bg-[#528ecc] text-white font-medium"
                >
                    <span>{loading ? 'Loading...' : 'Continue'}</span>
                </Button>

                {_errors || success ? (
                    <p
                        className={classNames('text-sm mt-6 text-center', {
                            'text-green-600': !!success,
                            'text-red-600': !!_errors,
                        })}
                    >
                        {_errors ?? success}
                    </p>
                ) : null}
            </form>
            <Modal size={'2xl'} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Email sent</ModalHeader>
                            <ModalBody>
                                <p>An email containing your envoice has been successfuly sent.</p>
                                <p>To download your invoice, please check your email ({getValues('email')})</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="bg-[#528ecc] text-white font-medium"
                                    onPress={() => {
                                        onClose()
                                        router.push('/services/training')
                                    }}
                                >
                                    Ok
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default withRouter(InvoicePage)
