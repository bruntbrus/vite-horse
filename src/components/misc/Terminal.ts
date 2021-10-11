export { default } from 'primevue/terminal'
import Service from 'primevue/terminalservice'

type Handler = (action: string) => void

export const TerminalService = {
  on(action: string, handler: Handler) {
    // @ts-ignore
    Service.on(action, handler)
  },
  off(action: string, handler: Handler) {
    // @ts-ignore
    Service.off(action, handler)
  },
  emit(action: string, params?: unknown) {
    // @ts-ignore
    Service.emit(action, params)
  },
}
