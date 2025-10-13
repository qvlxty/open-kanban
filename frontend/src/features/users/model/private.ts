import { d } from "./domain";
import { requiredValidator } from '@/shared/lib/validator'
import { createForm } from 'effector-forms'


export const fetchUsers = d.event()
export const deleteUser = d.event<string | number>()


export const userForm = createForm({
    fields: {
        fio: {
            init: '',
            rules: [requiredValidator],
        },
        login: {
            init: "",
            rules: [requiredValidator],
        },
        password: {
            init: '',
            rules: [requiredValidator],
        }
    },
    validateOn: ["submit"],
})
