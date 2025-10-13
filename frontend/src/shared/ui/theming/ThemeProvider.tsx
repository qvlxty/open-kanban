import React from 'react'
import {
  ThemeProvider as Provider,
} from 'styled-components'
import { useUnit } from 'effector-react'
import { $currentTheme } from './model/public'
import { availableThemes } from './themes'


export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const theme = useUnit($currentTheme)
  return (
    <Provider theme={availableThemes[theme]}>
      {children}
    </Provider>
  )
}
