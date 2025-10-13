import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'

dayjs.extend(relativeTime)
dayjs.locale('ru')

export const isUserOnline = (lastOnline: string) => {
    const nowDate = Date.now()
    const lOnline = (new Date(lastOnline)).getTime()
    if (nowDate < lOnline) {
        return true
    }
    return false
}

export const toNormalDate = (date: string) => dayjs(date).fromNow()
export const toNormalDateCalendar = (date: string | number) => dayjs(date).format('DD.MM.YY')
export const toNormalDateFull = (date: string | number) => dayjs(date).format('dd, DD.MM.YY, HH:MM')