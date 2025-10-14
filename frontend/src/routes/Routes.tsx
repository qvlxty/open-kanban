import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RouterGuard } from './RouterGuard'
import { basicRoutes, privateRoutes } from './config'
import { Layout } from '@/app/view'

const routesRender = (route: {path: string, component: React.ComponentType }, isPrivate: boolean) => {
      return (
          <Route 
            key={route.path}
            path={route.path}
            Component={() => (
              <RouterGuard isPrivate={isPrivate}>
                <route.component />
              </RouterGuard>
            )}
          />
      )
    } 

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        {basicRoutes.map((c) => routesRender(c, false))}
        {privateRoutes.map((c) => routesRender(c, true))}
      </Route>
    </Routes>
  </Router>
)
