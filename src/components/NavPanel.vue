<template>
  <aside class="te-nav-panel" role="navigation">
    <PanelMenu ref="panelMenu" :model="menuItems" />
  </aside>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import { PrimeIcons as Icons } from 'primevue/api'
import PanelMenu from './menu/PanelMenu'
import { history } from '../router'
import type { MenuItem } from './menu'

const FW = 'pi-fw'

const menuItems: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: `${Icons.HOME} ${FW}`,
    to: '/',
  },
  {
    key: 'data',
    label: 'Data',
    icon: `${Icons.FILE_EXCEL} ${FW}`,
    to: '/data',
  },
  {
    key: 'editor',
    label: 'Editor',
    icon: `${Icons.PENCIL} ${FW}`,
    to: '/editor',
  },
  {
    key: 'terminal',
    label: 'Terminal',
    icon: `${Icons.DESKTOP} ${FW}`,
    to: '/terminal',
  },
  {
    key: 'about',
    label: 'About',
    icon: `${Icons.QUESTION_CIRCLE} ${FW}`,
    to: '/about',
  },
]

const NavPanel = defineComponent({
  name: 'NavPanel',
  components: {
    PanelMenu,
  },
  data: () => ({
    menuItems,
  }),
  methods: {
    setActiveItemByRoute() {
      const path = history.state.current
      const item = menuItems.find((item) => item.to === path)

      if (item) {
        const panelMenu = this.$refs.panelMenu as PanelMenu
        // @ts-ignore
        panelMenu.$data.activeItem = item
      }
    },
  },
  mounted() {
    this.setActiveItemByRoute()
  },
})

export default NavPanel

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-nav-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: var(--nav-panel-width);
  height: 100%;
  background: var(--surface-200);
  border-right: 2px solid var(--surface-400);

  .p-panelmenu-header > a {
    transition: background-color 200ms;
  }

  .p-panelmenu-header.p-highlight > a {
    background: linear-gradient(to right, var(--surface-200), var(--primary-color)) !important;
  }
}

</style>
