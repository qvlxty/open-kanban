import React from 'react'
import styled from 'styled-components'
import { useList } from 'effector-react'

import { fetchUsers } from '../../model/private'
import { $users } from '../../model/public'
import { UserListItem } from '../parts'


export const UserList = () => {
    const users = useList($users, (item) => (
        <UserListItem
            {...item}
        />
    ))

    React.useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <Container>
            <h1>Список юзеров</h1>
            {users}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`