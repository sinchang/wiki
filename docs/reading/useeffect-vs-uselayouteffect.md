# useEffect vs useLayoutEffect

![](https://pbs.twimg.com/media/Fpf8RFZX0AA7CiB?format=jpg)

## 差异
useEffect 是异步执行的，而 useLayoutEffect 是同步执行的。
useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价。

Refs:
- https://zhuanlan.zhihu.com/p/348701319#
- https://kentcdodds.com/blog/useeffect-vs-uselayouteffect