import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { TextArea } from './TextArea'
import { themeVar } from '../theming'

type Props = {
    value: string,
    onChange: (e: string) => void,
}

export const MdEditor = ({
    value,
    onChange,
}: Props) => {
    const ref = React.useRef<HTMLTextAreaElement>(null)
    const [showTextBox, setShowTextBox] = React.useState(false)
    React.useEffect(() => {
        if (showTextBox) {
            ref.current?.focus()
        }
    }, [showTextBox])

    return (
        <span>
            {
                showTextBox ? (
                    <TextArea
                        value={value}
                        onChange={onChange}
                        placeholder='Введите описание'
                        onBlur={() => setShowTextBox(false)}
                        autoFocus
                    />
                ) :
                    (
                        <DescriptionWrapper onClick={() => setShowTextBox(true)}>
                            {(value === '' || value === null) && 
                                (<PlaceholderText>Редактировать описание</PlaceholderText>)
                            }
                            <ReactMarkdown>
                                {value}
                            </ReactMarkdown>
                        </DescriptionWrapper>
                    )
            }
        </span>
    )
}

const DescriptionWrapper = styled.div`
    font-size: 16px;
    font-family: 'roboto';
    padding: 10px;
    background: ${themeVar('contentBg')};
    border-radius: 4px;
    border: 1px solid ${themeVar('contentBg')};
    cursor: pointer;
    &:hover {
        border: 1px solid ${themeVar('default600')};
    }
`

const PlaceholderText = styled.span`
    color: ${themeVar('default400')};
`