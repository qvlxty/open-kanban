import React from 'react'
import { useUnit } from 'effector-react'
import { useNavigate } from 'react-router'

import { Routes } from './config'
import { $isUserAuthorized } from '@/features/login/model'
import { pushNavigate } from '@/shared/lib/navigate'

type Props = {
    isPrivate: boolean
}

export const RouterGuard = ({isPrivate, children}: React.PropsWithChildren<Props>) => {
    const isUserAuthorized = useUnit($isUserAuthorized)
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isPrivate && !isUserAuthorized) {
            navigate(Routes.root, { replace: true })
            return
        }
        if (!isPrivate && isUserAuthorized) {
            navigate(Routes.projects, { replace: true })
            return
        }
    },[])

    React.useEffect(() => {
        const unwatch = pushNavigate.watch(navigate)
        return () => {
            unwatch()
        }
    },[])
    return <>{children}</>
}