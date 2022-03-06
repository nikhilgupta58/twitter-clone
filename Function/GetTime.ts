const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const constructTime = (timestamp) => {
    try {
        const date = parseInt(timestamp)
        const current = new Date().getTime()
        const sec = Math.floor((current - date) * 0.001)
        if (sec <= 30) {
            return 'A few seconds ago'
        }
        const min = Math.floor(sec * 0.0166668)
        const hr = Math.floor((current - date) * 2.7778e-7)
        if (min < 1) {
            return 'less than a minute'
        }
        if (min < 60) {
            return (`${min}m`)
        }
        if (hr < 24) {
            return (`${hr}h`)
        }
        const days = hr * (0.0416667)
        if (days < 10)
            return (`${days}d`)
        const pastTime = new Date(date)
        return `${month[pastTime.getMonth()]} ${pastTime.getDate()}, ${pastTime.getFullYear()}`
    } catch (e) {
        console.log(e)
    }
    return ''
}