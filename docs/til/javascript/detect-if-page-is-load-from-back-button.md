# Detect if page is load from back button

```
if (window.performance) {
     var navEntries = window.performance.getEntriesByType('navigation');
     if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
          console.log('As per API lv2, this page is load from back/forward');
     } else if (window.performance.navigation
          && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
          console.log('As per API lv1, this page is load from back/forward');
     } else {
          console.log('This is normal page load');
     }
} else {
     console.log("Unfortunately, your browser doesn't support this API");
}
```

Ref: https://stackoverflow.com/a/53317159
