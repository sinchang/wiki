# Promise 学习

- [【Promise 源码学习】第一篇 - Promise 简介](https://xie.infoq.cn/article/f5d5636279df58bfdd2cb1497)
- [【Promise 源码学习】第二篇 - Promise 功能介绍与特性分析](https://xie.infoq.cn/article/2247c3306a40fdb3d0b1aef01)
- [【Promise 源码学习】第三篇 - 实现一个简版 Promise_Promise](https://xie.infoq.cn/article/a3f2a38f5e61a75015a2945a9)
- [【Promise 源码学习】第四篇 - 翻译并理解 Promise A+ 规范](https://xie.infoq.cn/article/c327ed50c954afb9d96b6ff88)
- [【Promise 源码学习】第五篇 - 实现 Promise 对异步操作的支持](https://xie.infoq.cn/article/afc067975642754df2872cf52)
- [【Promise 源码学习】第六篇 - 实现 Promise 的链式调用](https://xie.infoq.cn/article/7ee465beb9903499bb5e4780d)
- [【Promise 源码学习】第七篇 - 实现 Promise 返回值 x 的处理](https://xie.infoq.cn/article/f18187bfe442bc4298bd3a5a0)
- [【Promise 源码学习】第八篇 - 完善 Promise 并通过 promise-aplus-tests 测试](https://xie.infoq.cn/article/22a3cb3028e149820561a9288)

## Methods

- Promise.all
```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
```js
- Promise.allSettled
```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));

// Expected output:
// { status: "fulfilled", value: 3 }
// { status: "rejected", reason: "foo" }
```
- Promise.any
```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
```
- Promise.race
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
```
