<template>
  <div class="te-app" role="application">
    <NavPanel v-if="showPanel" />
    <Page :showHeader="showHeader" :showFooter="showFooter" />
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import NavPanel from './components/NavPanel.vue'
import Page from './components/Page.vue'

const App = defineComponent({
  name: 'App',
  components: {
    NavPanel,
    Page,
  },
  props: {
    showPanel: Boolean,
    showHeader: Boolean,
    showFooter: Boolean,
  },
})

export default App

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-app {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
