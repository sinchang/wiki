# Automatic batching in React

## TL;DR

```jsx live
import { useState } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    setCount((c) => c + 1)
    setFlag((f) => !f)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? 'blue' : 'black' }}>{count}</h1>
    </div>
  )
}
```

### React 17

- handleClick 是同步操作： render 一次
- handleClick 是异步操作： render 两次

### React 18

- handleClick 是同步操作： render 一次
- handleClick 是异步操作： render 一次

如果不想要 patching 的行为，可以使用 `ReactDOM.flushSync()`。

Reference: [Automatic batching in React](https://github.com/reactwg/react-18/discussions/21)
