import { useGate, useUnit } from 'effector-react'

import { TaskForm } from '../containers'
import { $modalVisible, EditTaskGate, fetchSingleTaskFx, taskForm } from '../../model/private'
import { useParams } from 'react-router'
import { Modal } from 'igoresha-dev-ui-kit'

export const TaskEditModal = () => {
    const loading = useUnit(fetchSingleTaskFx.pending)
    const modalVisible = useUnit($modalVisible)
    const p = useParams<{ taskId?: string }>()
    useGate(EditTaskGate, p.taskId || null)


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