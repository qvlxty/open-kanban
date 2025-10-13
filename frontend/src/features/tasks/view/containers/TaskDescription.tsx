import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'
import { MdEditor } from '@/shared/ui'
import { taskForm } from '../../model/private'


export const TaskDescription = () => {
    const description = useField(taskForm.fields.description)

    return (
        <Container>
            <label>Описание задачи</label>
            <MdEditor
                value={description.value}
                onChange={description.set}
            />
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 12px;
    box-sizing: border-box;
`
