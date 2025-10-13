import { Loader, Modal, TabBar } from '@/shared/ui'
import { useUnit } from 'effector-react'
import React from 'react'

import { TaskForm, TaskDescription } from '../containers'
import { $modalVisible, fetchSingleTaskFx, taskForm } from '../../model/private'

export const TaskEditModal = () => {
    const loading = useUnit(fetchSingleTaskFx.pending)
    const modalVisible = useUnit($modalVisible)
    const [tab, setTab] = React.useState<'general' | 'description'>('general')

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            size={'lg'}
            visible={modalVisible}
            onClose={() => taskForm.submit()}
        >
            <TabBar
                options={[
                    { text: 'Главное', value: 'general', icon: 'doc' },
                    { text: 'Вердикт/Фидбек', value: 'description', icon: 'feedback' },
                ]}
                onSet={setTab}
                selected={tab}
            />
            {tab === 'general' && (
                <TaskForm />
            )}
            {tab === 'description' && (
                <TaskDescription />
            )}
        </Modal>
    )
}