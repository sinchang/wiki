# e.target vs e.currentTarget

target 属性返回触发事件的元素，而 currentTarget 属性则返回当前事件处理程序所附加的元素（即当前捕获或冒泡阶段正在调用事件处理程序的那个元素）。

举个例子

```jsx sandpack showConsole
import { useState } from 'react'
export default function App() {
  const handleClick = (event) => {
    console.log(`Target: ${event.target.id}, Current target: ${event.currentTarget.id}`);
  }

  return (
    <div id="parent" onClick={handleClick} style={{
      width: '200px',
      height: '200px',
      backgroundColor: 'red'
    }}>
      <button id="child">Click me</button>
    </div>
  )
}
```

点击 `Click me` 按钮，控制台输出

```js
Target: child, Current target: parent
```

点击红色背景，控制台输出

```js
Target: parent, Current target: parent
```