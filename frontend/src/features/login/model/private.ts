import { createForm } from "effector-forms";
import { requiredStringValidator } from "@/shared/lib/validator";
import { attach } from "effector";
import { loginReqFx } from "@/dal";

export const loginFx = attach({ effect: loginReqFx })

export const loginForm = createForm({
    fields: {
        login: {
            init: "",
            rules: [requiredStringValidator],
        },
        password: {
            init: "", 
            rules: [requiredStringValidator],
        },
    },
    validateOn: ["submit"],
})
