<template>
  <div class="te-error-view" role="document">
    <Heading :level="1">{{ title }}: {{ code }}</Heading>
    <Paragraph>{{ message }}</Paragraph>
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Heading from '../components/typography/Heading'
import Paragraph from '../components/typography/Paragraph'

const ErrorView = defineComponent({
  name: 'ErrorView',
  components: {
    Heading,
    Paragraph,
  },
  props: {
    code: Number,
    message: String,
  },
  data: () => ({
    title: 'Error',
  }),
})

export default ErrorView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-error-view {
  position: relative;
  padding: 20px;
}

</style>
