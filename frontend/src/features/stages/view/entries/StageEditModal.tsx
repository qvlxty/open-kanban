import React from 'react'
import { Loader, Modal } from '@/shared/ui'
import { useUnit } from 'effector-react'

import { StageEditForm } from '../containers'
import { fetchSingleStageFx } from '../../model'
import { $modalVisible, stageForm } from '../../model/private'

export const StageEditModal = () => {
    const loading = useUnit(fetchSingleStageFx.pending)
    const modalVisible = useUnit($modalVisible)

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            visible={modalVisible}
            onClose={() => stageForm.reset()}
        >
            <StageEditForm />
        </Modal>
    )
}