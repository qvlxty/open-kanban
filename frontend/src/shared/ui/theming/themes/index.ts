import { ThemeItem } from '../model/types'
import { darkTheme } from './dark'
import { lightTheme } from './light'

export type Theme = typeof lightTheme

export const availableThemes: Record<ThemeItem, Theme> = {
    dark: darkTheme as Theme,
    light: lightTheme as Theme
}