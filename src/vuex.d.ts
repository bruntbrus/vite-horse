import { ComponentCustomProperties } from 'vue'
import type { Store, Plugin } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<GlobalState>
  }
}

export interface GlobalState {
  editor: EditorState
}

export interface EditorState {
  value: string
}

export interface StorePlugin extends Plugin<GlobalState> {}
