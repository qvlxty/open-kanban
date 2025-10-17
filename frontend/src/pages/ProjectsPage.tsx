import styled from 'styled-components'
import { CreateProject, ProjectList } from '@/features/projects/view'


export const ProjectsPage = () => {
    return (
        <Container>
            <h1>Проекты</h1>
            <CreateProject />
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
    gap: 16px;
`