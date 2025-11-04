import { sample } from "effector";
import { loginForm, loginFx } from "./private";
import { logout } from "./public";
import { accessTokenApi, onRequestUnauthorized } from "@/dal/request";
import { pushNavigate } from "@/shared/lib/navigate";
import { Routes } from "@/routes/config";
import { fetchUsersFx } from "@/features/users/model";


sample({
    clock: loginForm.formValidated,
    target: loginFx
})

sample({
    clock: loginFx.doneData,
    fn: (d) => d.access_token,
    target: accessTokenApi.saveFx
})

sample({
    clock: onRequestUnauthorized,
    target: logout
})

sample({
    clock: logout,
    fn: () => null,
    target: accessTokenApi.saveFx
})

sample({
    clock: loginFx.doneData,
    fn: () => Routes.projects,
    target: [pushNavigate, fetchUsersFx]
})
