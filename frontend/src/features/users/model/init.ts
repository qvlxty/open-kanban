import { sample } from "effector";
import { createUserFx, deleteUser, deleteUserFx, fetchUsers, userForm } from "./private";
import { $users, fetchUsersFx } from "./public";

$users.on(fetchUsersFx.doneData, (_, s) => s)

sample({
    clock: [fetchUsers, deleteUserFx.done],
    target: fetchUsersFx
})


sample({
    clock: userForm.formValidated,
    target: createUserFx
})

sample({
    clock: createUserFx.done,
    target: userForm.reset,
})


sample({
    clock: deleteUser,
    target: deleteUserFx,
})

