import { sample } from "effector";
import { deleteUser, fetchUsers, fetchUsersFx, userForm } from "./private";
import { createUserFx, deleteUserFx, fetchUsersReqFx } from "@/dal";
import { $users } from "./public";
import { showNotification } from "@/shared/ui/notifications";

$users.on(fetchUsersReqFx.doneData, (_, s) => s)

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
    clock: createUserFx.fail,
    fn: () => ({
        message: 'Произошла ошибка'
    }),
    target: showNotification
})

sample({
    clock: createUserFx.failData,
    fn: (m) => ({ message: m.join('\n') }),
    target: showNotification
})

sample({
    clock: deleteUser,
    target: deleteUserFx,
})

