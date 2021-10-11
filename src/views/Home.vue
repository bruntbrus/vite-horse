<template>
  <div class="te-home-view" role="document">
    <Heading :level="1">{{ title }}</Heading>
    <Image alt="Logo" src="/src/assets/unicorn-logo-240.png" :width="240" :height="240" />
    <Paragraph>
      Recommended IDE setup: <a :href="ideUrl" target="_blank">VSCode</a> +
      <a :href="veturUrl" target="_blank">Vetur</a> or
      <a :href="volarUrl" target="_blank">Volar</a> (if using
      <code>&lt;script setup&gt;</code>)
    </Paragraph>
    <Paragraph>See <code>README.md</code> for more information.</Paragraph>
    <Paragraph>
      <a :href="viteUrl" target="_blank">Vite Docs</a>
      | <a :href="vueUrl" target="_blank">Vue 3 Docs</a>
    </Paragraph>
    <Button @click="count++">Count: {{ count }}</Button>
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent, ref } from 'vue'
import Button from '../components/button/Button'
import Heading from '../components/typography/Heading'
import Image from '../components/media/Image'
import Paragraph from '../components/typography/Paragraph'
import env from '../env'

const HomeView = defineComponent({
  name: 'HomeView',
  components: {
    Button,
    Heading,
    Image,
    Paragraph,
  },
  data: () => ({
    title: 'Home',
    ideUrl: env.IDE_URL,
    veturUrl: env.VETUR_URL,
    viteUrl: env.VITE_URL,
    volarUrl: env.VOLAR_URL,
    vueUrl: env.VUE_URL,
  }),
  setup: () => ({ count: ref(0) }),
})

export default HomeView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-home-view {
  position: relative;
  padding: 20px;

  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    color: #304455;
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
  }
}

</style>
