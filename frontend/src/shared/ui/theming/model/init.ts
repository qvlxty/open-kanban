import { $currentTheme, toggleTheme } from './public'

$currentTheme
  .on(toggleTheme, (a) => a === 'dark' ? 'light' : 'dark')