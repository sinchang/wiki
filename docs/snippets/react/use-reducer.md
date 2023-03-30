# useReducer

```
import { useCallback, useState } from "react";

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  const dispatch = useCallback(
    (action) => {
      const nextState = reducer(state, action);

      setState(nextState);
    },
    [setState, reducer, state]
  );

  return [state, dispatch];
}
```
