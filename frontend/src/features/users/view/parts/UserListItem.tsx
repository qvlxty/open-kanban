import React from 'react'
import styled, { css } from 'styled-components'

import { deleteUser } from '../../model/private'
import { themeVar } from '@/shared/ui/theming'
import { Button } from '@/shared/ui'

type Props = {
    id: number,
    login: string,
    name: string,
}

export const UserListItem: React.FC<Props> = (
    { id, login, name }
) => {

    const handleDelete = React.useCallback((id: string | number) => {
        if (confirm('Вы действительно хотите удалить данного юзера?')) {
            deleteUser(id)
        }
    }, [])

    return (
        <TableRowsWrapper key={id}>
            <ColWrapper width={'32px'} center style={{ marginLeft: '16px' }} >
                {id}
            </ColWrapper>
            <ColWrapper style={{ maxWidth: '700px', justifyContent: 'flex-start', flex: 1, textAlign: 'left' }} >
                <LoginWrapper>
                    {login}
                </LoginWrapper>
            </ColWrapper>
            <ColWrapper style={{ maxWidth: '700px', justifyContent: 'flex-start', flex: 1, textAlign: 'left' }} >
                <LoginWrapper>
                    {name}
                </LoginWrapper>
            </ColWrapper>
            <ColWrapper width={'96px'} style={{ justifyContent: 'flex-end', paddingRight: 16 }}>
                <Button onClick={() => handleDelete(id)}>
                    Удалить
                </Button>
            </ColWrapper>
        </TableRowsWrapper>
    )
}


const LoginWrapper = styled.div`
    margin-left: 12px;
    text-align: left;
    justify-content: start;
    font-size: 13px;
    font-weight: 500;
`

const TableRowsWrapper = styled.div`
    text-decoration: none;
    color: ${themeVar('fontColor')};
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 16px;

    &:nth-child(even) {
        background-color: ${themeVar('backgroundColor')};
    }
    &:hover {
        background-color: ${themeVar('default700')};
        cursor: pointer;
    }
`

type ColWrapperProps = {
    hideMobile?: boolean
    width?: string
    center?: boolean
}
const ColWrapper = styled.div<ColWrapperProps>`
    flex-direction: row;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    
    ${({ center }) => center && css`
        /* justify-content: center; */
    `}
    justify-content: center;
    ${({ hideMobile }) => hideMobile && css`
        @media only screen and (max-width: 600px) {
            display: none;
        }
    `}
    ${({ width }) => width && css`
        width: ${width};
        max-width: ${width};
    `}
`
