<template>
  <div class="te-editor-view" role="document">
    <Editor v-model="value" @text-change="onTextChange">
      <template #toolbar>
        <span class="ql-formats">
          <select class="ql-header"></select>
        </span>
        <span class="ql-formats">
          <select class="ql-font"></select>
          <select class="ql-size"></select>
        </span>
        <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
          <button class="ql-code"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-align"></select>
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-indent" value="-1"></button>
          <button class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-direction"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-link"></button>
          <button class="ql-image"></button>
          <button class="ql-video"></button>
          <!-- Requires KaTeX (https://katex.org) -->
          <!-- <button class="ql-formula"></button> -->
        </span>
        <span class="ql-formats">
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-clean"></button>
        </span>
      </template>
    </Editor>
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Editor from '../components/form/Editor'

const EditorView = defineComponent({
  name: 'EditorView',
  components: {
    Editor,
  },
  data() {
    return {
      value: this.$store.state.editor.value,
    }
  },
  methods: {
    onTextChange(event: { htmlValue: string }) {
      this.$store.commit('setEditorState', { value: event.htmlValue })
    },
  },
})

export default EditorView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-editor-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  .p-editor-container {
    width: 100%;
    height: 100%;
  }

  .p-editor-toolbar {
    height: var(--editor-toolbar-height);
  }

  .p-editor-content {
    width: 100%;
    height: calc(100% - var(--editor-toolbar-height));
  }
}

</style>
