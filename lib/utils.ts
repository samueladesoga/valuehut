export function formatReadableDate(dateString: string): string {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const [year, month, day] = dateString.split('-').map((part) => parseInt(part, 10))

    let daySuffix = 'th'
    if (day % 10 === 1 && day !== 11) daySuffix = 'st'
    else if (day % 10 === 2 && day !== 12) daySuffix = 'nd'
    else if (day % 10 === 3 && day !== 13) daySuffix = 'rd'

    return `${day}${daySuffix} ${months[month - 1]}, ${year}`
}
