import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer'
import { styles, tableStyles } from '../../lib/file.styles'
import { InvoiceSchemaType } from '../../lib/schemas/invoice.schema'
import LogoVH from '../../public/logo192.png'
import { ICourse } from '../../pages/invoice'

const InvoiceDocument = ({ data, selectedCourse }: { data: InvoiceSchemaType; selectedCourse: ICourse | null }) => {
    const today = new Date().toLocaleDateString()
    const totalPrice = selectedCourse ? selectedCourse.price * data.quantity : 0

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
                            Invoice N° {new Date().getTime()}
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
                        Full name: {data.fullName}
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
                <View style={tableStyles.table}>
                    <View style={tableStyles.tableRow}>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Course Name</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Start Date</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>End Date</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Time</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Quantity</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Price</Text>
                        </View>
                        <View style={tableStyles.tableColHeader}>
                            <Text style={tableStyles.tableCell}>Total</Text>
                        </View>
                    </View>

                    <View style={tableStyles.tableRow}>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{selectedCourse?.acronym}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{selectedCourse?.startDate}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{selectedCourse?.endDate}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{selectedCourse?.time}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{data.quantity}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>{selectedCourse?.price.toFixed(2)}</Text>
                        </View>
                        <View style={tableStyles.tableCol}>
                            <Text style={tableStyles.tableCell}>£ {totalPrice.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={{ ...tableStyles.totalsRow, marginTop: 11 }}>
                        <Text style={[tableStyles.totalsLabel, tableStyles.tableCell]}>Sub-Total</Text>
                        <Text style={[tableStyles.totalsAmount, tableStyles.tableCell]}>£ {totalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={tableStyles.totalsRow}>
                        <Text style={[tableStyles.totalsLabel, tableStyles.tableCell]}>Tax (20%):</Text>
                        <Text style={[tableStyles.totalsAmount, tableStyles.tableCell]}>
                            £ {Number(totalPrice * 0.2).toFixed(2)}
                        </Text>
                    </View>
                    <View style={tableStyles.totalsRow}>
                        <Text style={[tableStyles.totalsLabel, tableStyles.tableCell]}>TOTAL</Text>
                        <Text style={[tableStyles.totalsAmount, tableStyles.tableCell]}>
                            £ {Number(totalPrice + totalPrice * 0.2).toFixed(2)}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 24,
                        ...styles.lightDescription,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Notes:
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                            marginTop: 5,
                        }}
                    >
                        Dacht Solutions Limited
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                            marginTop: 2,
                        }}
                    >
                        Acct Number: 9248959
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'light',
                            marginTop: 2,
                        }}
                    >
                        Sort Code: 40-04-01
                    </Text>
                    <Text
                        style={{
                            marginTop: 12,
                            fontWeight: 'light',
                        }}
                    >
                        Terms:
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            fontWeight: 'light',
                        }}
                    >
                        Payment is to be made into specified Bank account within 7 days from invoice date.
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <View style={{ fontSize: '8px' }}>
                        <Text>Account holder: Valuehut Limited</Text>
                        <Text>ACH and Wire routing number: 026073150</Text>
                        <Text>Account number: 8313703765</Text>
                        <Text>Account type: Checking</Text>
                        <Text>Wise&apos;s address: 30 W.26th Street, Sixth Flour</Text>
                        <Text>New York NY 10010</Text>
                        <Text>United States</Text>
                    </View>
                    <View style={{ fontSize: '8px' }}>
                        <Text>Account holder: Valuehut Limited</Text>
                        <Text>SWIFT/BIC: TRWIBEB1XXX</Text>
                        <Text>IBAN: BE16 9677 5000 5174</Text>
                        <Text>Account type: Checking</Text>
                        <Text>Wise&apos;s address: Rue du Trône 100, 3rd floor</Text>
                        <Text>Brussels 1050</Text>
                        <Text>Belgium</Text>
                    </View>
                    <View style={{ fontSize: '8px' }}>
                        <Text>Account holder: Valuehut Limited</Text>
                        <Text>Account Number: 92489597</Text>
                        <Text>Sort Code: 40-04-01</Text>
                        <Text>International Bank Account Number: GB64HBUK40040192489597</Text>
                        <Text>Branch Identifier Code: HBUKBG4106V</Text>
                    </View>
                </View>
                <View style={styles.pageFooter}>
                    <Text>UK: North Westgate House, Harlow. CM20 1YS.</Text>
                    <Text>Nigeria: 44, Community Road off Bamishiile Street off Allen Avenue, Ikeja, Lagos.</Text>
                </View>
            </Page>
        </Document>
    )
}

export default InvoiceDocument
