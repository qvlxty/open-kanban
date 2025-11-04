import { d } from "./domain";
import { CreateTaskPayload } from "./types";

export const deleteTask = d.event()
export const createTask = d.event<CreateTaskPayload>()

export const onEditTaskDone = d.event()
export const onCreateTaskDone = d.event()
export const onDeleteTaskDone = d.event()
