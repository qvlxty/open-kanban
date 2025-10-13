import { KanbanColumn } from '@/dal/types'
import { d } from './domain'
import { SortCardPayload } from './types'
import { fetchKanbanReqFx, SetTaskStagePayload, sortCardReqFx, setTaskStageReqFx } from '@/dal'
import { attach } from 'effector'
import { createGate } from 'effector-react'

export const $kanbanColumns = d.store<KanbanColumn[]>([])

export const fetchKanbanFx = attach({ effect: fetchKanbanReqFx })
export const KanbanGate = createGate()

export const setTaskStage = d.event<SetTaskStagePayload>()
export const setTaskStageFx = attach({ effect: setTaskStageReqFx })

export const sortCard = d.event<SortCardPayload>()
export const sortCardFx = attach({ effect: sortCardReqFx })