import { defineComponent } from 'vue'

const CLASSNAME = 'te-icon'

const Icon = defineComponent({
  name: 'Icon',
  props: {
    className: { type: String },
    name: { type: String, required: true },
    fixedWidth: { type: Boolean, default: false },
    size: { type: Number, default: 1 },
    style: { type: String },
  },
  template: `<i
    :class="
      '${CLASSNAME} pi pi-' + name
      + (className ? ' ' + className : '')
      + (fixedWidth ? ' pi-fw' : '')
    "
    :style="'font-size: ' + size + 'rem' + (style ? '; ' + style : '')"
  />`,
})

export default Icon
