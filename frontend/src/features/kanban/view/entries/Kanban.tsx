import { useGate, useUnit } from 'effector-react'
import styled from 'styled-components'

import { $kanbanColumns } from '../../model/private'
import { Empty, StageColumn } from '../containers'
import { useParams } from 'react-router'
import { KanbanGate } from '../../model'
import { Button, Icon } from '@/shared/ui'
import { createStage } from '@/features/stages/model'


export const Kanban = () => {
    const kanbanColumns = useUnit($kanbanColumns)
    const p = useParams<{ id: string }>()
    useGate(KanbanGate, parseInt(p.id!))


    if (kanbanColumns.length === 0) {
        return <Empty />
    }

    return (
        <Container>
            {kanbanColumns.map((columnData) => (
                <StageColumn
                    key={columnData.id}
                    {...columnData}
                />
            ))}
            <Button style={{ borderRadius: '100%', height: '56px', width: '56px'}} onClick={() => createStage()}>
                <Icon icon='add' size={24} />
            </Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
`