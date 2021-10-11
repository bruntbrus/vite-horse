import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
//import BadgeDirective from 'primevue/badgedirective'
//import RippleDirective from 'primevue/ripple';
//import TooltipDirective from 'primevue/tooltip'
import App from './App'
import router, { history } from './router'
import store from './store'
import env from './env'
import './style'

const appProps = {
  showPanel: true,
  showHeader: false,
  showFooter: false,
}

export const app = createApp(App, appProps)
  .use(router)
  .use(store)
  .use(PrimeVue, { ripple: false })
  //.directive('badge', BadgeDirective)
  //.directive('ripple', RippleDirective);
  //.directive('tooltip', TooltipDirective)

/**
 * Options for main function.
 */
export interface MainOptions {
  root: string | HTMLElement
}

/**
 * Main boot function.
 */
export default function main({ root }: MainOptions): void {
  app.mount(root)
}

if (env.DEV) {
  // @ts-ignore
  window._dev_ = {
    app,
    env,
    router,
    history,
    store,
  }
}
