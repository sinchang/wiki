# var vs let vs const

## var 声明及变量提升机制

var 声明的变量，会被提升到当前作用域的顶部，但是赋值操作并不会提升。

```js
function getValue(condition) {
  if (condition) {
    var value = 'blue'
    return value
  } else {
    // value 变量在这里存在，值为 undefined
    return null
  }
  // value 变量在这里存在，值为 undefined
}
```

## 块级声明

块级声明用于声明在指定块的作用域之外无法访问的变量。块级作用域存在于：

- 函数内部
- 块中（使用 {} 包裹的代码）

### let 声明

let 声明的变量只在块级作用域内有效，不存在变量提升。

### 禁止重复声明

let 不允许在相同作用域内，重复声明同一个变量。

```js
var count = 30

let count = 40  // 会报错
```
```js
var count = 30

if (condition) {
  let count = 40  // 不会报错
}
```
### const 声明

const 声明的变量只在块级作用域内有效，不存在变量提升。任何情况下，都不能修改 const 声明的变量。用 const 声明对象时，对象的引用不可修改，但是对象的属性可以修改。

## 临时死区

Javascrpt 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部（遇到 var 声明），要么将声明放到 TDZ 中（遇到 let 和 const 声明）。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。

## 循环中的块级作用域绑定

### 循环中的函数

```js
var funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs.forEach(function(func) {
  func()  // 输出 10 次数字 10
})
```

可以通过 IIFE 来解决这个问题。

```js
var funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push((function(value) {
    return function() {
      console.log(value)
    }
  })(i))
}

funcs.forEach(function(func) {
  func()  // 输出 0 到 9
})
```

### 循环中的 let 声明

```js
var funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs.forEach(function(func) {
  func()  // 输出 0 到 9
})
```

### 循环中的 const 声明

```js
var funcs = []

for (const i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}
```

在执行到第二次循环时，会报错，因为 i 的值不能修改。

在 for-in 或 for-of 循环中，也可以使用 let 和 const 声明。下面这段代码应该不会报错：

```js
var funcs = [],
    object = {
      a: true,
      b: true,
      c: true
    }

for (const key in object) {
  funcs.push(function() {
    console.log(key)
  })
}

funcs.forEach(function(func) {
  func()  // 输出 a、b、c
})
```

## 全局块作用域绑定

当 var 声明的变量在全局作用域中时，会成为 window 对象的属性。在全局作用域中使用 let 和 const 声明的变量，不会成为 window 对象的属性。