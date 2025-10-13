import React from 'react'
import styled from 'styled-components'

import { Kanban } from '@/features/kanban/view'

export const KanbanPage = () => {
    return (
        <Container>
            <Kanban />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`