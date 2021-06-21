## Assertion testing
Permet de créer des test pour comparer résultats obtenu et résultat attendu, renvoi erreure si résultat faux.
Example 
```js
const assert = require('assert');

assert.equal(1, 1);
// Ok 1 === 1
assert.equal(1, 2);
// Assertion Error
```

## Async hooks
Réagir au cycle de vie d'une ressource asynchrone
```js
const async_hooks = require('async_hooks');

// Créer le hook
const myFirstHook = async_hooks.createHook({ init, before, after, destroy, promiseResolve })

// L'initialiser
myFirstHook.enable()

```
## Buffer
## C++ addons
## C/C++ addons with Node-API
## C++ embedder API
## Child processes
## Cluster
## Command-line options
## Console
## Crypto
## Debugger
## Deprecated APIs
## Diagnostics Channel
## DNS
## Domain
## Errors
## Events
## File system
## Globals
## HTTP
## HTTP/2
## HTTPS
## Inspector
## Internationalization
## Modules: CommonJS modules
## Modules: ECMAScript modules
## Modules: module API
## Modules: Packages
## Net
## OS
## Path
## Performance hooks
## Policies
## Process
## Punycode
## Query strings
## Readline
## REPL
## Report
## Stream
## String decoder
## Timers
## TLS/SSL
## Trace events
## TTY
## UDP/datagram
## URL
## Utilities
## V8
## VM
## WASI
## Worker threads
## Zlib
