# Install Go on Mac (with homebrew)

### Update & Install Go

`brew update && brew install golang`

### Setup Workspace

It’s considered best practice to use $HOME/go location for your workspace, so let’s do that!

`mkdir -p $HOME/go/{bin,src,pkg}`

We created two important folders bin and src that’ll be used for GO

### Setup Environment

```
export GOPATH=$HOME/go
export GOROOT="$(brew --prefix golang)/libexec"
export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"
```

reload the settings with source $HOME/.bashrc (or .zshrc )

Ref: https://jimkang.medium.com/install-go-on-mac-with-homebrew-5fa421fc55f5
