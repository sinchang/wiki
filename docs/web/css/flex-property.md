# 了解 Flex 属性

flex 属性是 flex-grow、flex-shrink 和 flex-basis 的简写。

## flex-grow

默认值是 0。

![](https://ishadeed.com/assets/flex-css/flex-grow-2.png)

![](https://ishadeed.com/assets/flex-css/flex-grow-3.png)

flex-grow 无法让 flex item 都相等。

## flex-shrink

默认值是 1。

考虑以下示例。中间项的宽度为 300px，并设置了 flex-shrink: 1。如果没有可用空间来容纳所有 flex item，这将允许 item 缩小宽度。

![](https://ishadeed.com/assets/flex-css/flex-shrink-1.png)

![](https://ishadeed.com/assets/flex-css/flex-shrink-1-2.png)

## flex-basis

默认值是 auto。

![](https://ishadeed.com/assets/flex-css/flex-basis-1.png)

![](https://ishadeed.com/assets/flex-css/flex-basis-2.png)

## 简写 flex

- flex: auto === flex: 1 1 auto
  
  flex item 的大小基于内容。结果，具有更多内容的 item 将更大。

  ![](https://ishadeed.com/assets/flex-css/flex-relative.png)

- flex: 1 === flex: 1 1 0%

  相反，当 flex-basis 属性设置为 0 时，所有 flex item 将增长到相同的大小。

  ![](https://ishadeed.com/assets/flex-css/flex-absolute.png)

  flex 比 width 属性（在 flex-direction: row 的情况下）或 height（在 flex-direction: column 的情况下）具有更高的优先级。

  ref: https://ishadeed.com/article/css-flex-property/