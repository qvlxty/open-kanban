import { requiredStringValidator } from '@/shared/lib/validator'
import { createForm } from 'effector-forms'
import { d } from "./domain";
import { attach } from 'effector';
import { createTaskReqFx, deleteTaskReqFx, fetchSingleTaskReqFx, updateTaskReqFx } from '@/dal';

export const $selectedTaskId = d.store<number | null>(null)

export const $modalVisible = d.store(false)
export const closeModal = d.event()
export const resetState = d.event()

export const createTaskFx = attach({ effect: createTaskReqFx })
export const updateTaskFx = attach({ effect: updateTaskReqFx })
export const deleteTaskFx = attach({ effect: deleteTaskReqFx })
export const fetchSingleTaskFx = attach({ effect: fetchSingleTaskReqFx })


export const taskForm = createForm({
    fields: {
        title: {
            init: "",
            rules: [requiredStringValidator],
        },
        description: {
            init: "",
        },
        userId: {
            init: null as null | number,
        },
        dueDate: {
            init: null as null | Date
        },
    },
    validateOn: ["submit"],
})
