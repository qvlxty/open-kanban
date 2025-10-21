import { attachWrapper } from "@42px/effector-extra"
import { authRequestFx } from "./request"
import { TaskDto } from "./types"


export type SortCardFxPayload = {
    id: number,
    order: number,
}[]


export const sortCardReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: SortCardFxPayload) => ({
        url: '/tasks/order',
        method: 'patch',
        body: {
            orderItems: body
        }
    }),
    mapResult: ({ result }) => result.data as void
})


export type SetTaskStagePayload = {
    stageId: number | null,
    id: number
}

export const setTaskStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: ({id, stageId}: SetTaskStagePayload) => ({
        url: `/tasks/${id}`,
        method: 'patch',
        body: { stageId }
    }),
    mapResult: ({ result }) => result.data as void
})



export const createTaskReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (stageId: number | void) => ({
        url: `/tasks`,
        method: 'post',
        body: {
            title: 'Новая задача',
            stageId,
        }
    }),
    mapResult: () => ({}),
})


export const fetchSingleTaskReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/tasks/${id}`,
        method: 'get',
    }),
    mapResult: ({ result }) => result.data as TaskDto,
})

export const fetchTimetableReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: `/tasks/timetable`,
        method: 'get',
    }),
    mapResult: ({ result }) => result.data as TaskDto[],
})


export type UpdateTaskPayload = {
    id: number,
    title: string,
    description: string,
    dueDate?: string | null,
    participants: number[]
}


export const updateTaskReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateTaskPayload) => ({
        url: `/tasks/${body.id}`,
        method: 'patch',
        body
    }),
    mapResult: ({ result }) => result.data as void,
})


export const deleteTaskReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/tasks/${id}`,
        method: 'delete',
    }),
    mapResult: ({ result }) => result.data as string,
})
