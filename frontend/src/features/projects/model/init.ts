import { sample } from "effector";
import { 
    $projects, 
    createProject, 
    createProjectFx, 
    deleteProject, 
    deleteProjectFx, 
    getProjectsFx, 
    openUpdateProject, 
    projectForm, 
    ProjectsGate,
    updateProjectFx
 } from "./private";

$projects
    .on(getProjectsFx.doneData, (_,s) => s)

sample({
    clock: [
        ProjectsGate.open,
        createProjectFx.done,
        updateProjectFx.done,
        deleteProjectFx.done,
    ],
    target: getProjectsFx
})

sample({
    clock: createProject,
    fn: () => ({ title: 'Проект' }),
    target: createProjectFx
})

sample({
    clock: openUpdateProject,
    target: projectForm.set
})

sample({
    clock: deleteProject,
    target: deleteProjectFx
})

sample({
    clock: [
        deleteProjectFx.done,
        updateProjectFx.done,
    ],
    target: projectForm.reset,
})

sample({
    clock: projectForm.formValidated,
    fn: (p) => ({ id: p.id!, title: p.title }),
    target: updateProjectFx
})