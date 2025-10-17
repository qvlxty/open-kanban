import { Modal } from '@/shared/ui'
import { useUnit } from 'effector-react'

import { TaskForm } from '../containers'
import { $modalVisible, fetchSingleTaskFx, taskForm } from '../../model/private'

export const TaskEditModal = () => {
    const loading = useUnit(fetchSingleTaskFx.pending)
    const modalVisible = useUnit($modalVisible)

    return (
        <Modal
            loading={loading}
            visible={modalVisible}
            onClose={() => taskForm.submit()}
        >
            <TaskForm />
        </Modal>
    )
}