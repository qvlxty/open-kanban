import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { Icon, MdEditor } from '@/shared/ui'
import { deleteStage, stageForm } from '../../model/private'
import { Button, Input } from 'igoresha-dev-ui-kit'
import { useTranslation } from 'react-i18next'


export const StageEditForm = () => {
    const { submit, fields } = useForm(stageForm)
    const { t } = useTranslation()
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm(t('pages.stages.deleteConfirm'))) {
            deleteStage()
        }
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <label>{t('pages.stages.updateForm.title')}</label>
            <Input
                value={fields.title.value}
                onChange={fields.title.set}
                hasError={fields.title.hasError()}
                errorText={fields.title.errorText()}
            />
            <label>{t('pages.stages.updateForm.description')}</label>
            <MdEditor
                value={fields.description.value}
                onChange={fields.description.set}
            />
            <Separator />
            <ActionButtons>
                <Button $haveIcon type='submit'>
                    <Icon icon='save' />
                    {t('misc.save')}
                </Button>
                <Button $haveIcon $danger onClick={() => deleteHandler()}>
                    <Icon icon='delete' />
                    {t('misc.delete')}
                </Button>
            </ActionButtons>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
`

const Separator = styled.div`
    flex: 1;
`

const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 16px;
`