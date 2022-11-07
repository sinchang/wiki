# Remove all matching keys from redis

```shell
redis-cli KEYS "web*"  | awk '{ system("redis-cli DEL " $1) }'
```

ref: https://stackoverflow.com/a/36086446
