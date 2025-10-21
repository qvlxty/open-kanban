import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'
import { Input, Button, Icon } from '@/shared/ui'

import { userForm } from '../../model/private'

export const CreateForm = () => {
    const login = useField(userForm.fields.login)
    const name = useField(userForm.fields.name)
    const password = useField(userForm.fields.password)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userForm.submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <label>Логин</label>
            <Input
                placeholder={'user'}
                value={login.value}
                onChange={login.set}
                hasError={login.hasError()}
                errorText={login.errorText()}
            />
            <label>Имя</label>
            <Input
                placeholder={''}
                value={name.value}
                onChange={name.set}
                hasError={name.hasError()}
                errorText={name.errorText()}
            />
            <label>Пароль</label>
            <Input
                placeholder={'qwerty'}
                value={password.value}
                onChange={password.set}
                hasError={password.hasError()}
                errorText={password.errorText()}
                type='password'
            />
            <Button $haveIcon type='submit'>
                <Icon icon='add' />
                Создать
            </Button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`