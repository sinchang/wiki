# apk: command not found in node:latest Docker image

Here is the reason:

> node:latest is based on buildpack-deps, which is based on Debian. Debian does not use apk; it uses apt. You either want to use Debian's apt to install packages (apt-get install tzdata) or switch to node:alpine, which uses apk for package management.
