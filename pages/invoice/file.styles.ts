import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        paddingBottom: 100,
        paddingHorizontal: 40,
    },
    headerImage: {
        width: 75,
        height: 75,
    },
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    columnFlex: {
        flexDirection: 'column',
        gap: '4px',
    },
    title: {
        fontSize: 13,
        color: '#4B465C',
        fontFamily: 'PublicSansBold',
    },
    lightDescription: {
        fontSize: '8px',
        color: '#4B465C',
        fontFamily: 'PublicSansRegular',
    },
    boldDescription: {
        fontSize: '8px',
        fontFamily: 'PublicSansSemiBold',
        color: '#4B465C',
    },
})
