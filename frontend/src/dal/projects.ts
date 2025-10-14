import { attachWrapper } from "@42px/effector-extra"
import { authRequestFx } from "./request"


export const updateProjectReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: ({id, title}: {id: number, title: string}) => ({
        url: `/projects/${id}`,
        method: 'patch',
        body: { title }
    }),
    mapResult: ({ result }) => result.data as void
})

export const createProjectReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: { title: string}) => ({
        url: `/projects`,
        method: 'post',
        body
    }),
    mapResult: () => ({}),
})

export const getProjectsReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: `/projects`,
        method: 'get',
    }),
    mapResult: ({ result }) => result.data,
})



export const deleteProjectReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/projects/${id}`,
        method: 'delete',
    }),
    mapResult: ({ result }) => result.data as string,
})
