import React from 'react'
import styled from 'styled-components'
import { useForm } from 'effector-forms'

import { loginForm } from '../../model/private'
import { Button, Input } from 'igoresha-dev-ui-kit'

export const LoginForm = () => {
    const { submit, fields } = useForm(loginForm)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                value={fields.login.value}
                onChange={fields.login.set}
                hasError={fields.login.hasError()}
                errorText={fields.login.errorText()}
                placeholder='Логин пользователя'
            />
            <Input
                value={fields.password.value}
                onChange={fields.password.set}
                hasError={fields.password.hasError()}
                errorText={fields.password.errorText()}
                placeholder='Пароль пользователя'
                type='password'
            />
            <Button type='submit'>
                Войти
            </Button>
        </Container>
    )
}


const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border: 1px solid #ccc;
    max-width: 360px;
    width: 100%;
`