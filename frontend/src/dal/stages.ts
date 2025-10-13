import { attachWrapper } from "@42px/effector-extra";
import { KanbanColumn, StageDto, TaskDto } from "./types";
import { authRequestFx } from "./request";

export const fetchKanbanReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        method: 'get',
        url: '/stages',
    }),
    mapResult: ({ result }) => result.data as [KanbanColumn[], TaskDto[]]
})

export const createStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        body: {
            title: 'Новая колонка',
            description: 'Описание колонки',
        },
        url: '/stage',
        method: 'post',
    }),
    mapResult: () => ({})
})

export type UpdateVacancyPayload = {
    id: number,
    title: string,
    description: string,
}

export const updateStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateVacancyPayload) => ({
        body,
        url: `/stage/${body.id}`,
        method: 'patch',
    }),
    mapResult: () => ({})
})

export const deleteStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/vacancy/${id}`,
        method: 'delete',
    }),
    mapResult: () => ({})
})

export const fetchSingleStageReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/vacancy/${id}`,
        method: 'get',
    }),
    mapResult: ({ result }) => result.data as StageDto,
})

