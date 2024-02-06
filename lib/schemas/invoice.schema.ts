import { z } from 'zod'
import validator from 'validator'

export const invoiceSchema = z.object({
    firstName: z
        .string({ required_error: 'First name is required', invalid_type_error: 'Please enter a valid first name' })
        .min(2, 'Please enter a valid first name'),
    lastName: z
        .string({ required_error: 'Last name is required', invalid_type_error: 'Please enter a valid last name' })
        .min(2, 'Please enter a valid last name'),
    email: z.string().email('Please provide a valid email.'),
    phoneNumber: z.string().refine(validator.isMobilePhone),
    address: z
        .string({ required_error: 'Address is required', invalid_type_error: 'Please enter your current address' })
        .min(8, 'Please enter a valid address'),
    postalCode: z
        .number({ required_error: 'Postal code is required', invalid_type_error: 'Please enter a valid postal code' })
        .min(5, 'Postal code must at least be 5 characters long.')
        .max(5, 'Postal code must at most be 5 characters long.'),
})

export type InvoiceSchemaType = z.infer<typeof invoiceSchema>
