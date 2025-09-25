# Clear GitHub notifications with spam account

```shell
curl -L \
  -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer {token}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/notifications \
  -d '{"last_read_at": null,"read":true}'
```
