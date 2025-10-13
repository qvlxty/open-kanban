import React from 'react'
import styled from 'styled-components'
import { useGate, useList } from 'effector-react'

import { SlotItem } from '../parts'
import { SlotsGate, $nearTasks } from '../../model/private'
import { openTaskEdit } from '@/features/tasks/model'


export const Slots = () => {
    const slots = useList($nearTasks, (item) => (
        <SlotItem
            onClick={() => openTaskEdit(item.id)}
            stageName={item.stage.title}
            date={item.dueDate}
            title={item.title}
            id={item.id}
        />
    ))
    useGate(SlotsGate)


    return (
        <Container>
            <h1>Предстоящие события</h1>
            {slots}
        </Container>
    )
}

const Container = styled.div`
   display: flex;
    flex-direction: column;
    gap: 12px;
`