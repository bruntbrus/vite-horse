import { defineComponent } from 'vue'

const CLASSNAME = 'p-inputgroup'

const InputGroup = defineComponent({
  name: 'InputGroup',
  template: `<div class="${CLASSNAME}"><slot /></div>`,
})

export const InputGroupAddon = defineComponent({
  name: 'InputGroupAddon',
  template: `<span class="${CLASSNAME}-addon"><slot /></span>`,
})

export default InputGroup
