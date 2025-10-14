import { sample } from "effector";
import {
    $kanbanColumns,
    fetchKanbanFx,
    setTaskStage,
    setTaskStageFx,
    sortCard,
    sortCardFx,
} from "./private";
import { getSortCardColumn } from "./helpers";
import { onCreateStageDone, onDeleteStageDone, onStageEditDone } from "@/features/stages/model";
import { onCreateTaskDone, onDeleteTaskDone, onEditTaskDone } from "@/features/tasks/model";
import { KanbanGate } from "./public";

$kanbanColumns
    .on(fetchKanbanFx.doneData, (_, c) => c)

sample({
    clock: sortCard,
    source: $kanbanColumns,
    fn: getSortCardColumn,
    target: sortCardFx,
})

sample({
    clock: [
        KanbanGate.open,
        setTaskStageFx.done,
        onStageEditDone,
        onCreateStageDone,
        onDeleteStageDone,
        sortCardFx.done,
        onCreateTaskDone,
        onEditTaskDone,
        onDeleteTaskDone,
    ],
    source: KanbanGate.state,
    target: fetchKanbanFx
})

sample({
    clock: setTaskStage,
    target: setTaskStageFx,
})
