# Rename the extension of multiple files

```
find . -name '*.txt' -exec sh -c 'mv "$0" "${0%.txt}.txt_bak"' {} \;
```

It will rename all the matched file under the current directory.
