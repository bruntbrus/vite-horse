import { defineComponent } from 'vue'

const CLASSNAME = 'te-image'

const Image = defineComponent({
  name: 'Image',
  props: {
    alt: { type: String },
    className: { type: String },
    height: { type: [String, Number] },
    src: { type: String, required: true },
    style: { type: String },
    width: { type: [String, Number] },
  },
  template: `<img
    :class="'${CLASSNAME}' + (className ? ' ' + className : '')"
    :src="src" :alt="alt"
    :width="width" :height="height"
    :style="style"
  />`,
})

export default Image
