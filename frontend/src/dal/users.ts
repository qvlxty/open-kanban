import { attachWrapper } from "@42px/effector-extra";
import { AxiosError } from "axios";
import { authRequestFx } from "./request";
import { UserDto } from "./types";

export const fetchUsersReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        method: 'get',
        url: '/user',
    }),
    mapResult: ({ result }) => result.data as UserDto[]
})


type RegisterPayload = {
    login: string
    password: string
    fio: string
}

export const createUserFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: RegisterPayload) => ({
        body,
        url: '/user/register',
        method: 'post',
    }),
    mapResult: () => ({}),
    mapError: ({ error }: { error: AxiosError<any> }) => error?.response?.data?.message as string[]
})

export const deleteUserFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (userId: string | number) => ({
        userId,
        url: `/user/${userId}`,
        method: 'delete',
    }),
    mapError: ({ error }: { error: AxiosError<any> }) => error?.response?.data?.message as string[]
})