<template>
  <div class="te-terminal-view" role="document">
    <Terminal ref="terminal" class="te-terminal" :prompt="prompt" />
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import Terminal, { TerminalService } from '../components/misc/Terminal'

type Command = (this: Terminal, args: string[]) => unknown

const commands: Record<string, Command> = {
  clear() {
    setTimeout(() => {
      // @ts-ignore
      this.$data.commands = []
    }, 10)
  },
  date() {
    return new Date().toLocaleString()
  },
  echo(args) {
    return args.join(' ')
  },
  eval(args) {
    if (!args.length) {
      return ''
    }

    let value

    try {
      value = safeEval(args.join(' '))
    } catch (err) {
      value = (err instanceof SyntaxError) ? 'Syntax error' : err.message
    }

    return typeof value !== 'function' ? String(value) : 'function'
  },
  help() {
    return 'Commands:\n  ' + Object.keys(commands).sort().join('\n  ')
  },
}

const globalEval = eval
const validId = /^[a-z]$/

function safeEval(js: string): unknown {
  const notAllowedIds: string[] = []

  js.replace(/[a-z_$][a-z_$0-9]*/i, (id) => {
    if (!validId.test(id)) {
      notAllowedIds.push(id)
    }

    return id
  })

  if (notAllowedIds.length > 0) {
    throw new Error(`Not allowed: ${notAllowedIds.join(',')} `)
  }

  const wrappedJs =
    `(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){`
    + `'use strict';`
    + `return(${js});`
    + `})()`

  return globalEval(wrappedJs)
}

const TerminalView = defineComponent({
  name: 'AboutView',
  components: {
    Terminal,
  },
  data: () => ({
    prompt: '> ',
  }),
  methods: {
    commandHandler(input: string) {
      const [commandName, ...args] = input.trim().split(/\s+/)
      const command = commands[commandName]
      let resp

      if (command) {
        resp = command.call(this.$refs.terminal as Terminal, args)
      } else {
        resp = `Unknown command: ${commandName}`
      }

      TerminalService.emit('response', resp)
    },
  },
  mounted() {
    TerminalService.on('command', this.commandHandler)
  },
  beforeUnmount() {
    TerminalService.off('command', this.commandHandler)
  },
})

export default TerminalView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-terminal-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  .te-terminal {
    height: 100%;
    white-space: pre;

    .p-terminal-prompt,
    .p-terminal-input,
    .p-terminal-command,
    .p-terminal-response {
      font-family: var(--terminal-font-family);
    }

    .p-terminal-prompt {
      color: var(--terminal-prompt-color);
    }

    .p-terminal-input {
      color: var(--terminal-input-color);
    }

    .p-terminal-command {
      color: var(--terminal-command-color);
    }

    .p-terminal-response {
      color: var(--terminal-response-color);
      margin: 3px 0;
    }
  }
}

</style>
