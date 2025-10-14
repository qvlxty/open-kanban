import { useGate, useList, useUnit } from "effector-react"
import { $projects, ProjectsGate } from "../../model/private"
import styled from "styled-components"
import { ProjectItem } from "../parts"

export const ProjectList = () => {
    useGate(ProjectsGate)
     const projects = useList($projects, (item) => (
        <ProjectItem
            {...item}
        />
    ))

    return (
        <Container>
            {projects}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`