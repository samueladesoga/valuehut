import React, { useCallback, useEffect, useState } from 'react'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Input, Select, SelectSection, SelectItem } from '@nextui-org/react'
import { pdf } from '@react-pdf/renderer'
import InvoiceDocument from '../../components/invoice-file/file'
import { TrainingTypes, training } from '../../data/training'
import { useRouter, withRouter } from 'next/router'
import classNames from 'classnames'
import { formatReadableDate } from '../../lib/utils'

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
        watch,
        formState: { errors },
    } = useForm<InvoiceSchemaType>()

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString)
        return formatReadableDate(date.toISOString().split('T')[0])
    }

    const router = useRouter()
    const { query } = router

    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string | null>(null)

    const [_errors, setError] = useState<string | null>(null)

    const formatStreams = useCallback((trainings: TrainingTypes[]): (ICourse | undefined)[] => {
        return trainings
            .filter((training) => training.isTraining && training.streams && training.streams?.length > 0)
            .flatMap((training) =>
                training?.streams
                    ?.filter((stream) => !stream.filled)
                    .map((stream) => ({
                        id: stream.id,
                        title: `${training.acronym} (${training.title})`,
                        price: stream.price[0].amount,
                        startDate: formatDate(stream.startDate),
                        endDate: formatDate(stream.endDate),
                        label: training.title,
                        time: stream.time,
                        acronym: training.acronym,
                    })),
            )
    }, [])

    useEffect(() => {
        if (query.courseId) {
            const courseList = formatStreams(training.training)
            const course = courseList.find((c) => c?.id === query.courseId)

            setSelectedCourse(course ?? null)
        }
    }, [formatStreams, query])

    const onSubmit: SubmitHandler<InvoiceSchemaType> = async (data) => {
        setLoading(true)
        const doc = <InvoiceDocument data={data} selectedCourse={selectedCourse} />
        const asPdf = pdf()

        asPdf.updateContainer(doc)

        const blob = await asPdf.toBlob()

        const fileName = `Invoice_ValueHut_${data.fullName}_${new Date().getTime()}.pdf`

        const formData = new FormData()

        formData.append('file', blob, fileName)
        formData.append('toEmail', data.email) // Assuming you want to send it to the email provided in the form
        formData.append('subject', 'ValueHut: Your Invoice')
        formData.append('text', 'Please find attached your invoice.')

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
                    router.back()
                    setError(null)
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

    return (
        <div className="max-w-[700px] flex items-center m-auto min-h-[800px]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="Full name (or Company name)"
                        fullWidth
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
                        disabled={loading}
                        {...register('email', { required: true })}
                        className={`${errors?.email?.message ? '!outline-red-400' : ''}`}
                    />
                    <Input
                        label="Phone Number"
                        fullWidth
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
                        {...register('address', { required: true })}
                        className={`${errors.address ? 'border-red-400' : ''}`}
                    />
                </div>
                <div className="w-[100%] mb-4">
                    <Input
                        label="Number of Attendees"
                        fullWidth
                        type="number"
                        disabled={loading}
                        {...register('quantity', { required: true, valueAsNumber: true })}
                        className={`${errors.quantity ? 'border-red-400' : ''}`}
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

                <Button type="submit" disabled={loading} fullWidth variant="bordered">
                    {loading ? 'Loading...' : 'Send invoice to email'}
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
        </div>
    )
}

export default withRouter(InvoicePage)
