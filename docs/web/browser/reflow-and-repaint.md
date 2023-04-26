# Repaint and Reflow

在了解重绘和重排之前，我们需要知道浏览器渲染的基本流程，主要分为以下几个步骤：

![image](https://user-images.githubusercontent.com/3297859/234475261-aa228900-be6f-45b1-b46e-e2b0dc5bf30f.png)

1. 构建 DOM 树：浏览器解析 HTML 文件，并根据 HTML 标签的嵌套关系构建 DOM 树。

2. 构建 CSSOM 树：浏览器解析 CSS 文件，并根据选择器的优先级和层叠规则构建 CSSOM 树。

3. 合并生成渲染树：将 DOM 树和 CSSOM 树结合，生成渲染树（Render Tree），即每个节点的样式属性和内容信息的结合体。

4. 布局（Layout）：根据渲染树中每个节点的大小、位置等信息，计算出每个节点在屏幕上的精确位置。

5. 绘制（Paint）：将渲染树的每个节点按照计算出的精确位置绘制到屏幕上。

6. 合成（Composite）：将绘制的节点合成为一张图像，并在屏幕上显示。

以上步骤中，步骤 1-3 构建了网页的结构和样式，步骤 4-6 则是将网页结构和样式转换为可视化的图像的过程。在渲染过程中，每个节点的样式属性、位置信息等都会对性能产生影响，因此优化这些过程是提高网页性能的关键。

## 重绘 Repaint

重绘是指当DOM的样式属性（如opacity, color, background-color, visibility等）发生变化时，浏览器会根据新的样式属性重新绘制页面上相应的元素。这个过程不需要重新计算渲染树，但是会重新生成图层和绘制元素，是比较消耗性能的。

 * Occurs when changes affect the visibility.
 * Triggers examples: `opacity`, `color`, `background-color`, `visibility`.

## 重排 Reflow

重排是指当DOM发生结构变化（如增删节点、改变位置等）时，浏览器需要重新计算渲染树并确定每个节点的几何信息（位置和大小），然后将这些信息应用到页面上。这个过程会涉及到重新计算布局，重新排列元素等操作，是比较消耗性能的。

* Occurs when the changes affect the layout.
* Triggers examples: `width`, `position`, `float`.
* Recalculate of positions and dimensions.
* Has a bigger impact, changing a single element can affect all children, ancestors, and siblings or the whole document.
* Triggers (change dom or css, scrolling, user actions like `focus`).
* `Reflow` only has a `cost` if the document has changed and `invalidated` the `layout`.
* `Something Invalidates` + `Something Triggers` = `Costly Reflow`.

## 减少重排和重绘

- 使用CSS3的transform属性代替position和top/left等属性来移动元素，因为transform属性不会引起重排和重绘。
- 将需要多次操作的DOM节点缓存起来，避免多次访问和操作。
- 使用documentFragment来批量操作DOM节点，减少重排和重绘的次数。
- 使用虚拟DOM技术，将DOM操作尽量减少到最少。
- 避免频繁修改样式属性，可以将需要修改的样式属性合并到一起，一次性修改。
- 尽量减少页面的层级嵌套，避免过多的图层合成，因为图层合成也会引起重绘和重排。

## References

- https://gist.github.com/faressoft/36cdd64faae21ed22948b458e6bf04d5
- https://web.dev/howbrowserswork
