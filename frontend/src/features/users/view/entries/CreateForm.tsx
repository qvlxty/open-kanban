import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'
import { Input, Button } from '@/shared/ui'

import { userForm } from '../../model/private'

export const CreateForm = () => {
    const login = useField(userForm.fields.login)
    const fio = useField(userForm.fields.fio)
    const password = useField(userForm.fields.password)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userForm.submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                placeholder={'Логин'}
                value={login.value}
                onChange={login.set}
                hasError={login.hasError()}
                errorText={login.errorText()}
            />
            <Input
                placeholder={'ФИО'}
                value={fio.value}
                onChange={fio.set}
                hasError={fio.hasError()}
                errorText={fio.errorText()}
            />
            <Input
                placeholder={'Пароль'}
                value={password.value}
                onChange={password.set}
                hasError={password.hasError()}
                errorText={password.errorText()}
            />
            <Button type='submit'>
                Создать
            </Button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`