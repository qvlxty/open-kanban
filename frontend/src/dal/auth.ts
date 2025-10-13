import { attachWrapper } from "@42px/effector-extra";
import { requestFx } from "./request";

export type LoginFxPayload = {
    login: string,
    password: string
}

export const loginReqFx = attachWrapper({
    effect: requestFx,
    mapParams: (body: LoginFxPayload) => {
        return ({
        url: '/auth/login',
        method: 'post',
        body,
    })},
    mapResult: ({ result }): LoginFxResponse => result.data,
})

export type LoginFxResponse = {
    access_token: string
}