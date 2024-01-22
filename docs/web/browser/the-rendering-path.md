# The (critical) rendering path

The rendering path involves the following steps:

- Constructing the Document Object Model (DOM) from the HTML.
- Constructing the CSS Object Model (CSSOM) from the CSS.
- Applying any JavaScript that alters the DOM or CSSOM.
- Constructing the render tree from the DOM and CSSOM.
- Perform style and layout operations on the page to see what elements fit where.
- Paint the pixels of the elements in memory.
- Composite the pixels if any of them overlap.
- Physically draw all the resulting pixels to screen.

![](https://web.dev/static/learn/performance/understanding-the-critical-path/image/fig-1-v2.svg)

ref: https://web.dev/learn/performance/understanding-the-critical-path
