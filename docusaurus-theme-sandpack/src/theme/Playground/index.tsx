import { Sandpack } from '@codesandbox/sandpack-react'
import React from 'react'
import type { Props } from '@theme/Playground'

const Playground = (props: Props) => {
  const { children, template = 'react', showConsole, showConsoleButton } = props

  return (
    <Sandpack
      options={{
        showConsole,
        showConsoleButton,
      }}
      files={{
        'App.js': children,
      }}
      template={template}
      theme='auto'
    />
  )
}

export default Playground
