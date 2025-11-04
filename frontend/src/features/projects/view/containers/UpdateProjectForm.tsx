import styled from 'styled-components'
import { useForm } from 'effector-forms'

import React from 'react'
import { $loading, deleteProject, projectForm } from '../../model/private'
import { useUnit } from 'effector-react'
import { Button, Input } from 'igoresha-dev-ui-kit'
import { useTranslation } from 'react-i18next'


export const UpdateProjectForm = () => {
    const { submit, fields } = useForm(projectForm)
    const { t } = useTranslation()
    const loading = useUnit($loading)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm(t('pages.projects.deleteConfirm'))) {
            deleteProject(fields.id.value!)
        }
    }, [t])

    return (
        <Container onSubmit={handleSubmit}>
            <label>{t('pages.projects.updateForm.name')}</label>
            <Input
                value={fields.title.value}
                onChange={fields.title.set}
                hasError={fields.title.hasError()}
                errorText={fields.title.errorText()}
                autoFocus
            />
            <Separator />
            <ButtonsCaption>
                <Button disabled={loading} type='submit'>
                    {t('misc.save')}
                </Button>
                <Button disabled={loading} $danger onClick={() => deleteHandler()}>
                    {t('misc.delete')}
                </Button>
            </ButtonsCaption>
        </Container>
    )
}

const ButtonsCaption = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
`

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
`

const Separator = styled.div`
    flex: 1;
`