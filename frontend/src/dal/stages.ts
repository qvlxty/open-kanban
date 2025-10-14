import { attachWrapper } from "@42px/effector-extra";
import { KanbanColumnDto, StageDto } from "./types";
import { authRequestFx } from "./request";

export const fetchKanbanReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (projectId: number) => ({
        method: 'get',
        url: `/stages/${projectId}`,
    }),
    mapResult: ({ result }) => result.data as KanbanColumnDto[]
})

export const createStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (projectId: number) => ({
        body: {
            title: 'Новая колонка',
            description: 'Описание колонки',
            projectId
        },
        url: '/stages',
        method: 'post',
    }),
    mapResult: () => ({})
})

export type UpdateStagesPayload = {
    id: number,
    title: string,
    description: string,
}

export const updateStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateStagesPayload) => ({
        body,
        url: `/stage/${body.id}`,
        method: 'patch',
    }),
    mapResult: () => ({})
})

export const deleteStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/stages/${id}`,
        method: 'delete',
    }),
    mapResult: () => ({})
})

export const fetchSingleStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/stages/${id}`,
        method: 'get',
    }),
    mapResult: ({ result }) => result.data as StageDto,
})

