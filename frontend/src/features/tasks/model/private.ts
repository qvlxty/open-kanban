import { requiredStringValidator } from '@/shared/lib/validator'
import { createForm } from 'effector-forms'
import { d } from "./domain";
import { attach } from 'effector';
import { createTaskReqFx, deleteTaskReqFx, fetchSingleTaskReqFx, updateTaskReqFx } from '@/dal';
import { UserDto } from '@/dal/types';

export const $selectedTaskId = d.store<number | null>(null)

export const $modalVisible = d.store(false)
export const closeModal = d.event()
export const resetState = d.event()

export const createTaskFx = attach({ effect: createTaskReqFx })
export const updateTaskFx = attach({ effect: updateTaskReqFx })
export const deleteTaskFx = attach({ effect: deleteTaskReqFx })
export const fetchSingleTaskFx = attach({ effect: fetchSingleTaskReqFx })

export const addParticipant = d.event<number>()
export const delParticipant = d.event<number>()


export const taskForm = createForm({
    fields: {
        title: {
            init: "",
            rules: [requiredStringValidator],
        },
        description: {
            init: "",
        },
        createdDateAt: {
            init: "",
        },
        dueDate: {
            init: null as null | Date
        },
        participants: {
            init: [] as number[] 
        },
        user: {
            init: null as null | UserDto
        }
    },
    validateOn: ["submit"],
})
