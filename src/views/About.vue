<template>
  <div class="te-about-view" role="document">
    <Heading :level="1">
      <Icon name="question-circle" :size="2" fixedWidth />
      {{ title }}
    </Heading>
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Heading from '../components/typography/Heading'
import Icon from '../components/media/Icon'

const AboutView = defineComponent({
  name: 'AboutView',
  components: {
    Heading,
    Icon,
  },
  data: () => ({
    title: 'About',
  }),
})

export default AboutView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-about-view {
  position: relative;
  padding: 20px;
}

</style>
