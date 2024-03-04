import React, { useEffect, useState } from 'react'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@mui/material'
import InvoiceDocument from './file'
import { pdf } from '@react-pdf/renderer'
import { getCartItems } from '../../lib/foxycart'

function InvoicePage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InvoiceSchemaType>()

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchCartItems = async () => {
            const data = await getCartItems()
            if (data) {
                console.log('data', data)
            }
        }

        fetchCartItems()
    }, [])

    const onSubmit: SubmitHandler<InvoiceSchemaType> = async (data) => {
        const doc = <InvoiceDocument data={data} />
        const asPdf = pdf()

        asPdf.updateContainer(doc)

        const blob = await asPdf.toBlob()

        const fileName = `Invoice_${data.firstName}_${data.lastName}_${new Date()
            .toLocaleDateString()
            .replace(/\s+/g, '_')}.pdf`

        const file = new File([blob], fileName, { type: 'application/pdf' })
        const url = URL.createObjectURL(file)

        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        link.click()
        link.remove()
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
