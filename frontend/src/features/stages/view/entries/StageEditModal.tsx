import { useUnit } from 'effector-react'

import { StageEditForm } from '../containers'
import { $loading, $modalVisible, stageForm } from '../../model/private'
import { Modal } from 'igoresha-dev-ui-kit'

export const StageEditModal = () => {
    const loading = useUnit($loading)
    const modalVisible = useUnit($modalVisible)

    return (
        <Modal
            loading={loading}
            visible={modalVisible}
            onClose={() => stageForm.reset()}
        >
            <StageEditForm />
        </Modal>
    )
}