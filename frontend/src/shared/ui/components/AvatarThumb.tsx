import { stringToColor } from "@/shared/lib/gen-color-string";
import styled from "styled-components";

type Props = {
    nickname: string
}

export const AvatarThumb = ({ nickname }: Props) => {
    return (
        <Wrap style={{ backgroundColor: stringToColor(nickname) }} >
            {nickname[0].toUpperCase()}
        </Wrap>
    )
}



const Wrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`