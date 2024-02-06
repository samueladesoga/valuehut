import React from 'react'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@mui/material'

function InvoicePage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InvoiceSchemaType>()

    const onSubmit: SubmitHandler<InvoiceSchemaType> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} />
            <input {...register('lastName', { required: true })} />
            <input {...register('email', { required: true })} />
            <input {...register('phoneNumber', { required: true })} />
            <input {...register('address', { required: true })} />

            <Button type="submit">Send me an invoice</Button>
        </form>
    )
}

export default InvoicePage
