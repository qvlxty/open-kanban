import { SettingsBase } from "@/features/settings/view"
import styled from "styled-components"

export const SettingsPage = () => {


    return (
        <Container>
            <SettingsBase />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 800px;
`