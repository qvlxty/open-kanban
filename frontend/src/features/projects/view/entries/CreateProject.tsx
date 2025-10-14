import { Button } from "@/shared/ui"
import { createProject } from "../../model/private"

export const CreateProject = () => {
    return (
        <Button onClick={() => createProject()}>
            Создать проект
        </Button>
    )
}