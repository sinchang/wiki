# 数组去重

在 JavaScript 中，可以使用多种方法对数组进行去重，以下是一些常见的方法：

1. 使用 Set：Set 是 ES6 中的新数据类型，它可以自动去重。可以通过将数组转换为 Set 来实现去重，然后再将 Set 转换回数组。例如：

```javascript
const arr = [1, 2, 2, 3, 3, 4];
const newArr = [...new Set(arr)];
console.log(newArr); // [1, 2, 3, 4]
```

2. 使用 filter 和 indexOf：使用 filter 方法和 indexOf 方法可以去除数组中的重复项。例如：

```javascript
const arr = [1, 2, 2, 3, 3, 4];
const newArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(newArr); // [1, 2, 3, 4]
```

3. 使用 reduce 和 includes：使用 reduce 方法和 includes 方法也可以实现数组去重。例如：

```javascript
const arr = [1, 2, 2, 3, 3, 4];
const newArr = arr.reduce((acc, cur) => {
  return acc.includes(cur) ? acc : [...acc, cur];
}, []);
console.log(newArr); // [1, 2, 3, 4]
```
