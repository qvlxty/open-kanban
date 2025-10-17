import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled, { css } from 'styled-components'

import { Icon } from '@/shared/ui'
import { themeVar } from '@/shared/ui/theming'


import { TASK_ITEM } from '../../model/const'
import { sortCard } from '../../model/private'
import { toNormalDateFull } from '@/shared/lib/dates'
import { openTaskEdit } from '@/features/tasks/model'


type Props = {
    id: number,
    index: number,
    name: string,
    dueDate: string,
    user?: {
        id: number,
        name: string
    }
}

export const TaskItem = ({ name, id, index, user, dueDate }: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [collected, drag] = useDrag<{ id: number }, unknown, { isDragging: boolean }>(() => ({
        type: TASK_ITEM,
        item: { id }
    }))
    const [_, drop] = useDrop<{ index: number, id: number }>({
        accept: TASK_ITEM,
        collect: (monitor) => ({ handlerId: monitor.getHandlerId() }),
        drop(item) {
            if (!ref.current) {
                return
            }
            sortCard({
                id: item.id,
                index,
            })
        },
    }, [index])

    drag(drop(ref))
    return (
        <Container
            ref={ref}
            onClick={() => openTaskEdit(id)}
            isDragged={collected.isDragging}
        >
            <Header>
                <TitleWrapper>
                    {user && (
                        <><Icon icon={'users'} />{user?.name}</>
                    )}
                    {name}
                </TitleWrapper>
            </Header>
            {dueDate && (
                <DateBadge>
                    <Icon icon={'calendar'} />{toNormalDateFull(dueDate)}
                </DateBadge>
            )}
        </Container>
    )
}

const DateBadge = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    svg {
        margin-right: 5px;
    }
    padding: 8px;
    border-radius: 8px;
    background-color: ${themeVar('default700')};
    border: 1px solid ${themeVar('default600')};
    
`

type ContainerProps = {
    isDragged?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-left: 4px solid ${themeVar('default600')};
    background-color: ${themeVar('contentBg')};
    margin-left: 4px;
    margin-right: 4px;
    ${({ isDragged = true }) => isDragged && css`
        opacity: 0.7;
    `}
    &:hover {
        opacity: 0.8;
    }
    cursor: grab;
`

const TitleWrapper = styled.div`
    flex: 1;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`
