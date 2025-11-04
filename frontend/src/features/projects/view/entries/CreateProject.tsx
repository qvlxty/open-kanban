import { Button } from "igoresha-dev-ui-kit"
import { Icon } from "@/shared/ui"
import { createProject } from "../../model/private"
import { useTranslation } from "react-i18next"

export const CreateProject = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'pages.projects' })
    return (
        <Button $haveIcon onClick={() => createProject()}>
            <Icon icon='add' />
            {t('create')}
        </Button>
    )
}