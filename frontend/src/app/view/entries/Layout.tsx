import { NavPanel } from 'igoresha-dev-ui-kit'
import styled, { css } from 'styled-components'
import { Link, Outlet } from 'react-router'
import { useUnit } from 'effector-react'
import { $isUserAuthorized } from '@/features/login/model'
import { Routes } from '@/routes/config'
import { Icon } from '@/shared/ui'


export const Layout = () => {
    const isUserAuthorized = useUnit($isUserAuthorized)
    return (
        <Container >
            {isUserAuthorized && (
                <NavPanel
                    links={[
                        { to: Routes.projects, icon: <Icon icon='kanban' size={20} /> },
                        { to: Routes.users, icon: <Icon icon='users' size={20} /> },
                        { to: Routes.slots, icon: <Icon icon='calendar' size={20} /> },
                        'Separator',
                        { to: Routes.settings, icon: <Icon icon='settings' size={20} /> },
                    ]}
                    LinkElement={Link}
                />)}
            <ContentWrapper $isUserAuthorized={isUserAuthorized}>
                <Outlet />
            </ContentWrapper>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;

`

const ContentWrapper = styled.div<{ $isUserAuthorized?: boolean }>`
    display: flex;
    padding-top: 24px;
    ${({ $isUserAuthorized }) => $isUserAuthorized && css`
        margin-left: 80px;
    `}
`