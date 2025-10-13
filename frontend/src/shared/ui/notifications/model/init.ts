import { $notifications,popNotification } from './private'
import {showNotification} from './public'

$notifications
  .on(showNotification, (s,p) => [...s,p])
  .on(popNotification,(s) => s.slice(0,-1))