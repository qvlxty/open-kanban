import React from 'react'
import styled, { css } from 'styled-components'
import { isValid, parse, format } from 'date-fns'
import { usePopper } from 'react-popper'
import FocusTrap from 'focus-trap-react'
import { DayPicker } from 'react-day-picker'
import {ru} from 'date-fns/locale/ru'

import { Input } from './Input'
import { PickerCaption } from './DatePicker'
import { themeVar } from '../theming'

type Props = {
    placeholder?: string
    onChange: (e: string) => void
    inputValue: string
    disabled?: boolean
    error?: boolean
    errorText?: string
    fullWidth?: boolean
    exactWidth?: number
}

export const DateInput = ({
    placeholder,
    onChange,
    inputValue,
    disabled,
    error,
    errorText,
    fullWidth,
    exactWidth,
}: Props) => {
    const [selected, setSelected] = React.useState<Date>()
    const [isPopperOpen, setIsPopperOpen] = React.useState(false)

    const popperRef = React.useRef<HTMLDivElement>(null)
    const [popperElement, setPopperElement] =
        React.useState<HTMLDivElement | null>(null)

    const popper = usePopper(popperRef.current, popperElement, {
        placement: 'bottom-start',
    })

    const closePopper = () => {
        setIsPopperOpen(false)
    }

    const handleInputChange = (value: string) => {
        onChange(value)
        const date = parse(value, 'dd.MM.y', new Date())
        if (isValid(date)) {
            setSelected(date)
        } else {
            setSelected(undefined)
        }
    }
    const handleButtonClick = () => {
        setIsPopperOpen(true)
    }

    const handleDaySelect = (_, date: Date) => {
        setSelected(date)
        if (date) {
            onChange(format(date, 'dd.MM.y'))
            closePopper()
        } else {
            onChange('')
        }
    }

    return (
        <Wrapper fullWidth={fullWidth} exactWidth={exactWidth}>
            <PopperTarget ref={popperRef}>
                <Input
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={inputValue}
                    onClick={disabled ? () => { } : handleButtonClick}
                    disabled={disabled}
                    hasError={error}
                    errorText={errorText}
                />
            </PopperTarget>
            {isPopperOpen && (
                <FocusTrap
                    active
                    focusTrapOptions={{
                        initialFocus: false,
                        allowOutsideClick: true,
                        clickOutsideDeactivates: true,
                        onDeactivate: closePopper,
                    }}
                >
                    <div
                        tabIndex={-1}
                        style={{
                            marginTop: -1,
                            ...popper.styles.popper,
                        }}
                        className='dialog-sheet'
                        {...popper.attributes.popper}
                        ref={setPopperElement}
                        role='dialog'
                    >
                        <DayPicker
                            components={{
                                MonthCaption: PickerCaption
                            }}
                            autoFocus={isPopperOpen}
                            mode='single'
                            defaultMonth={selected}
                            selected={selected}
                            locale={ru}
                            onSelect={handleDaySelect}
                        />
                    </div>
                </FocusTrap>
            )}
        </Wrapper>
    )
}

const PopperTarget = styled.div`
  display: flex;
  flex-direction: column;
`

type WrapperProps = {
    fullWidth?: boolean;
    exactWidth?: number;
}
const Wrapper = styled.div<WrapperProps>`
  ${({ fullWidth }) =>
        fullWidth &&
        css`
      width: 100%;
    `}

  ${({ exactWidth }) =>
        exactWidth &&
        css`
      width: ${exactWidth}px;
    `}

  .dialog-sheet {
    border: 3px solid ${themeVar('default600')};
    background-color: ${themeVar('backgroundColor')};
    z-index: 2;
    border-radius: 8px;
  }
`
