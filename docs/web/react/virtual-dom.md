# React Virtual DOM

- Frequent DOM manipulations are expensive and performance heavy.
- Virtual DOM is a virtual representation of the real DOM.
- When state changes occur, the virtual DOM is updated and the previous and current version of virtual DOM is compared. This is called “diffing”.
- The virtual DOM then sends a batch update to the real DOM to update the UI.
- React uses virtual DOM to enhance its performance.
- It uses the observable to detect state and prop changes.
- React uses an efficient diff algorithm to compare the versions of virtual DOM.
- It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI.

The image below shows the virtual DOM tree and the diffing process.

![image](https://user-images.githubusercontent.com/3297859/233953395-a02848db-4621-44b7-9b4a-3367c5407186.png)

## References

- https://programmingwithmosh.com/react/react-virtual-dom-explained/
- https://www.codecademy.com/article/react-virtual-dom
