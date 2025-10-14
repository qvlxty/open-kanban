import React from 'react'
import styled from 'styled-components'

import { Slots } from '@/features/slots/view'


export const SlotsPage = () => {
    return (
        <Container>
            <Slots />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 800px;
`