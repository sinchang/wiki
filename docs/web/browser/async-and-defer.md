# What's The Difference Between Async & Defer?

async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.

## defer

- Scripts with defer never block the page.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

## async

- The browser doesn’t block on async scripts.
- Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
- DOMContentLoaded and async scripts don’t wait for each other.

more info at https://javascript.info/script-async-defer
