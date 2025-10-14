import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { $isUserAuthorized, logout } from '@/features/login/model'
import { Icon } from '@/shared/ui'
import { useUnit } from 'effector-react'
import { themeVar, toggleTheme } from '@/shared/ui/theming'
import { createTask } from '@/features/tasks/model'


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
    margin: 16px;
    margin-left: 12px;
    width: 56px;
    border: 1px solid ${themeVar('default700')};
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 20px;
    height: calc(100vh - 32px);
    background: ${themeVar('secondary700')};
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
    justify-content: center;

    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    & * {
        color: ${themeVar('default500')};
    }
    &:hover {
        background-color: ${themeVar('default600')};
        svg {
            fill: ${themeVar('secondary700')};
            stroke: ${themeVar('secondary700')};
        }
    }
`


const Separator = styled.div`
    flex-shrink: 1;
    flex-grow: 1;
`
