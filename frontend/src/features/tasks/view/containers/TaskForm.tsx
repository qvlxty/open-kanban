import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { Button, DatePicker, Icon, Input, MdEditor } from '@/shared/ui'

import { taskForm } from '../../model/private'
import { deleteTask } from '../../model'
import { ParticipantField } from './ParticipantsField'
import { CurrentParticipant } from './CurrentParticipant'
import { ParticipantItem } from '../parts'
import { toNormalDateCalendar } from '@/shared/lib/dates'


export const TaskForm = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
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
            <label>Название задачи</label>
            <Input
                ref={inputRef}
                value={fields.title.value}
                onChange={fields.title.set}
                hasError={fields.title.hasError()}
                errorText={fields.title.errorText()}
            />
            <Row>
                <EditorWrapper>
                    <label>Описание</label>
                    <MdEditor
                        value={fields.description.value}
                        onChange={fields.description.set}
                    />
                </EditorWrapper>
                <SpecCol>
                    {fields.user.value && (
                        <>
                            <label>Дата создания</label>
                            <SpecRow>
                                <Icon icon='calendar' />
                                {toNormalDateCalendar(fields.createdDateAt.value)}
                            </SpecRow>
                        </>
                    )}
                    {fields.user.value && (
                        <>
                            <label>Создатель задачи</label>
                            <ParticipantItem
                                login={fields.user.value?.login}
                                name={fields.user.value?.name}
                            />
                        </>
                    )}
                    <label>Дедлайн</label>
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
                    Сохранить
                </Button>
                <Button type='reset' $haveIcon $danger onClick={() => deleteHandler()}>
                    <Icon icon={'delete'} />
                    Удалить
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