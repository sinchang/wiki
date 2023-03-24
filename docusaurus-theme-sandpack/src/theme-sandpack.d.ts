/// <reference types="@docusaurus/theme-classic" />
/// <reference types="@docusaurus/module-type-aliases" />

declare module 'docusaurus-theme-sandpack' {
  export type ThemeConfig = {}
}

declare module '@theme/Playground' {
  import type { Props as BaseProps } from '@theme/CodeBlock'
  import type { SandpackProps } from '@codesandbox/sandpack-react'
  interface LiveProviderProps extends SandpackProps {
    showConsole: boolean
    showConsoleButton: boolean
  }

  type CodeBlockProps = Omit<BaseProps, 'className' | 'language' | 'title'>

  export interface Props extends CodeBlockProps, LiveProviderProps {
    children: string
  }
  export default function Playground(props: LiveProviderProps): JSX.Element
}
