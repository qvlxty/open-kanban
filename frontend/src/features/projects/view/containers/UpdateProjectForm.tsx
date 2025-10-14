import styled from 'styled-components'
import { useForm } from 'effector-forms'

import React from 'react'
import { Button, Input } from '@/shared/ui'
import { deleteProject, projectForm } from '../../model/private'


export const UpdateProjectForm = () => {
    const { submit, fields } = useForm(projectForm)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm('Удалить проект?')) {
            deleteProject(fields.id.value!)
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
