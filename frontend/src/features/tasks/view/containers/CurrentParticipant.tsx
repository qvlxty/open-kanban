import { $users } from "@/features/users/model"
import { useStoreMap } from "effector-react"
import { delParticipant } from "../../model/private"
import { ParticipantItem } from "../parts"

type Props = {
    id: number
}
export const CurrentParticipant = ({id}:Props) => {
    const user = useStoreMap({
        keys: [id],
        store: $users,
        fn: (users, [id]) => users.find((t) => t.id === id)
    })

    if (!user) {
        return null
    }

    return (
       <ParticipantItem
            name={user.name}
            onClick={() => delParticipant(user.id)}
            login={user.login}
       />
    )
}

