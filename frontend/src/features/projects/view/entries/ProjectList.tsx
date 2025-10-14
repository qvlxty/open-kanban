import { useGate, useList, useUnit } from "effector-react"
import { $projects, ProjectsGate } from "../../model/private"
import styled from "styled-components"
import { ProjectItem } from "../parts"
import { UpdateProjectModal } from "./UpdateProjectModal"

export const ProjectList = () => {
    useGate(ProjectsGate)
     const projects = useList($projects, (item) => (
        <ProjectItem
            {...item}
        />
    ))

    return (
        <Container>
            <UpdateProjectModal />
            {projects}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`