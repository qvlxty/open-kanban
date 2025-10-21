import { createStage } from "@/features/stages/model"
import { Button, Icon } from "@/shared/ui"
import styled from "styled-components"

export const Empty = () => {
    return (
        <Container>
            <h1>Канбан проекта пуст</h1>
            <Button 
                $haveIcon
                onClick={() => createStage()}
            >
                <Icon icon='add' />
                Создать первую колонку
            </Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin-top: 24px;
    margin-left: 48px;
    gap: 16px;
`