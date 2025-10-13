import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'

export const ActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: ${themeVar('fontColor')};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${themeVar('fontColor')};
    transition: 0.4s;
    color: ${themeVar('backgroundColor')};
  }
`

type ButtonProps = {
    haveIcon?: boolean
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    full?: boolean
}

const ButtonCss = css<ButtonProps & ThemedStyledProps>`
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px dashed ${themeVar('default500')};
    background: ${themeVar('secondary700')};
    color: ${themeVar('default400')};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ haveIcon }) => haveIcon && css`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar('secondary700')};
        background: ${themeVar('default500')};
        transition: 0.2s;
    }
    ${({ primary }) => primary && css`
        background: ${themeVar('accent500')};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar('accent400')};
        }
    `}
    ${({ secondary }) => secondary && css`
        background: #29a0e6;
        color: #fff;
        border: none;
        &:hover {
            background: #125780;
            color: #fff;
        }
    `}
    ${({ danger }) => danger && css`
        background: #c9403e;
        color: #fff;
        border: none;
        &:hover {
            background: #631413;
            color: #fff;
        }
    `}
    ${({ full }) => full && css`
        width: 100%;
    `}
`

export const Button = styled.button<ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
`

export const RouterLinkButton = styled(Link) <ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
    text-decoration: none;
`

export const LinkButton = styled.a <ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
    text-decoration: none;
`