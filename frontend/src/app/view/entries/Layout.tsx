import React from 'react'
import styled from 'styled-components'
import { NavPanel } from './NavPanel'
import { Outlet } from 'react-router'


export const Layout = () => {
    return (
        <Container>
            <NavPanel />
            <ContentWrapper>
                <Outlet />
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