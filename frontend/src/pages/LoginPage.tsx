import styled from 'styled-components'
import { LoginForm } from '@/features/login/view'

export const LoginPage = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`