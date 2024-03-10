import React, { useEffect, useState } from 'react'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Input } from '@nextui-org/react'
import { pdf } from '@react-pdf/renderer'
import { getCartItems } from '../../lib/foxycart'
import InvoiceDocument from '../../components/invoice-file/file'

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
        <div className="max-w-[400px] flex items-center m-auto min-h-[1000px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-4">
                    <Input
                        label="First name"
                        fullWidth
                        {...register('firstName', { required: true })}
                        className={`${errors?.firstName?.message ? '!outline-red-400' : ''}`}
                    />
                    <Input
                        label="Last name"
                        fullWidth
                        {...register('lastName', { required: true })}
                        className={`${errors?.lastName?.message ? '!outline-red-400' : ''}`}
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

                <Button type="submit" fullWidth variant="bordered">
                    Send me an invoice
                </Button>
            </form>
        </div>
    )
}

export default InvoicePage
