import { z } from 'zod'
import validator from 'validator'

export const invoiceSchema = z.object({
    fullName: z
        .string({ required_error: 'First name is required', invalid_type_error: 'Please enter a valid first name' })
        .min(2, 'Please enter a valid first name'),
    email: z.string().email('Please provide a valid email.'),
    phoneNumber: z.string().refine(validator.isMobilePhone),
    address: z
        .string({ required_error: 'Address is required', invalid_type_error: 'Please enter your current address' })
        .min(8, 'Please enter a valid address'),
    quantity: z.number().min(1, 'Quantity should at least be 1.'),
})

export type InvoiceSchemaType = z.infer<typeof invoiceSchema>
