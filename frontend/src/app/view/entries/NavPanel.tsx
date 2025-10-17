import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { $isUserAuthorized, logout } from '@/features/login/model'
import { Icon } from '@/shared/ui'
import { useUnit } from 'effector-react'
import { themeVar, toggleTheme } from '@/shared/ui/theming'


export const NavPanel = () => {
    const isUserAuthorized = useUnit($isUserAuthorized)
    if (!isUserAuthorized) {
        return null
    }
    return (
        <Container>
            <Wrapper>
                <IconWrapper to={'/projects'}>
                    <Icon
                        icon={'kanban'}
                        size={24}
                    />
                </IconWrapper>
                <IconWrapper to={'/users'}>
                    <Icon
                        icon={'users'}
                        size={24}
                    />
                </IconWrapper>
                <IconWrapper to={'/slots'}>
                    <Icon
                        icon={'calendar'}
                        size={24}
                    />
                </IconWrapper>

                <Separator />
                <IconWrapper onClick={() => toggleTheme()} to={'#'} >
                    <Icon
                        icon={'lamp'}
                        size={24}
                    />
                </IconWrapper>
                <IconWrapper onClick={() => logout()} to={'#'} >
                    <Icon
                        icon={'logout'}
                        size={24}
                    />
                </IconWrapper>
            </Wrapper>
        </Container >
    )
}

const Container = styled.div`
    width: 60px;
    position: fixed;
    height: 100vh;
    border-right: 1px solid ${themeVar('default700')};
    background: ${themeVar('default800')};
    background-size: cover;
    z-index: 11;
  
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;
`

const IconWrapper = styled(Link)`
    display: flex;
    align-items: center;
    border: 1px solid #00000000;
    justify-content: center;

    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    & * {
        color: ${themeVar('default500')};
    }
    &:hover {
        background-color: ${themeVar('default800')};
        border: 1px solid ${themeVar('default700')};
        svg {
            fill: ${themeVar('default600')};
            stroke: ${themeVar('default600')};
        }
    }
`


const Separator = styled.div`
    flex-shrink: 1;
    flex-grow: 1;
`
