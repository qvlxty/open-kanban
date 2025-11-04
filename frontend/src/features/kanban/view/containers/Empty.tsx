import { Icon } from "@/shared/ui"
import { Button } from "igoresha-dev-ui-kit"
import { createStage } from "@/features/stages/model"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Empty = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <h1>{t('pages.tasks.empty')}</h1>
            <Button
                $haveIcon
                onClick={() => createStage()}
            >
                <Icon icon='add' />
                {t('pages.tasks.emptyAction')}
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