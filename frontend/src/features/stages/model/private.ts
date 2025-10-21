import { attach, combine } from "effector";
import { d } from "./domain";
import { createStageReqFx, deleteStageReqFx, updateStageReqFx } from "@/dal";
import { createForm } from "effector-forms";
import { requiredNumberValidator, requiredStringValidator } from "@/shared/lib/validator";


export const createStageFx = attach({ effect: createStageReqFx })
export const updateStageFx = attach({ effect: updateStageReqFx })
export const deleteStageFx = attach({ effect: deleteStageReqFx })
export const deleteStage = d.event()


export const stageForm = createForm({
    fields: {
        id: {
            init: null as number | null,
            rules: [requiredNumberValidator]
        },
        title: {
            init: "",
            rules: [requiredStringValidator],
        },
        description: {
            init: "",
            rules: [],
        },
    },
    validateOn: ["submit"],
})

export const $loading = combine(updateStageFx.pending,deleteStageFx.pending,(a,b) => a || b)
export const $modalVisible = stageForm.fields.id.$value.map((b) => b !== null)