import { createEvent } from 'effector'
import { THEME_KEY } from './const'
import { ThemeItem } from './types'
import { createPersistedStore } from '@/shared/lib/create-persisted-store'

const theme = createPersistedStore<ThemeItem>({ defaultValue: 'light', key: THEME_KEY })
export const $currentTheme = theme.$store
export const loadThemeFx = theme.loadFx
export const toggleTheme = createEvent()
