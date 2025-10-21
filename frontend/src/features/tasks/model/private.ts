import { requiredStringValidator } from '@/shared/lib/validator'
import { createForm } from 'effector-forms'
import { d } from "./domain";
import { attach } from 'effector';
import { createTaskReqFx, deleteTaskReqFx, fetchSingleTaskReqFx, updateTaskReqFx } from '@/dal';
import { UserDto } from '@/dal/types';
import { createGate } from 'effector-react';

export const createTaskFx = attach({ effect: createTaskReqFx })
export const updateTaskFx = attach({ effect: updateTaskReqFx })
export const deleteTaskFx = attach({ effect: deleteTaskReqFx })
export const fetchSingleTaskFx = attach({ effect: fetchSingleTaskReqFx })

export const addParticipant = d.event<number>()
export const delParticipant = d.event<number>()

export const EditTaskGate = createGate<string | null>()


export const taskForm = createForm({
    fields: {
        id: {
            init: null as null | number,
        },
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

export const $modalVisible = taskForm.fields.id.$value.map(Boolean)