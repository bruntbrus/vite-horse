<template>
  <div class="te-page">
    <PageHeader v-if="showHeader" />
    <PageMain />
    <PageFooter v-if="showFooter" />
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import PageHeader from './PageHeader'
import PageMain from './PageMain'
import PageFooter from './PageFooter'

const Page = defineComponent({
  name: 'Page',
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  props: {
    showHeader: Boolean,
    showFooter: Boolean,
  },
})

export default Page

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-page {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - var(--nav-panel-width));
  background: var(--surface-b);
}

</style>
