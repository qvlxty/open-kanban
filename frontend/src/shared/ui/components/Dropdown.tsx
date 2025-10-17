import React from 'react'
import styled from 'styled-components'
import { Icon, IconName } from './Icon'
import { themeVar, onSmWidth } from '../theming'


type Props<T> = {
    options: {
        value: T,
        text: string,
        icon?: IconName
    }[],
    placeholder?: string,
    selected?: T,
    onOptionChange: (optionValue: T) => void
}

export const Dropdown = <T,>({ options, onOptionChange, selected, placeholder = 'Empty' }: Props<T>) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleList = () => setIsOpen(!isOpen)
    const selectedText = options.find((cat) => cat.value === selected)?.text

    const onOptionClicked = (item) => {
        onOptionChange(item.value)
        toggleList()
    }
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (isOpen) {
                    setIsOpen(false)
                }
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    return (
        <DropDownContainer ref={ref}>
            <DropDownHeader onClick={toggleList}>
                <div>
                    {selectedText && (
                        <div>{selectedText}</div>
                    )}
                    {!selectedText && (
                        <div>{placeholder}</div>
                    )}
                </div>
                <Icon icon={'list'} />
            </DropDownHeader>
            {isOpen && (
                <DropDownWrapper>
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map((item) => (
                                <ListItem
                                    key={item.value as any}
                                    onClick={() => onOptionClicked(item)}
                                >
                                    <div>
                                        {item.text}
                                    </div>
                                    <div>
                                        {item.icon && <Icon icon={item.icon} />}
                                    </div>
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                </DropDownWrapper>
            )}
        </DropDownContainer>
    )
}

const DropDownContainer = styled.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`

const DropDownHeader = styled.div`
    border-radius: 4px;
    border: 1px solid ${themeVar('default800')};
    padding: 14px;
    font-weight: 400;
    color: ${themeVar('default300')};   
    box-sizing: border-box;
    max-height: 40px;
    background: ${themeVar('contentBg')};
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        border: 1px solid ${themeVar('default600')};
    }
`

const DropDownWrapper = styled.div`
    position: relative;
    z-index: 1;

`

const DropDownListContainer = styled.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`

const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: -4px;
    background: ${themeVar('contentBg')};
    
    border: 1px solid ${themeVar('default700')};
    border-radius: 4px;
    color: ${themeVar('accent500')};

    box-shadow: 0px 12px 24px 2px #11111111;
    box-sizing: border-box;

    max-height: 80vh;
    overflow-y: auto;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-top: 12px;
    color: ${themeVar('default400')};
    animation: fadeout 0.5s;
    border-radius: 4px;
    user-select: none;
    &:hover {
        color: ${themeVar('default300')};
        cursor: pointer; 
    }
`