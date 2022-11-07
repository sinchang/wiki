# useHover

```tsx
import { MutableRefObject, useEffect, useRef, useState } from 'react'

type UseHoverType<T extends HTMLElement> = [MutableRefObject<T>, boolean]

export function useHover<T extends HTMLElement>(): UseHoverType<T> {
  const [value, setValue] = useState<boolean>(false)
  const ref = useRef<T | null>(null)
  const handleMouseOver = (): void => setValue(true)
  const handleMouseOut = (): void => setValue(false)
  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)
      return (): void => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [ref.current])
  return [ref, value]
}
```
