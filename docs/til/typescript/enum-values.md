# How to deifne a type for enum values

```ts
enum Drinks {
  a = 1,
  c = 2,
}

type Value = `${Drinks}`
```
