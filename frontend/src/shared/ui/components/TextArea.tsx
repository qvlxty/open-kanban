import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'

type Props = {
    placeholder: string
    value: string,
    onChange: (text: string) => void,
    onBlur?: () => void,
    autoFocus?: boolean,
    width?: number
}

export const TextArea = ({ placeholder, onChange, value, width, onBlur, autoFocus }: Props) => {
    return (
        <>
            <InputWrapper
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                autoFocus={autoFocus}
                rows={20}
                style={{
                    width
                }}
            />
        </>
    )
}

const InputWrapper = styled.textarea<ThemedStyledProps>`
  font-size: 16px;
  font-family: 'roboto';
  padding: 10px;
  border-radius: 4px;
  background: ${themeVar('backgroundColor')};
  border: 1px solid ${themeVar('default500')};
  color: ${themeVar('fontColor')};
  width: 100%;

  -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #7314EC;
    }
`
