import type { RouteRecordRaw } from 'vue-router'
import * as views from './views'

export type RouteRecord = RouteRecordRaw

export const routes: RouteRecord[] = [
  {
    path: '/',
    name: 'home',
    component: views.HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: views.AboutView,
  },
  {
    path: '/data',
    name: 'data',
    component: views.DataView,
  },
  {
    path: '/editor',
    name: 'editor',
    component: views.EditorView,
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: views.TerminalView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: views.ErrorView,
    props: {
      code: 404,
      message: 'Page not found',
    },
  },
]

export default routes
