# 箭头函数

## 创建立即执行函数表达式

```
let person = ((name) => {
  return {
    getName: function() {
      return name
    }
  }
})('Nicholas')

console.log(person.getName())
```

## 箭头函数没有 this 绑定

箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this; 否则，this 的值会被设置为全局对象。

而且，不能通过 call()、apply() 或 bind() 方法来改变 this 的值。

## 箭头函数没有 arguments 绑定

箭头函数并没有自己的 arguments 对象，且未来无论函数在哪个上下文中执行，箭头函数始终可以访问外围函数的 arguments 对象。

```
function createArrowFunctionReturningFirstArg() {
  return () => arguments[0]
}

var arrowFunction = createArrowFunctionReturningFirstArg(5)

console.log(arrowFunction())  // 5
```

## [尾调用优化](https://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96)
