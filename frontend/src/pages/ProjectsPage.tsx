import styled from 'styled-components'
import { CreateProject, ProjectList } from '@/features/projects/view'
import { useTranslation } from 'react-i18next'


export const ProjectsPage = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'pages.projects' })
    return (
        <Container>
            <h1>{t('title')}</h1>
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