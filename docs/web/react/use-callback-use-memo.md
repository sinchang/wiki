# useCallback vs useMemo

useCallback 和 useMemo 都是 React 中提供的优化性能的 Hook，它们可以用来避免不必要的重新计算和重新渲染。但是，它们的使用场景略有不同，下面是它们的区别：

1. 功能不同：useCallback 用于缓存某个函数的引用，useMemo 用于缓存某个计算结果的值。

2. 参数不同：useCallback 接收一个函数和一个依赖数组，只有依赖数组中的依赖发生变化时，才会重新创建缓存的函数，否则直接返回缓存中的函数。useMemo 接收一个函数和一个依赖数组，只有依赖数组中的依赖发生变化时，才会重新计算缓存的值，否则直接返回缓存中的值。

3. 返回值不同：useCallback 返回一个缓存的函数引用，useMemo 返回一个缓存的计算结果。

实例代码：

```jsx sandpack
import React, { useCallback, useMemo } from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const result = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment count</button>
      <p>Result: {result}</p>
    </div>
  );
}
```

在上述代码中，increment 函数缓存了变量 count 的引用，只有在 count 发生变化时才会重新创建该函数。result 变量缓存了 count 值的两倍，只有在 count 发生变化时才会重新计算值并返回。这样可以避免不必要的函数引用创建和计算开销，从而提升性能。
