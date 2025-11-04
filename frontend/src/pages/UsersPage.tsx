import React from 'react'
import styled from 'styled-components'

import { CreateForm, UserList } from '@/features/users/view'
import { TabBar } from 'igoresha-dev-ui-kit'
import { useTranslation } from 'react-i18next'

export const UsersPage = () => {
    const [curPage, setCurPage] = React.useState<'list' | 'create'>('list')
    const { t } = useTranslation()
    return (
        <Container>
            <TabBar
                onSet={setCurPage}
                selected={curPage}
                options={[
                    { value: 'list', title: t('pages.users.list') },
                    { value: 'create', title: t('pages.users.create') },
                ]}
            />
            {curPage === 'list' && (
                <UserList />
            )}
            {curPage === 'create' && (
                <CreateForm />
            )}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 800px;
    gap: 24px;
`