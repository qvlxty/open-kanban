import { d } from "./domain";

export const openTaskEdit = d.event<number>()

export const deleteTask = d.event()
export const createTask = d.event<number | void>()

export const onEditTaskDone = d.event()
export const onCreateTaskDone = d.event()
export const onDeleteTaskDone = d.event()
