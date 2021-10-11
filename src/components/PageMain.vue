<template>
  <main class="te-page-main" role="main">
    <router-view />
  </main>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'

const PageMain = defineComponent({
  name: 'PageMain',
})

export default PageMain

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-page-main {
  position: relative;
  flex-grow: 1;
  height: 100%;
}

</style>
