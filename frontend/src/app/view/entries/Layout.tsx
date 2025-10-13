import React from 'react'
import styled from 'styled-components'
import { NavPanel } from './NavPanel'


export const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <Container>
            <NavPanel />
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;

`

const ContentWrapper = styled.div`
    display: flex;
    margin-left: 64px;
`