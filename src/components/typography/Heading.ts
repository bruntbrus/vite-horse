import { defineComponent } from 'vue'

const CLASSNAME = 'te-heading'

const Heading = defineComponent({
  name: 'Heading',
  props: {
    level: Number,
  },
  template: `<component :is="'h' + level" class="${CLASSNAME}"><slot /></component>`,
})

export default Heading
