import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import DatePicker from 'react-datepicker'
import { $users } from '@/features/users/model'
import { Button, Dropdown, Icon, Input, MdEditor } from '@/shared/ui'

import "react-datepicker/dist/react-datepicker.css";
import { ru } from 'date-fns/locale'
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
            <label>Описание задачи</label>
            <MdEditor
                value={fields.description.value}
                onChange={fields.description.set}
            />
            <label>Ответственные </label>
            <Dropdown
                placeholder='Ответственные'
                options={users}
                selected={fields.userId.value}
                onOptionChange={fields.userId.onChange}
            />
            <label>Дедлайн</label>
            <DatePicker
                selected={fields.dueDate.value}
                onChange={fields.dueDate.set}
                showTimeSelect
                locale={ru}
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="d MMMM yyyy HH:mm"
            />

            <ActionButtons>
                <Button haveIcon danger onClick={() => deleteHandler()}>
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
    margin-top: 12px;
    box-sizing: border-box;
`


const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-end;
    & > button {
        flex: 1;
    }
`