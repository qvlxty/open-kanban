import { sample } from "effector";
import { loginForm, loginFx } from "./private";
import { logout } from "./public";
import { accessTokenApi } from "@/dal/request";


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
    clock: logout,
    fn: () => null,
    target: accessTokenApi.saveFx
})
