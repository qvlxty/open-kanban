import React from 'react'
import styled, { css } from 'styled-components'
import { themeVar } from '../theming'

type Props = {
    onChange: (text: string) => void,
    type?: string,
    placeholder?: string
    value: any,
    max?: number
    min?: number
    onBlur?: () => void,
    hasError?: boolean
    errorText?: string
    onClick?: () => void
    disabled?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, Props>((
    { onClick, placeholder, type, onChange, value, max, min, onBlur, hasError, errorText, disabled = false }
    , ref) => {
    return (
        <>
            <InputWrapper
                onChange={(e) => onChange(e.target.value)}
                ref={ref}
                onClick={onClick}
                placeholder={placeholder}
                type={type}
                value={value}
                max={max}
                min={min}
                hasError={hasError}
                disabled={disabled}
                onBlur={onBlur}
            />
            <ErrorText>
                {errorText}
            </ErrorText>
        </>
    )
})

type InputWrapperProps = {
    hasError?: boolean
}

const InputWrapper = styled.input<InputWrapperProps>`
  flex-direction: row;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background: ${themeVar('contentBg')};
  border: 1px solid ${themeVar('default600')};
  color: ${themeVar('fontColor')};
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px ${themeVar('green500')};
    }
    ${({ hasError }) => hasError && css`
        border-color: ${themeVar('error')};
    `}
`

const ErrorText = styled.div`
    color: ${themeVar('error')};
    font-size: 14px;
    margin-top: 0;
`