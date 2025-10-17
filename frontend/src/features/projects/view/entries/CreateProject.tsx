import { Button, Icon } from "@/shared/ui"
import { createProject } from "../../model/private"

export const CreateProject = () => {
    return (
        <Button haveIcon onClick={() => createProject()}>
            <Icon icon='add' />
            Создать проект
        </Button>
    )
}