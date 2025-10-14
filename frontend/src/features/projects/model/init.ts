import { sample } from "effector";
import { 
    $projects, 
    createProject, 
    createProjectFx, 
    getProjectsFx, 
    ProjectsGate
 } from "./private";

$projects
    .on(getProjectsFx.doneData, (_,s) => s)

sample({
    clock: ProjectsGate.open,
    target: getProjectsFx
})

sample({
    clock: createProject,
    fn: () => ({ title: 'Проект' }),
    target: createProjectFx
})