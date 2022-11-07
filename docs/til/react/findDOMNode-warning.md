# [react-transition-group] Warning: findDOMNode is deprecated in StrictMode.

You can fix this like this

```
import React from "react"
import { CSSTransition } from "react-transition-group"

const MyComponent = () => {
  const nodeRef = React.useRef(null)
  return (
    <CSSTransition nodeRef={nodeRef} in timeout={200} classNames="fade">
      <div ref={nodeRef}>Fade</div>
    </CSSTransition>
  )
}
```

Ref: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
