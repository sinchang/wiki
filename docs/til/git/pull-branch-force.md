# How do I force "git pull" to overwrite local files

```
git fetch origin master
git reset --hard origin/master
```

force pull based on the current branch

```shell
git fetch origin && git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)
```
