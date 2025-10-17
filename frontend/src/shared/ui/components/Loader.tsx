import styled from 'styled-components'
import { themeVar } from '../theming'

export const Loader = styled.div`
  border: 2px solid ${themeVar('default300')};
  border-top: 2px solid ${themeVar('default700')}; 
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`