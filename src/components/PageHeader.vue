<template>
  <header class="te-page-header" role="banner">
    <Heading :level="1">{{ title }}</Heading>
  </header>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Heading from '../components/typography/Heading'

const PageHeader = defineComponent({
  name: 'PageHeader',
  components: {
    Heading,
  },
  data: () => ({
    title: 'Vite Horse',
  }),
})

export default PageHeader

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-page-header {
  position: relative;
  height: var(--page-header-height);
  background: var(--surface-200);
  border-bottom: 2px solid var(--surface-400);
  line-height: var(--page-header-height);
  vertical-align: middle;
  overflow: hidden;

  h1 {
    float: left;
    font-size: 20px;
    margin: 0 20px;
  }
}

</style>
