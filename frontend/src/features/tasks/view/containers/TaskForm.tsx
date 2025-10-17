import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { $users } from '@/features/users/model'
import { Button, DatePicker, Dropdown, Icon, Input, MdEditor } from '@/shared/ui'

import { useStoreMap } from 'effector-react'
import { taskForm } from '../../model/private'
import { deleteTask } from '../../model'


export const TaskForm = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const users = useStoreMap({
        store: $users,
        keys: [],
        fn: (u) => u.map((item) => ({ value: item.id, text: item.name }))
    })
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
                     <label>Дедлайн</label>
                     <DatePicker
                        placeholder='DD/MM/YYYY' 
                        value={fields.dueDate.value}
                        onChange={fields.dueDate.set}
                     />
                    <label>Добавить исполнителей </label>
                    <Dropdown
                        placeholder='Исполнители'
                        options={users}
                        selected={fields.userId.value}
                        onOptionChange={fields.userId.onChange}
                    />
                </SpecCol>
            </Row>
            <Separator />
            <ActionButtons>
                <Button type='reset' haveIcon onClick={() => submit()}>
                    <Icon icon={'save'} />
                    Сохранить
                </Button>
                <Button type='reset' haveIcon danger onClick={() => deleteHandler()}>
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