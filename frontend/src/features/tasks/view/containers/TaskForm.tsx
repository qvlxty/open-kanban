import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { DatePicker, Icon, MdEditor } from '@/shared/ui'
import { Button, Input } from 'igoresha-dev-ui-kit'

import { taskForm } from '../../model/private'
import { deleteTask } from '../../model'
import { ParticipantField } from './ParticipantsField'
import { CurrentParticipant } from './CurrentParticipant'
import { ParticipantItem } from '../parts'
import { toNormalDateCalendar } from '@/shared/lib/dates'
import { useTranslation } from 'react-i18next'


export const TaskForm = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const { t } = useTranslation()
    const { fields, submit } = useForm(taskForm)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm('Вы уверены, что хотите удалить задачу?')) {
            deleteTask()
        }
    }, [])

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [])


    return (
        <Container onSubmit={handleSubmit}>
            <label>{t('pages.tasks.updateForm.title')}</label>
            <Input
                ref={inputRef}
                value={fields.title.value}
                onChange={fields.title.set}
                hasError={fields.title.hasError()}
                errorText={fields.title.errorText()}
            />
            <Row>
                <EditorWrapper>
                    <label>{t('pages.tasks.updateForm.description')}</label>
                    <MdEditor
                        value={fields.description.value}
                        onChange={fields.description.set}
                    />
                </EditorWrapper>
                <SpecCol>
                    {fields.user.value && (
                        <>
                            <label>{t('pages.tasks.updateForm.createdDateAt')}</label>
                            <SpecRow>
                                <Icon icon='calendar' />
                                {toNormalDateCalendar(fields.createdDateAt.value)}
                            </SpecRow>
                        </>
                    )}
                    {fields.user.value && (
                        <>
                            <label>{t('pages.tasks.updateForm.user')}</label>
                            <ParticipantItem
                                login={fields.user.value?.login}
                                name={fields.user.value?.name}
                            />
                        </>
                    )}
                    <label>{t('pages.tasks.updateForm.dueDate')}</label>
                    <DatePicker
                        placeholder='DD/MM/YYYY'
                        value={fields.dueDate.value}
                        onChange={fields.dueDate.set}
                    />
                    <ParticipantField />
                    {fields.participants.value.map((t) => (
                        <CurrentParticipant
                            key={t}
                            id={t}
                        />
                    ))}
                </SpecCol>
            </Row>
            <Separator />
            <ActionButtons>
                <Button type='reset' $haveIcon onClick={() => submit()}>
                    <Icon icon={'save'} />
                    {t('misc.save')}
                </Button>
                <Button type='reset' $haveIcon $danger onClick={() => deleteHandler()}>
                    <Icon icon={'delete'} />
                    {t('misc.delete')}
                </Button>
            </ActionButtons>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
    height: 100%;
`

const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-end;
    justify-content: space-between;
`

const Row = styled.div`
    flex-direction: row;
    display: flex;
    gap: 16px;
`

const EditorWrapper = styled.div`
    flex: 1;
    gap: 12px;
    display: flex;
    flex-direction: column;
`

const SpecCol = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Separator = styled.div`
    flex: 1;
`

const SpecRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 40px;
    align-items: center;
    margin-left: 8px;
`