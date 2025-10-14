import { attach } from "effector";
import { d } from "./domain";
import { createStageReqFx, deleteStageReqFx, fetchSingleStageReqFx, updateStageReqFx } from "@/dal";
import { createForm } from "effector-forms";
import { requiredStringValidator } from "@/shared/lib/validator";


export const $stageId = d.store<number | null>(null)
export const resetState = d.event()

export const $modalVisible = d.store(false)
export const closeModal = d.event()

export const createStageFx = attach({ effect: createStageReqFx })
export const updateStageFx = attach({ effect: updateStageReqFx })
export const deleteStageFx = attach({ effect: deleteStageReqFx })
export const deleteStage = d.event()


export const stageForm = createForm({
    fields: {
        title: {
            init: "",
            rules: [requiredStringValidator],
        },
        description: {
            init: "",
            rules: [requiredStringValidator],
        },
    },
    validateOn: ["submit"],
})
