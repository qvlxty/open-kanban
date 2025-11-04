import React from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '@/shared/ui'
import { openUpdateProject } from '../../model/private'
import { Link } from 'react-router'
import { Routes } from '@/routes/config'
import { Button, themeVar } from 'igoresha-dev-ui-kit'

type Props = {
    id: number,
    title: string,
}

export const ProjectItem: React.FC<Props> = (
    { id, title }
) => (
    <TableRowsWrapper to={`${Routes.kanban}/${id}`} key={id}>
        <ColWrapper style={{ maxWidth: '700px', justifyContent: 'flex-start', flex: 1, textAlign: 'left' }} >
            <LoginWrapper>
                {title}
            </LoginWrapper>
        </ColWrapper>
        <ColWrapper width={'96px'} style={{ justifyContent: 'flex-end', paddingRight: '12px' }}>
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    openUpdateProject({ id, title })
                }}>
                <Icon icon='edit' />
            </Button>
        </ColWrapper>
    </TableRowsWrapper>
)


const LoginWrapper = styled.div`
    margin-left: 12px;
    text-align: left;
    justify-content: start;
    font-size: 18px;
    font-weight: 500;
`

const TableRowsWrapper = styled(Link)`
    text-decoration: none;
    color: ${themeVar('fontColor')};
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;

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
