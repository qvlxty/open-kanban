import { Theme } from './themes'

export type ThemedStyledProps = {
    theme: Theme;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} 
}