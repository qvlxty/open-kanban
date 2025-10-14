import styled from 'styled-components'
import { ProjectList } from '@/features/projects/view'


export const ProjectsPage = () => {
    return (
        <Container>
            <ProjectList />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 800px;
    margin-top: 24px;
`