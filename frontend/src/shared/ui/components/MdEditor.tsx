import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { TextArea, themeVar } from 'igoresha-dev-ui-kit'

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
                            <ReactMarkdown
                                components={{
                                    code(props) {
                                        const { children, className, node, ...rest } = props
                                        const match = /language-(\w+)/.exec(className || '')
                                        return match ? (
                                            <SyntaxHighlighter
                                                {...rest}
                                                PreTag="div"
                                                children={String(children).replace(/\n$/, '')}
                                                language={match[1]}
                                                style={xonokai}
                                            />
                                        ) : (
                                            <code {...rest} className={className}>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}>
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