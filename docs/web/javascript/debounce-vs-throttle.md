# Debounce vs Throttle

Debounce（防抖）和 Throttle（节流）都是用来控制函数执行频率的方法，但是它们的工作方式略有不同。

Debounce 的工作方式是，当一个事件被触发后，会设置一个计时器，计时器结束前如果同一事件被再次触发，则计时器会重新开始。只有在计时器结束后，事件才会被执行一次。这样可以避免短时间内多次触发同一个事件而导致的重复执行。

Throttle 的工作方式是，在一段时间内，只让第一次事件生效，忽略后续触发的事件。等待指定时间后，再次允许事件生效。

以下是 debounce 和 throttle 的代码实现：

**Debounce（防抖）的实现：**

```javascript
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args)
    }, delay);
  }
}
```

**Throttle（节流）的实现：**

```javascript
function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```
