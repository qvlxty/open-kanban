import React from 'react'
import { Loader, Modal } from '@/shared/ui'
import { useUnit } from 'effector-react'

import { $modalVisible, projectForm, updateProjectFx } from '../../model/private'
import { UpdateProjectForm } from '../containers'

export const UpdateProjectModal = () => {
    const loading = useUnit(updateProjectFx.pending)
    const modalVisible = useUnit($modalVisible)

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            visible={modalVisible}
            onClose={() => projectForm.reset()}
        >
            <UpdateProjectForm />
        </Modal>
    )
}