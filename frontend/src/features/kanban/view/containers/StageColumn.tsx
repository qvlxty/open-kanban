import React from 'react'
import styled, { css } from 'styled-components'
import { useDrop } from 'react-dnd'

import { TASK_ITEM } from '../../model/const'
import { setTaskStage } from '../../model/private'
import { TaskItem } from './TaskItem'
import { TaskDto } from '@/dal/types'
import { openStageEdit } from '@/features/stages/model'
import { createTask } from '@/features/tasks/model'
import { Button, themeVar } from 'igoresha-dev-ui-kit'
import { Icon } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

type Props = {
    id: number
    title: string,
    projectId: number
    tasks: TaskDto[]
}

export const StageColumn = ({ title, tasks, projectId, id }: Props) => {
    const [expanded, setExpanded] = React.useState(true)
    const { t } = useTranslation()
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
            $expanded={expanded}
            $isOver={isOver}
            ref={(e) => { drop(e) }}
        >
            <HeaderWrapper>
                <TitleWrapper
                    onContextMenu={(e) => {
                        e.preventDefault()
                        setExpanded((t) => !t)
                    }}
                    onClick={() => openStageEdit(id)}
                >
                    <Title>{expanded ? title : '...'}</Title>
                </TitleWrapper>
                {expanded && (
                    <Button $secondary onClick={() => createTask({
                        stageId: id, title: t('pages.tasks.newTaskName')
                    })}>
                        <Icon icon={'add'} />
                    </Button>
                )}
            </HeaderWrapper>
            {expanded && tasks.map((t, index) => (
                <TaskItem
                    projectId={projectId}
                    index={index}
                    key={t.id}
                    id={t.id}
                    name={t.title}
                    assigned={t.assigned}
                    dueDate={t.dueDate}
                />
            ))}
        </Container>
    )
}

type ContainerProps = {
    $isOver: boolean,
    $expanded?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 8px;
    cursor: default;
    border: 1px solid rgba(0,0,0,0);
    min-height: 100vh;
    ${({ $isOver }) => $isOver && css`
        border: 1px solid ${themeVar('accent500')};
    `}
    ${({ $expanded }) => !$expanded && css`
        cursor: pointer;
        width: 64px;
    `}
`

const HeaderWrapper = styled.div`
    background-color:${themeVar('default800')};
    border: 1px solid ${themeVar('default700')};
    padding: 16px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    height: 64px;
    border-radius: 8px;
    & > * {
        white-space: nowrap;
        overflow: hidden;
    }
`


const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 10px;
    flex: 1;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 300;
    &:hover {
        color: ${themeVar('default300')};
        cursor: pointer;
    }
`
