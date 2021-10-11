import { defineComponent } from 'vue'

const CLASSNAME = 'te-form'

const Form = defineComponent({
  name: 'Form',
  template: `<form class="${CLASSNAME}"><slot /></form>`,
})

export default Form
