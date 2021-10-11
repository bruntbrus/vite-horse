/// <reference path="./vuex.d.ts" />

import { createStore } from 'vuex'
import type { GlobalState } from './vuex'

const store = createStore<GlobalState>({
  plugins: [
    (store) => store.subscribe(({ type, payload }) => {
      switch (type) {
        case 'setEditorState': localStorage.editorValue = payload.value; break
      }
    }),
  ],
  state() {
    return {
      editor: { value: localStorage.editorValue || '' },
    }
  },
  mutations: {
    setEditorState(state, payload: { value: string }) {
      state.editor.value = payload.value
    }
  },
})

export default store
