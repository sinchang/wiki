# almostIncreasingSequence

```js
function almostIncreasingSequence(sequence) {
    let count = 0;
    
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (count > 1) return false;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
        }
    }
    
    return true;
}
```

ref: https://wachino.github.io/codefights/codefights-arcade/codefights-arcade-intro/7_almostIncreasingSequence/README.html
