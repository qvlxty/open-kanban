import { createForm } from "effector-forms";
import { requiredValidator } from "@/shared/lib/validator";
import { attach } from "effector";
import { loginReqFx } from "@/dal";

export const loginFx = attach({ effect: loginReqFx })

export const loginForm = createForm({
    fields: {
        login: {
            init: "",
            rules: [requiredValidator],
        },
        password: {
            init: "", 
            rules: [requiredValidator],
        },
    },
    validateOn: ["submit"],
})
