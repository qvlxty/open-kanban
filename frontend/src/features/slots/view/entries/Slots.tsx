import styled from 'styled-components'
import { useGate, useList } from 'effector-react'

import { SlotItem } from '../parts'
import { SlotsGate, $nearTasks } from '../../model/private'
import { useTranslation } from 'react-i18next'


export const Slots = () => {
    const { t } = useTranslation()
    const slots = useList($nearTasks, (item) => (
        <SlotItem
            stageName={item.stage.title}
            date={item.dueDate}
            title={item.title}
            id={item.id}
            projectId={item.stage.project.id}
        />
    ))
    useGate(SlotsGate)


    return (
        <Container>
            <h1>{t('pages.slots.title')}</h1>
            <List>
                {slots}
            </List>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
    flex-direction: column;
    gap: 12px;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
`