# How to debug a NodeJS application inside a Kubernetes Pod?

With the following two steps, you can debug a Node app running inside a Docker container in a kubernetes Pod:

Log into the container and run the Node app in the debug mode:

`kubectl exec -it <pod-name> bash`

`node --inspect-brk index.js`

Forward connections to a local port to a port on the Pod

`kubectl port-forward <pod-name> 9229`

Note: 9229 is the default port number that the debugger listens on, and you don't need to expose this port in your Kubernetes configuration yaml file.

That is it.

Now you can open you Chrome browser with address chrome://inspect, click the remote target, and start debugging.

Ref: https://stackoverflow.com/a/60043368
