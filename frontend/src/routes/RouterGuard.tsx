import React from 'react'
import { useUnit } from 'effector-react'
import { useNavigate } from 'react-router'

import { Routes } from './config'
import { $isUserAuthorized } from '@/features/login/model'

type Props = {
    isPrivate: boolean
}

export const RouterGuard = ({isPrivate, children}: React.PropsWithChildren<Props>) => {
    const isUserAuthorized = useUnit($isUserAuthorized)
    const navigate = useNavigate()

    if (isPrivate && !isUserAuthorized) {
        navigate(Routes.root, { replace: true })
        return null
    }
    if (!isPrivate && isUserAuthorized) {
        navigate(Routes.kanban, { replace: true })
        return null
    }
    return <>{children}</>
}