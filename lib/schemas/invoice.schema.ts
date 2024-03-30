import { z } from 'zod'
import validator from 'validator'

export const invoiceSchema = z.object({
    fullName: z
        .string({ required_error: 'Name is required', invalid_type_error: 'Please enter a valid name' })
        .min(2, 'Please enter a valid first name'),
    email: z.string().email('Please provide a valid email.'),
    phoneNumber: z
        .string({ required_error: 'Phone number is required', invalid_type_error: 'Please enter a valid phone number' })
        .refine(validator.isMobilePhone),
    address: z
        .string({ required_error: 'Address is required', invalid_type_error: 'Please enter your current address' })
        .min(8, 'Please enter a valid address (at least 8 characters long).'),
    quantity: z.number().min(1, 'Quantity should at least be 1.'),
})

export type InvoiceSchemaType = z.infer<typeof invoiceSchema>
