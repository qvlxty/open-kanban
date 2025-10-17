import { createUserReqFx, deleteUserReqFx, fetchUsersReqFx } from "@/dal";
import { d } from "./domain";
import { requiredStringValidator } from '@/shared/lib/validator'
import { attach } from "effector";
import { createForm } from 'effector-forms'


export const fetchUsers = d.event()
export const deleteUser = d.event<string | number>()

export const createUserFx = attach({ effect: createUserReqFx })
export const deleteUserFx = attach({ effect: deleteUserReqFx })


export const userForm = createForm({
    fields: {
        name: {
            init: '',
            rules: [requiredStringValidator],
        },
        login: {
            init: "",
            rules: [requiredStringValidator],
        },
        password: {
            init: '',
            rules: [requiredStringValidator],
        }
    },
    validateOn: ["submit"],
})
