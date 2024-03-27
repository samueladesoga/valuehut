// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Form } from 'multiparty' // Corrected import
import nodemailer from 'nodemailer'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Parse the multipart/form-data request
        const form = new Form()
        form.parse(req, async (error, fields, files) => {
            if (error) {
                console.error(error)
                return res.status(500).json({ error: error.message })
            }

            // Assuming the file input's name is 'file' and email fields are 'toEmail' and 'subject'
            const uploadedFile = files.file?.[0]
            const toEmail = fields.toEmail?.[0]
            const subject = fields.subject?.[0]

            if (!uploadedFile || typeof toEmail !== 'string' || typeof subject !== 'string') {
                return res.status(400).json({ error: 'Invalid request' })
            }

            console.log(process.env.SMTP_USERNAME, process.env.SMTP_PASSWORD)

            // Setup Nodemailer transporter
            const transporter = nodemailer.createTransport({
                host: 'email-smtp.us-east-1.amazonaws.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD,
                },
            })

            const mailOptions = {
                from: '"ValueHut" <info@valuehut.co>',
                to: toEmail,
                subject: subject,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            color: #333333;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 20px;
                            background-color: #f7f7f7;
                            border: 1px solid #dddddd;
                            border-radius: 5px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            font-size: 24px;
                            margin-bottom: 20px;
                        }
                        .content {
                            font-size: 16px;
                            line-height: 1.5;
                            margin-bottom: 20px;
                        }
                        .footer {
                            font-size: 14px;
                            text-align: center;
                            color: #999999;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            ValueHut Invoice for Scrum / Agile Class
                        </div>
                        <div class="content">
                            Hello ,<br><br>
        
                            Thank you for requesting an invoice for the workshop. Please find attached an invoice for the class requested<br><br>
        
                            Should you have any questions or require further assistance including the Bank Details for your preferred currency, feel free to contact us.<br><br>
        
                            Thank you for your trust in ValueHut.

                            Regards,
                            Debbie
                            info@valuehut.co
                        </div>
                        <div class="footer">
                            © ValueHut - All rights reserved
                        </div>
                    </div>
                </body>
                </html>
            `,
                attachments: [
                    {
                        filename: uploadedFile.originalFilename,
                        path: uploadedFile.path,
                    },
                ],
            }

            // Send email
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err)
                    return res.status(500).json({ error: 'Failed to send email' })
                }
                res.status(200).json({ message: 'Email sent: ' + info.response })
                console.log('sent : ', info.response, toEmail)
            })
        })
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end('Method Not Allowed')
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
}
