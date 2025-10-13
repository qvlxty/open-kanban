import React from 'react'
import { Loader, Modal } from '@/shared/ui'
import { useUnit } from 'effector-react'

import { $modalVisible, closeModal } from '../../model/private'
import { StageEditForm } from '../containers'
import { fetchSingleStageFx } from '../../model'

export const StageEditModal = () => {
    const loading = useUnit(fetchSingleStageFx.pending)
    const modalVisible = useUnit($modalVisible)

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            visible={modalVisible}
            onClose={() => closeModal()}
        >
            <StageEditForm />
        </Modal>
    )
}