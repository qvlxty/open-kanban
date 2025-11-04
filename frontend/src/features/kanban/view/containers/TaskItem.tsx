import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled, { css } from 'styled-components'



import { TASK_ITEM } from '../../model/const'
import { sortCard } from '../../model/private'
import { toNormalDateCalendar } from '@/shared/lib/dates'
import { Link } from 'react-router'
import { Routes } from '@/routes/config'
import { AvatarThumb, themeVar } from 'igoresha-dev-ui-kit'
import { Icon } from '@/shared/ui'


type Props = {
    id: number,
    index: number,
    name: string,
    dueDate: string,
    projectId: number,
    assigned: {
        id: number,
        login: string
    }[]
}

const MAX_PREVIEW_AVATAR_COUNT = 3

export const TaskItem = ({ name, id, index, assigned, dueDate, projectId }: Props) => {
    const ref = React.useRef<HTMLAnchorElement>(null)
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
    const assignedUsersSlice = React.useMemo(() => assigned.slice(0, MAX_PREVIEW_AVATAR_COUNT), [assigned])

    drag(drop(ref))
    return (
        <Container
            to={`${Routes.kanban}/${projectId}/${id}`}
            ref={ref}
            isDragged={collected.isDragging}
        >
            <Header>
                <TitleWrapper
                >
                    {assignedUsersSlice.length > 0 && (
                        <div style={{
                            width: `${25 + assignedUsersSlice.length * 10}px`,
                            height: '30px'
                        }}>
                            {assignedUsersSlice
                                .map((u, idx) => (
                                    <AvatarThumb
                                        key={u.id}
                                        nickname={u.login}
                                        style={{
                                            marginBottom: 0,
                                            marginLeft: `${idx * 10}px`,
                                            position: 'absolute'
                                        }}
                                    />
                                ))
                            }
                        </div>)}
                    {name}
                </TitleWrapper>
            </Header>
            {dueDate && (
                <DateBadge>
                    <Icon icon={'calendar'} />{toNormalDateCalendar(dueDate)}
                </DateBadge>
            )}
        </Container>
    )
}

const DateBadge = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    flex-direction: row;
    svg {
        margin-right: 5px;
    }
    
`

type ContainerProps = {
    isDragged?: boolean
}

const Container = styled(Link)<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    color: ${themeVar('fontColor')};
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
