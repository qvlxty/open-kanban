import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { Button, Input, MdEditor } from '@/shared/ui'
import { deleteStage, stageForm } from '../../model/private'


export const StageEditForm = () => {
    const { submit, fields } = useForm(stageForm)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm('Удаление ')) {
            deleteStage()
        }
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                value={fields.title.value}
                onChange={fields.title.set}
                hasError={fields.title.hasError()}
                errorText={fields.title.errorText()}
            />
            <MdEditor
                value={fields.description.value}
                onChange={fields.description.set}
            />
            <Button type='submit'>
                Сохранить
            </Button>
            <Button danger onClick={() => deleteHandler()}>
                Удалить
            </Button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
