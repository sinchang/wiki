# Any vs Unknown vs Never

- `any` 表示任何类型都可以，相当于放弃类型检查，使用 `any` 可能会导致代码中出现类型错误而不会被 TypeScript 检查出来，因此应该尽可能避免使用 `any`。

  ```typescript
  let x: any = 5;
  x = 'hello';
  x = { foo: 'bar' };
  ```

- `unknown` 表示未知类型，相当于一个类型安全的 `any`，因为 TypeScript 不允许我们对 `unknown` 类型的值执行任何操作，除非我们先进行类型检查或类型断言。使用 `unknown` 可以在编写类型不确定的代码时提供更好的类型安全性。

  ```typescript
  function foo(x: unknown) {
    if (typeof x === 'string') {
      console.log(x.toUpperCase());
    } else {
      console.log('x is not a string');
    }
  }

  foo('hello'); // logs HELLO
  foo(5); // logs x is not a string
  ```

- `never` 表示永远不会出现的值的类型，通常用于描述函数永远不会返回的情况，例如函数抛出异常或进入无限循环。在 TypeScript 中，`never` 类型可以被赋予任何类型，但是任何类型都不能被赋值给 `never` 类型。
