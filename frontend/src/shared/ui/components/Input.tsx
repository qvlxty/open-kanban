import React from 'react'
import styled, { css } from 'styled-components'
import { themeVar } from '../theming'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange'> & {
    onChange?: (text: string) => void,
    errorText?: string,
    hasError?: boolean,
}

export const Input = React.forwardRef<HTMLInputElement, Props>((
    { 
        onChange, 
        errorText, 
        hasError, 
        ...props
     }
    , ref) => {
    return (
        <>
            <InputWrapper
                onChange={(e) => onChange?.(e.target.value)}
                ref={ref}
                hasError={hasError}
                {...props}
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
    border-radius: 4px;
    background: ${themeVar('contentBg')};
    border: 1px solid ${themeVar('default800')};
    color: ${themeVar('fontColor')};
    &:focus {
        outline: none;
        border: 1px solid ${themeVar('default600')};
    }
    ${({ hasError }) => hasError && css`
        border-color: ${themeVar('error')};
    `}
    &::placeholder {
        color: ${themeVar('default500')};
        font-weight: 300;
    }
`

const ErrorText = styled.div`
    color: ${themeVar('error')};
    font-size: 14px;
    margin-top: 0;
`