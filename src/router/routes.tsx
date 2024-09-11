import { type ICustomRouteObject } from '@/types/router'
import Home from '@/pages/Home'
import { lazy } from 'react'
const routes: ICustomRouteObject[] = [
  {
    path: '/',
    name: 'home',
    element:Home,
    meta: {
      title: '知乎日报',
    },
  },
  {
    path: '/details/:id',
    name: 'details',
    element: lazy(() => import('@/pages/Details')),
    meta: {
      title: '知乎日报-新闻详情',
    },
  },
  {
    path: '/login',
    name: 'login',
    element: lazy(() => import('@/pages/Login')),
    meta: {
      title: '知乎日报-登陆/注册',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    element: lazy(() => import('@/pages/Personal')),
    meta: {
      title: '知乎日报-个人中心',
    },
  },
  {
    path: '/store',
    name: 'store',
    element: lazy(() => import('@/pages/Store')),
    meta: {
      title: '知乎日报-我的收藏',
    },
  },
  {
    path: '/update',
    name: 'update',
    element: lazy(() => import('@/pages/Update')),
    meta: {
      title: '知乎日报-修改个人信息',
    },
  },
  {
    path: '*',
    name: 'notFound',
    element: lazy(() => import('@/pages/NotFound')),
    meta: {
      title: '404',
    },
  },
]
export default routes
