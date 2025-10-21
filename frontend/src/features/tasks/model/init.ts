import { sample } from "effector"
import {
    addParticipant,
    createTaskFx,
    deleteTaskFx,
    delParticipant,
    EditTaskGate,
    fetchSingleTaskFx,
    taskForm,
    updateTaskFx
} from "./private"
import {
    createTask,
    deleteTask,
    onCreateTaskDone,
    onDeleteTaskDone,
    onEditTaskDone,
} from "./public"

sample({
    clock: EditTaskGate.state,
    filter: Boolean,
    target: fetchSingleTaskFx
})

sample({
    clock: fetchSingleTaskFx.doneData,
    fn: (p) => ({
        ...p,
        dueDate: p.dueDate === null ? null : new Date(p.dueDate),
        participants: p.assigned.map(({ id }) => id),
    }),
    target: taskForm.set
})


sample({
    clock: createTask,
    target: createTaskFx
})
sample({
    clock: createTaskFx.done,
    target: onCreateTaskDone
})

sample({
    clock: taskForm.formValidated,
    fn: ({
        id,
        title,
        description,
        dueDate,
        participants,
    }) => ({
        id: id!,
        title,
        description,
        participants,
        dueDate: dueDate?.toISOString() || null,
    }),
    filter: Boolean,
    target: updateTaskFx,
})

sample({
    clock: addParticipant,
    source: taskForm.fields.participants.$value,
    fn: (currentParticipants, newId) => currentParticipants.includes(newId)
        ? currentParticipants
        : [...currentParticipants, newId],
    target: taskForm.fields.participants.$value
})

sample({
    clock: delParticipant,
    source: taskForm.fields.participants.$value,
    fn: (currentParticipants, idToDelete) => currentParticipants.filter(
        (id) => id !== idToDelete
    ),
    target: taskForm.fields.participants.$value
})

sample({
    clock: updateTaskFx.done,
    target: [onEditTaskDone, taskForm.reset],
})

sample({
    clock: deleteTask,
    filter: Boolean,
    source: taskForm.fields.id.$value,
    target: deleteTaskFx
})

sample({
    clock: deleteTaskFx,
    target: taskForm.reset
})

sample({
    clock: deleteTaskFx.done,
    target: onDeleteTaskDone,
})