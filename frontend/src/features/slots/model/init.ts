import { sample } from "effector"
import { $nearTasks, fetchTimetableFx, SlotsGate } from "./private"


$nearTasks
    .on(fetchTimetableFx.doneData, (_, s) => s)

sample({
    clock: SlotsGate.open,
    target: fetchTimetableFx
})