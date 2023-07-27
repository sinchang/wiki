# Change the commit author for the recent commits

```shell
git rebase --onto HEAD~4 --exec "git commit --amend --reset-author --no-edit" HEAD~4
```
