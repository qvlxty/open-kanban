import { AvatarThumb } from "@/shared/ui"
import styled from "styled-components"

type Props = {
    login: string,
    name: string,
    onClick?: () => void
}

export const ParticipantItem = ({ login, name, onClick }: Props) => {
    return (
        <Container onClick={() => onClick?.()}>
            <AvatarThumb
                nickname={login}
            />
            {name}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    height: 40px;
    cursor: pointer;
`