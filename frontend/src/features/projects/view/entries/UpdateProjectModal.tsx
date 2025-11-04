import { useUnit } from 'effector-react'

import { $modalVisible, projectForm, updateProjectFx } from '../../model/private'
import { UpdateProjectForm } from '../containers'
import { Modal } from 'igoresha-dev-ui-kit'

export const UpdateProjectModal = () => {
    const loading = useUnit(updateProjectFx.pending)
    const modalVisible = useUnit($modalVisible)

    return (
        <Modal
            loading={loading}
            visible={modalVisible}
            onClose={() => projectForm.reset()}
        >
            <UpdateProjectForm />
        </Modal>
    )
}