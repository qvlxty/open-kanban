import React from 'react'
import { MonthCaptionProps, useDayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import styled from 'styled-components'
import {ru} from 'date-fns/locale/ru'

export function PickerCaption(props: MonthCaptionProps) {
    const { goToMonth, nextMonth, previousMonth } = useDayPicker()
    return (
        <Container>
            <LeftButton
                onClick={() => previousMonth && goToMonth(previousMonth)}
            />
            {/* {format(props.displayMonth, 'MMM yyy', { locale: ru })} */}
            <RightButton
                onClick={() => nextMonth && goToMonth(nextMonth)}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 8px;
`

export const LeftButton = styled.div`
    cursor: pointer;
    width: 16px;
    height: 16px;
    &::after {
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom:6px solid black;
    }
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
`

export const RightButton = styled.div`
    cursor: pointer;
    width: 16px;
    height: 16px;
    &::after {
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid black;
    }
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
`