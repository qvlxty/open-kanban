import { sample } from "effector"
import { $modalVisible, $selectedTaskId, closeModal, createTaskFx, deleteTaskFx, fetchSingleTaskFx, resetState, taskForm, updateTaskFx } from "./private"
import { createTask, deleteTask, onCreateTaskDone, onDeleteTaskDone, onEditTaskDone, openTaskEdit } from "./public"

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
        userId,
        dueDate,
    }) => ({
        id,
        title,
        description,
        dueDate: dueDate?.toISOString() || null,
    }),
    filter: Boolean,
    target: updateTaskFx,
})

sample({
    clock: updateTaskFx.done,
    target: onEditTaskDone,
})

sample({
    clock: deleteTask,
    filter: Boolean,
    source: $selectedTaskId,
    target: deleteTaskFx
})

sample({
    clock: deleteTaskFx.done,
    target: onDeleteTaskDone,
})