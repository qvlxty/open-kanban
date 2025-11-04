import { useClickOutsude } from '@/shared/lib/useClickOutside';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; 
import styled from 'styled-components';
import { toNormalDateCalendar } from '@/shared/lib/dates';
import { Icon } from './Icon';
import { Button, Input, themeVar } from 'igoresha-dev-ui-kit';

type Props = {
    value?: Date | null,
    onChange?: (d: Date | null) => void,
    placeholder?: string
}

export const DatePicker = ({value, onChange, placeholder}:Props) => {
    const [visible, setVisible] = useState(false);

    const ref = useClickOutsude(() => {
        setVisible(false)
    })

    const handleInputFocus = () => {
        setVisible(true);
    };

    const handleDaySelect = (d: Date) => {
        setVisible(false)
        onChange?.(d)
    }

    return (
        <Wrap ref={ref}>
            <Input
                type="text"
                value={value ? toNormalDateCalendar(value) : ''}
                onFocus={handleInputFocus}
                readOnly 
                placeholder={placeholder}
            />
            <Button disabled={!Boolean(value)} type='reset' onClick={() => onChange?.(null)}>
                <Icon icon='delete' />
            </Button>
            {visible && (
                <Container style={{ position: 'absolute', zIndex: 100 }}> 
                    <DayPicker
                        mode="single"
                        selected={value || undefined}
                        onSelect={handleDaySelect}
                        required
                    />
                </Container>
            )}
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`

const Container = styled.div`
    background-color: ${themeVar('contentBg')};
    border-radius: 4px;
    padding: 8px;

`