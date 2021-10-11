import { createRouter, createWebHistory,  } from 'vue-router'
import routes from './routes'

export const history = createWebHistory()

export const router = createRouter({ history, routes })

export default router
