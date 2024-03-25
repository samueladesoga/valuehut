import React, { useEffect, useState } from 'react'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Input, Select, SelectSection, SelectItem } from '@nextui-org/react'
import { pdf } from '@react-pdf/renderer'
import InvoiceDocument from '../../components/invoice-file/file'
import { TrainingTypes, training } from '../../data/training'

export interface ICourse {
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
        return date.toISOString().split('T')[0]
    }

    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null)

    useEffect(() => {
        console.log(selectedCourse)
    }, [selectedCourse])

    const formatStreams = (trainings: TrainingTypes[]): (ICourse | undefined)[] => {
        return trainings
            .filter((training) => training.isTraining && training.streams && training.streams?.length > 0)
            .flatMap((training) =>
                training?.streams
                    ?.filter((stream) => !stream.filled)
                    .map((stream) => ({
                        title: `${training.acronym} (${training.title}) - ${formatDate(
                            stream.startDate,
                        )} to ${formatDate(stream.endDate)} (${stream.time})`,
                        price: stream.price[0].amount,
                        startDate: formatDate(stream.startDate),
                        endDate: formatDate(stream.endDate),
                        label: training.title,
                        time: stream.time,
                        acronym: training.acronym,
                    })),
            )
    }

    const onSubmit: SubmitHandler<InvoiceSchemaType> = async (data) => {
        const doc = <InvoiceDocument data={data} selectedCourse={selectedCourse} />
        const asPdf = pdf()

        asPdf.updateContainer(doc)

        const blob = await asPdf.toBlob()

        const fileName = `Invoice_ValueHut_${data.fullName}_${new Date().getTime()}.pdf`

        const file = new File([blob], fileName, { type: 'application/pdf' })
        const url = URL.createObjectURL(file)

        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        link.click()
        link.remove()
    }

    return (
        <div className="max-w-[700px] flex items-center m-auto min-h-[1000px]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="Full name (or company name)"
                        fullWidth
                        {...register('fullName', { required: true })}
                        className={`${errors?.fullName?.message ? '!outline-red-400' : ''}`}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        type="email"
                        label="Email"
                        fullWidth
                        {...register('email', { required: true })}
                        className={`${errors?.email?.message ? '!outline-red-400' : ''}`}
                    />
                    <Input
                        label="Phone Number"
                        fullWidth
                        {...register('phoneNumber', { required: true })}
                        className={`${errors.phoneNumber ? 'border-red-400' : ''}`}
                    />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="Address"
                        fullWidth
                        {...register('address', { required: true })}
                        className={`${errors.address ? 'border-red-400' : ''}`}
                    />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Select
                        label="Select a course"
                        value={selectedCourse?.title}
                        className="max-w"
                        onChange={(p) => {
                            setSelectedCourse(formatStreams(training.training)[Number(p.target.value)] ?? null)
                        }}
                    >
                        {formatStreams(training.training)
                            .filter((_training) => _training)
                            .map((_training, i) => (
                                <SelectItem key={i} value={_training?.title}>
                                    {_training?.title}
                                </SelectItem>
                            ))}
                    </Select>
                    <div className="w-[30%] mb-8">
                        <Input
                            label="Quantity"
                            fullWidth
                            type="number"
                            {...register('quantity', { required: true, valueAsNumber: true })}
                            className={`${errors.quantity ? 'border-red-400' : ''}`}
                        />
                    </div>
                </div>

                <Button type="submit" fullWidth variant="bordered">
                    Send me an invoice
                </Button>
            </form>
        </div>
    )
}

export default InvoicePage
