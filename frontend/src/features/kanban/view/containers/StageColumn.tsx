import React from 'react'
import styled, { css } from 'styled-components'
import { useDrop } from 'react-dnd'

import { TASK_ITEM } from '../../model/const'
import { setTaskStage } from '../../model/private'
import { TaskItem } from './TaskItem'
import { themeVar } from '@/shared/ui/theming'
import { Button, Icon } from '@/shared/ui'
import { TaskDto } from '@/dal/types'
import { openStageEdit } from '@/features/stages/model'
import { createTask } from '@/features/tasks/model'

type Props = {
    id: number
    title: string,
    tasks: TaskDto[]
}

export const StageColumn = ({ title, tasks, id }: Props) => {
    const [expanded, setExpanded] = React.useState(true)

    const [{ isOver }, drop] = useDrop<{ id: number }, any, { isOver: boolean }>(() => ({
        accept: TASK_ITEM,
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        drop: (t) => {
            setTaskStage({
                stageId: id,
                id: t.id
            })
        }

    }), [id])


    return (
        <Container
            expanded={expanded}
            isOver={isOver}
            ref={(e) => { drop(e)}}
        >
            <HeaderWrapper>
                <TitleWrapper onClick={() => setExpanded((t) => !t)}>
                    <Title>{expanded ? title : '...'}</Title>
                </TitleWrapper>
                {expanded && (
                    <>
                        {id !== -1 && (
                            <Button primary onClick={() => openStageEdit(id)}>
                                <Icon icon={'edit'} />
                            </Button>
                        )}
                        <Button secondary onClick={() => createTask(id === -1 ? undefined : id)}>
                            <Icon icon={'add'} />
                        </Button>
                    </>
                )}
            </HeaderWrapper>
            {expanded && tasks.map((t, index) => (
                <TaskItem
                    index={index}
                    key={t.id}
                    id={t.id}
                    name={t.title}
                    user={t.user}
                    dueDate={t.dueDate}
                />
            ))}
        </Container>
    )
}

type ContainerProps = {
    isOver: boolean,
    expanded?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 360px;
    gap: 8px;
    cursor: default;
    border: 1px solid rgba(0,0,0,0);
    ${({ isOver }) => isOver && css`
        border: 1px solid ${themeVar('accent500')};
    `}
    ${({ expanded }) => !expanded && css`
        cursor: pointer;
        width: 64px;
    `}
`

const HeaderWrapper = styled.div`
    background-color:${themeVar('default700')};
    padding: 16px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    font-weight: 600;
    height: 32px;
    border-radius: 8px;
    & > * {
        white-space: nowrap;
        overflow: hidden;
    }
`


const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`

const Title = styled.div`
    font-size: 20px;
    &:hover {
        color: ${themeVar('accent700')};
        cursor: pointer;
    }
`

const StackBadge = styled.div`
    display: flex;
    padding: 4px 8px;
    border: 1px solid ${themeVar('default600')};
    background-color: ${themeVar('default300')};
    border-radius: 8px;
    font-size: 16px;
   
`