import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'

import { userForm } from '../../model/private'
import { Button, Input } from 'igoresha-dev-ui-kit'
import { Icon } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

export const CreateForm = () => {
    const { t } = useTranslation()
    const login = useField(userForm.fields.login)
    const name = useField(userForm.fields.name)
    const password = useField(userForm.fields.password)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userForm.submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <label>{t('pages.users.createForm.login')}</label>
            <Input
                placeholder={'user'}
                value={login.value}
                onChange={login.set}
                hasError={login.hasError()}
                errorText={login.errorText()}
            />
            <label>{t('pages.users.createForm.name')}</label>
            <Input
                placeholder={''}
                value={name.value}
                onChange={name.set}
                hasError={name.hasError()}
                errorText={name.errorText()}
            />
            <label>{t('pages.users.createForm.password')}</label>
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
                {t('misc.create')}
            </Button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`