import { type RouteObject } from 'react-router-dom'
import { LazyExoticComponent, FC } from 'react';
export type ICustomRouteObject = Omit<RouteObject, 'element'>  & {
  name: string
  element: FC<{}> | LazyExoticComponent<FC<{}>>
  meta: {
    title: string
  }
}