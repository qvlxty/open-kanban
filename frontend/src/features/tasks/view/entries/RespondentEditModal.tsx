import { Loader, Modal, TabBar } from '@/shared/ui'
import { useUnit } from 'effector-react'

import { TaskForm } from '../containers'
import { $modalVisible, fetchSingleTaskFx, taskForm } from '../../model/private'

export const TaskEditModal = () => {
    const loading = useUnit(fetchSingleTaskFx.pending)
    const modalVisible = useUnit($modalVisible)

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            size={'lg'}
            visible={modalVisible}
            onClose={() => taskForm.submit()}
        >
            <TaskForm />
        </Modal>
    )
}