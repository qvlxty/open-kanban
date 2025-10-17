import styled from 'styled-components'

import { Kanban } from '@/features/kanban/view'
import { TaskEditModal } from '@/features/tasks/view'
import { StageEditModal } from '@/features/stages/view'

export const KanbanPage = () => {
    return (
        <Container>
            <TaskEditModal />
            <StageEditModal />
            <Kanban />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`