import React from 'react'
import styled, { css } from 'styled-components'

import { themeVar } from '@/shared/ui/theming'
import { toNormalDateCalendar } from '@/shared/lib/dates'
import { Link } from 'react-router'
import { Routes } from '@/routes/config'

type Props = {
    id: number,
    title: string,
    date: string,
    stageName: string,
    projectId: number,
}

export const SlotItem: React.FC<Props> = (
    { id, title, date, stageName, projectId }
) => {
    return (
        <TableRowsWrapper
            key={id}
            to={`${Routes.kanban}/${projectId}/${id}`}
        >
            <ColWrapper style={{ flex: 1 }} >
                {title}
            </ColWrapper>
            <ColWrapper style={{ width: '200px', }} >
                {date && <>{toNormalDateCalendar(date)}</>}
            </ColWrapper>
            <ColWrapper style={{ justifyContent: 'flex-end', paddingRight: 16 }}>
                {stageName}
            </ColWrapper>
        </TableRowsWrapper>
    )
}



const TableRowsWrapper = styled(Link)`
    text-decoration: none;
    color: ${themeVar('fontColor')};
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    padding: 12px;
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
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    
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
