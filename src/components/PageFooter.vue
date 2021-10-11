<template>
  <footer class="te-page-footer" role="contentinfo">
    <Paragraph>Follow the white horse.</Paragraph>
  </footer>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Paragraph from '../components/typography/Paragraph'

const PageFooter = defineComponent({
  name: 'PageFooter',
  components: {
    Paragraph,
  },
})

export default PageFooter

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-page-footer {
  position: relative;
  height: var(--page-footer-height);
}

</style>
