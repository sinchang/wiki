# Remove hover styles on tap on mobile devices

Just use [`Media Queries: interaction media features`](https://caniuse.com/css-media-interaction)

```
@media not all and (hover: none) {
    a:hover{
        color: orange
    }
}
```

Ref: https://stackoverflow.com/a/57255796
