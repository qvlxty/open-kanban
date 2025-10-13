import React from 'react'
import styled from 'styled-components'
import { useField, useForm } from 'effector-forms'

import { Button, Input } from '@/shared/ui'
import { loginForm } from '../../model/private'

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
            />
            <Input
                value={fields.password.value}
                onChange={fields.password.set}
                hasError={fields.password.hasError()}
                errorText={fields.password.errorText()}
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