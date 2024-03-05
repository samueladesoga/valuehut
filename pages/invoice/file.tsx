import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import { styles } from '../../lib/file.styles'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import LogoVH from '../../public/logo192.png'
import { getCartItems } from '../../lib/foxycart'

// Create Document Component
const InvoiceDocument = ({ data }: { data: InvoiceSchemaType }) => {
    const today = new Date().toLocaleDateString()

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.rowFlex}>
                    <Image style={styles.headerImage} src={LogoVH.src} />
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            fontSize: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Invoice N° --
                        </Text>
                        <Text>Date: {today}</Text>
                        <Text>Due Date: {today}</Text>
                        <Text>PO Number: --</Text>
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 12,
                        ...styles.lightDescription,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        ValueHut Limited (Formerly Thoughtstudios Limited)
                    </Text>
                    <Text>Address: 44 Community Rd, Allen</Text>
                </View>
                <View
                    style={{
                        marginTop: 8,
                        ...styles.lightDescription,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Bill to:
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                            marginTop: 8,
                        }}
                    >
                        Full name: {data.firstName} {data.lastName}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                        }}
                    >
                        Phone: {data.phoneNumber}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                        }}
                    >
                        Email: {data.email}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default InvoiceDocument
