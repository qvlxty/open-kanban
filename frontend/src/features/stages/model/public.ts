import { attach } from "effector";
import { d } from "./domain";
import { fetchSingleStageReqFx } from "@/dal";


export const openStageEdit = d.event<number>()

export const onStageEditDone = d.event()
export const onDeleteStageDone = d.event()
export const onCreateStageDone = d.event()

export const createStage = d.event()

export const fetchSingleStageFx = attach({ effect: fetchSingleStageReqFx })