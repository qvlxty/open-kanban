import { sample } from "effector"
import {
    $modalVisible,
    $selectedTaskId,
    addParticipant,
    closeModal,
    createTaskFx,
    deleteTaskFx,
    delParticipant,
    fetchSingleTaskFx,
    resetState,
    taskForm,
    updateTaskFx
} from "./private"
import {
    createTask,
    deleteTask,
    onCreateTaskDone,
    onDeleteTaskDone,
    onEditTaskDone,
    openTaskEdit
} from "./public"

$selectedTaskId
    .on(openTaskEdit, (_, s) => s)
    .reset(resetState)

$modalVisible
    .on(openTaskEdit, () => true)
    .reset([closeModal, updateTaskFx.done])

sample({
    clock: openTaskEdit,
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
    source: $selectedTaskId,
    fn: (id, {
        title,
        description,
        dueDate,
        participants,
    }) => ({
        id,
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
    source: $selectedTaskId,
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