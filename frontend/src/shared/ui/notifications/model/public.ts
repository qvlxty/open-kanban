import { createDomain } from 'effector'
import {Notification} from './types'

const d = createDomain()
export const showNotification = d.event<Notification>()