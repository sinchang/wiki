# SSH 登录时遇到问题解决方法

### No matching host key type found 问题

```shell
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa root@{ip}
```
### Host key verification failed 问题

```shell
ssh-keygen -R {ip}
```
