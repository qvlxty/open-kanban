import { root } from '@/shared/root'
import {Notification} from './types'

const d = root.createDomain()

export const $notifications = d.store<Notification[]>([])
export const popNotification = d.event()