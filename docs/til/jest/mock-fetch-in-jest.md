# Mock Fetch in a Jest Test

```
afterAll(() => {
  global.fetch.mockClear()
  delete global.fetch
})
  
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;
```

- https://jaketrent.com/post/mock-fetch-jest-test/
- https://stackoverflow.com/a/64819545
