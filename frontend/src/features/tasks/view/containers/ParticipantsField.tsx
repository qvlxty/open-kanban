import { useStoreMap, useUnit } from "effector-react"
import { addParticipant, taskForm } from "../../model/private"
import { $users } from "@/features/users/model"
import { Dropdown } from "igoresha-dev-ui-kit"
import { useTranslation } from "react-i18next"

export const ParticipantField = () => {
    const { t } = useTranslation()
    const currentParticipants = useUnit(taskForm.fields.participants.$value)
    const users = useStoreMap({
        store: $users,
        keys: [currentParticipants],
        fn: (u, [currentParticipants]) => u.map((item) => ({ value: item.id, text: item.name }))
            .filter((d) => !currentParticipants.includes(d.value))
    })

    return (
        <>
            <label>{t('pages.tasks.updateForm.participants')} </label>
            {users.length !== 0 && (
                <Dropdown
                    placeholder={t('misc.add')}
                    options={users}
                    onOptionChange={(d) => addParticipant(Number(d))}
                />
            )}
        </>
    )
}