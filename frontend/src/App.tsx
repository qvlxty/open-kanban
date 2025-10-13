import React from 'react'
import { createRoot } from 'react-dom/client'
import { useUnit } from 'effector-react'

import './init'

import 'react-day-picker/dist/style.css'

import { AppRouter } from './routes/Routes'
import { GlobalStyled } from './shared/ui/theming/global.styled'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ThemeProvider } from './shared/ui/theming'
import { Loader } from './shared/ui'
import { $isApploaded, loadApp } from './app/model'
import { NotificationProvider } from './shared/ui/notifications'
import { TaskEditModal } from './features/tasks/view'
import { StageEditModal } from './features/stages/view'
import { Layout } from './app/view'

export const App = () => {
    const isAppLoaded = useUnit($isApploaded)
    React.useEffect(() => {
        loadApp()
    }, [])
    if (!isAppLoaded) {
        return <Loader />
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider>
                <>
                    <NotificationProvider />
                    {/* @ts-ignore */}
                    <GlobalStyled />
                    <Layout>
                        <AppRouter />
                    </Layout>
                    <TaskEditModal />
                    <StageEditModal />
                </>
            </ThemeProvider>
        </DndProvider>
    )
}

const root = createRoot(document.getElementById('root') as Element)
root.render(<div><App /></div>)