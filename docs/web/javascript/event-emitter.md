# EventEmitter

An event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value. Sometimes this is referred to as a “pub/sub” model, or listener.

在 JavaScript 中，可以通过自定义实现事件发布订阅来创建一个 EventEmitter。下面是一个基础实现：

```js
class EventEmitter {
  constructor() {
    // 用一个 Map 来存储事件名和对应的事件处理函数数组
    this.events = new Map();
  }

  // 绑定事件处理函数，支持多次绑定同一事件处理函数
  on(eventName, fn) {
    if (this.events.has(eventName)) {
      const eventFnArr = this.events.get(eventName);
      eventFnArr.push(fn);
    } else {
      this.events.set(eventName, [fn]);
    }
  }

  // 触发事件，并将参数传递给事件处理函数
  emit(eventName, ...args) {
    const eventFnArr = this.events.get(eventName);
    if (eventFnArr) {
      eventFnArr.forEach(fn => fn.apply(null, args));
    }
  }

  // 移除指定的事件处理函数，若未传入具体函数则移除所有事件处理函数
  off(eventName, fn) {
    if (this.events.has(eventName)) {
      if (fn) {
        const eventFnArr = this.events.get(eventName);
        const index = eventFnArr.indexOf(fn);
        if (index !== -1) {
          eventFnArr.splice(index, 1);
        }
      } else {
        this.events.set(eventName, []);
      }
    }
  }
}
```

使用示例：

```js
const emitter = new EventEmitter();

// 绑定事件处理函数
emitter.on('event1', (data) => {
  console.log('event1', data);
});

emitter.on('event2', (data) => {
  console.log('event2', data);
});

// 触发事件
emitter.emit('event1', 'hello world');
emitter.emit('event2', 'hello world');

// 移除事件处理函数
emitter.off('event1');
emitter.off('event2');
```

以上 EventEmitter 实现方式是一种简单而常用的实现方式，但是它还有很多优化和完善的空间，比如支持异步事件处理函数，支持传入上下文对象，在绑定事件和移除事件时使用符号常量替代硬编码的事件名，等等。
