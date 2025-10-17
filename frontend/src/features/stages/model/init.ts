import { sample } from "effector"
import { createStageFx, deleteStage, deleteStageFx, stageForm, updateStageFx } from "./private"
import { createStage, onCreateStageDone, onStageEditDone, openStageEdit, fetchSingleStageFx, onDeleteStageDone } from "./public"
import { KanbanGate } from "@/features/kanban/model"


sample({
    clock: openStageEdit,
    target: fetchSingleStageFx
})

sample({
    clock: fetchSingleStageFx.doneData,
    target: stageForm.set
})

sample({
    clock: stageForm.formValidated,
    fn: ({ id, title, description }) => ({
        id: id!,
        title,
        description,
    }),
    target: updateStageFx,
})

sample({
    clock: updateStageFx.done,
    target: [onStageEditDone, stageForm.reset ]
})


sample({
    clock: createStage,
    source: KanbanGate.state,
    target: createStageFx
})

sample({
    clock: createStageFx.done,
    target: onCreateStageDone
})

sample({
    clock: deleteStage,
    source: stageForm.fields.id.$value,
    filter: Boolean,
    target: deleteStageFx
})

sample({
    clock: deleteStageFx,
    fn: () => null,
    target: stageForm.fields.id.onChange
})

sample({
    clock: deleteStageFx.done,
    target: onDeleteStageDone
})
