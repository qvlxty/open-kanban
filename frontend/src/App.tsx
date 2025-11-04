import React from 'react'
import { createRoot } from 'react-dom/client'
import { useUnit } from 'effector-react'

import './init'

import { AppRouter } from './routes/Routes'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { $isApploaded, loadApp } from './app/model'
import { GlobalStyled, Loader, ThemeProvider } from 'igoresha-dev-ui-kit'

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
                    {/* @ts-ignore */}
                    <GlobalStyled />
                    <AppRouter />
                </>
            </ThemeProvider>
        </DndProvider>
    )
}

const root = createRoot(document.getElementById('root') as Element)
root.render(<div><App /></div>)