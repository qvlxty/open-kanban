import { useStoreMap, useUnit } from "effector-react"
import { addParticipant, taskForm } from "../../model/private"
import { $users } from "@/features/users/model"
import { useField } from "effector-forms"
import { Dropdown } from "@/shared/ui"

export const ParticipantField = () => {
    const currentParticipants = useUnit(taskForm.fields.participants.$value)
    const user = useField(taskForm.fields.user)
    const users = useStoreMap({
        store: $users,
        keys: [currentParticipants],
        fn: (u, [currentParticipants]) => u.map((item) => ({ value: item.id, text: item.name }))
            .filter((d) => !currentParticipants.includes(d.value))
    })

    return (
        <>
            <label>Исполнители </label>
            {users.length !== 0 && (
                <Dropdown
                    placeholder='Добавить'
                    options={users}
                    onOptionChange={(d) => addParticipant(Number(d))}
                />
            )}
        </>
    )
}