import React from 'react'
import styled from 'styled-components'

import { CreateForm, UserList } from '@/features/users/view'
import { TabBar } from '@/shared/ui'

export const UsersPage = () => {
    const [curPage, setCurPage] = React.useState<'list' | 'create'>('list')
    return (
        <Container>
            <TabBar
                onSet={setCurPage}
                selected={curPage}
                options={[
                    { value: 'list', text: 'Список юзеров' },
                    { value: 'create', text: 'Добавить' },
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