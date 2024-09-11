import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'
import { Mask, SpinLoading } from 'antd-mobile'

import { type ICustomRouteObject } from '@/types/router'
const Element = (props: ICustomRouteObject) => {
  const {
    element: Component,
    meta: { title },
  } = props
  document.title = title
  return (
    <Suspense
      fallback={
        <Mask>
          <SpinLoading />
        </Mask>
      }
    >
      <Component />
    </Suspense>
  )
}
const RouterView = () => {
  return (
    <HashRouter>
      <Routes>
        {routes.map((item) => {
          return (
            <Route
              key={item.name}
              path={item.path}
              element={<Element {...item} />}
            />
          )
        })}
      </Routes>
    </HashRouter>
  )
}
export default RouterView
