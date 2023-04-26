# Event delegation

事件代理（Event delegation）是一种 JavaScript 事件处理技术，它允许在祖先元素上代理处理所有子元素上的事件，而不是在每个子元素上单独附加事件监听器。事件代理背后的思想是，事件在冒泡阶段（bubble phase）从子元素传播到祖先元素，因此我们可以在祖先元素上捕获事件，然后根据事件源的特征（如事件类型、目标元素的类名等）来处理它。

## 好处

- 减少内存占用：如果为每个子元素添加事件监听器，可能会导致内存占用过多，因为每个监听器都需要内存来存储。
- 动态绑定事件：当我们动态添加或删除子元素时，不需要重新绑定事件监听器，因为它们都由父元素处理。
- 更少的事件处理器：如果子元素上的事件相同，则不需要为每个子元素编写相同的事件处理器。相反，它们都由祖先元素处理。

## 局限

- 首先，事件必须冒泡。而有些事件不会冒泡。此外，低级别的处理程序不应该使用 event.stopPropagation()。
- 其次，委托可能会增加 CPU 负载，因为容器级别的处理程序会对容器中任意位置的事件做出反应，而不管我们是否对该事件感兴趣。但是，通常负载可以忽略不计，所以我们不考虑它。

## 例子

```html
<ul id="myList">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
```

```js
const myList = document.getElementById('myList');

myList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = 'blue';
  }
});
```

## References

- https://zh.javascript.info/event-delegation
