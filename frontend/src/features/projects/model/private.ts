import { createGate } from "effector-react";
import { d } from "./domain";
import { ProjectDto } from "@/dal/types";
import { createForm } from "effector-forms";
import { requiredNumberValidator, requiredStringValidator } from "@/shared/lib/validator";
import { attach } from "effector";
import { createProjectReqFx, deleteProjectReqFx, getProjectsReqFx, updateProjectReqFx } from "@/dal/projects";

export const $projects = d.store<ProjectDto[]>([])
export const ProjectsGate = createGate()

export const projectForm = createForm({
    fields: {
        id: {
            init: null as number | null,
            rules: [requiredNumberValidator],
        },
        title: {
            init: "",
            rules: [requiredStringValidator],
        },
    },
    validateOn: ['submit']
})
export const $modalVisible = projectForm
    .fields
    .id
    .$value
    .map((t) => t !== null)
export const openUpdateProject = d.event<number>()


export const createProject = d.event()
export const createProjectFx = attach({ effect: createProjectReqFx })
export const updateProjectFx = attach({ effect: updateProjectReqFx })
export const getProjectsFx = attach({ effect: getProjectsReqFx })
export const deleteProject = d.event<number>()
export const deleteProjectFx = attach({ effect: deleteProjectReqFx })