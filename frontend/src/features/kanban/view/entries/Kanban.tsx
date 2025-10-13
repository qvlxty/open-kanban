import React from 'react'
import { useGate, useUnit } from 'effector-react'
import styled from 'styled-components'

import { $kanbanColumns, KanbanGate } from '../../model/private'
import { StageColumn } from '../containers'


export const Kanban = () => {
    const kanbanColumns = useUnit($kanbanColumns)

    useGate(KanbanGate)

    return (
        <Container>
            {kanbanColumns.map((columnData) => (
                <StageColumn
                    key={columnData.id}
                    {...columnData}
                />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`