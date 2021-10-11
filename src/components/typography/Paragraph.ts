import { defineComponent } from 'vue'

const CLASSNAME = 'te-paragraph'

const Paragraph = defineComponent({
  name: 'Paragraph',
  template: `<p class="${CLASSNAME}"><slot /></p>`,
})

export default Paragraph
