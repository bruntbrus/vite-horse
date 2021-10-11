import { defineComponent } from 'vue'

const CLASSNAME = 'p-float-label'

const FloatLabel = defineComponent({
  name: 'FloatLabel',
  template: `<span class="${CLASSNAME}"><slot /></span>`,
})

export default FloatLabel
