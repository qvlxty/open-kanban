import { sample } from "effector"
import { $modalVisible, $stageId, closeModal, createStageFx, deleteStage, deleteStageFx, resetState, stageForm, updateStageFx } from "./private"
import { createStage, onCreateStageDone, onStageEditDone, openStageEdit, fetchSingleStageFx, onDeleteStageDone } from "./public"

$stageId
    .on(openStageEdit, (_, s) => s)
    .reset(resetState)

$modalVisible
    .on(openStageEdit, () => true)
    .reset([closeModal, updateStageFx.done])

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
    source: $stageId,
    fn: (id, { title, description }) => ({
        id,
        title,
        description,
    }),
    filter: Boolean,
    target: updateStageFx,
})

sample({
    clock: updateStageFx.done,
    target: onStageEditDone
})


sample({
    clock: createStage,
    target: createStageFx
})

sample({
    clock: createStageFx.done,
    target: onCreateStageDone
})

sample({
    clock: deleteStage,
    source: $stageId,
    filter: Boolean,
    target: deleteStageFx
})

sample({
    clock: deleteStageFx.done,
    target: onDeleteStageDone
})
