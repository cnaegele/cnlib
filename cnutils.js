export function bDateFutur(date) {
    const datenow = new Date()
    const date2test = new Date(date)
    return date2test > datenow
}