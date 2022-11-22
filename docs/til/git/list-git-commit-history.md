# List git commit history in specific date range

Just use the below command

```shell
git log --pretty=format:"%Cgreen%ad%x09%Cblue%s" --date=short --author=xingchang.wen@gmail.com --since=2022-01-01 --until=2022-11-22
```