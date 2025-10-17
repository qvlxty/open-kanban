import styled, { css } from 'styled-components'
import { Icon, IconName } from './Icon'
import { themeVar } from '../theming'
import { onSmWidth } from '../theming/model'


type Props<T> = {
    options: {
        value: T,
        icon?: IconName
        text?: React.ReactNode,
    }[],
    selected: T,
    onSet: (v: T) => void
}

export const TabBar = <T,>({ options, selected, onSet }: Props<T>) => {

    return (
        <Container>
            {options.map((item, index) => (
                <Item
                    key={index}
                    active={item.value === selected}
                    onClick={() => onSet(item.value)}
                >
                    {item.icon && (<Icon icon={item.icon} />)}
                    {item.text}
                </Item>
            ))}
        </Container>
    )
}

type ItemProps = {
    active: boolean
}
const Item = styled.div<ItemProps>`
    font-size: 16px;
    white-space: nowrap;
    padding: 16px 18px;
    border-radius: 8px;
    font-size: 18px;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar('default400')};
    ${({ active }) => active && css`
        color: ${themeVar('accent500')};
    `}
    &:hover {
        color: ${themeVar('accent500')};
    }
    cursor: pointer;

    ${onSmWidth} {
        padding: 10px 12px;
        font-size: 14px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
    overflow-x: auto;
    border: 0.5px solid ${themeVar('default700')};
    border-radius: 16px;
`