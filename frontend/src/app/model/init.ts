import { sample } from "effector";
import { $isApploaded, loadApp } from "./public";
import { loadDalFx } from "@/dal/request";
import { loadAppFx } from "./private";
import { loadThemeFx } from "@/shared/ui/theming";
import { fetchUsersFx } from "@/features/users/model";

$isApploaded
    .on(loadAppFx.done, () => true)

sample({
    clock: loadApp,
    target: loadAppFx
})


loadAppFx.use(async () => {
    await Promise.all([
        loadDalFx(),
        loadThemeFx(),
        fetchUsersFx()
    ])
})