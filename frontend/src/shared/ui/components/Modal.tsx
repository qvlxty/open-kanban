import React from 'react'
import styled, { css } from 'styled-components'
import { MOBILE_WIDTH, TABLET_WIDTH, themeVar } from '../theming'

type Props = {
    visible: boolean,
    onClose: () => void,
    centered?: boolean
    full?: boolean
    size?: 'lg' | 'sm',
    children?: React.ReactNode
}

export const Modal: React.FC<Props> = ({ visible, onClose, children, centered = false, full, size = 'sm' }) => {
    React.useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
            return
        }
        document.body.style.overflow = 'auto'
    }, [visible])

    if (!visible) {
        return null
    }
    return (
        <Overlay onClick={() => onClose()} centered={centered}>
            <Container centered={centered} size={size} full={full} onClick={(e) => e.stopPropagation()}>
                <div>{children}</div>
            </Container>
        </Overlay>
    )
}

type ContainerProps = {
    centered: boolean
    full?: boolean
    size: Props['size']
}

const Container = styled.div<ContainerProps>`
    border: 3px solid ${themeVar('default600')};
    background-color: ${themeVar('backgroundColor')};
    width: 85vw;
    padding: 16px;
    min-width: 320px;
    max-width: ${TABLET_WIDTH}px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0, 0, 8px, #111;
    border-radius: 8px;

    padding-bottom: 60px;
    ${({ size }) => size === 'sm' && css`
        max-width: ${MOBILE_WIDTH}px;
    `}
    ${({ centered }) => !centered && css`
        margin-top: 16px;
    `}

    ${({ full }) => full && css`
        position: fixed;
        border: none;
        top: 0;
        left: 0;
        border-radius: 0;
        width: 100vw;
        height: 100vh;
        overflow: auto;
        max-height: unset;
        max-width: unset;
        margin-top: 0;
    `}
`

type OverlayProps = {
    centered: boolean
}

const Overlay = styled.div<OverlayProps>`
    z-index: 20;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position:fixed; 
    top: 0;
    left: 0;
    background-color: #11111199;
    overflow: hidden;
    overflow-anchor: auto;
    backdrop-filter: blur(2px);
    ${({ centered }) => centered && css`
        align-items: center;
    `}
    
`