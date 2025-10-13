import { fetchTimetableReqFx } from "@/dal";
import { TaskDto } from "@/dal/types";
import { attach } from "effector";
import { createGate } from "effector-react";
import { d } from "./domain";

export const $nearTasks = d.store<TaskDto[]>([])
export const fetchTimetableFx = attach({ effect: fetchTimetableReqFx })
export const SlotsGate = createGate()