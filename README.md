
# hasKeys 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Only returns `true` if the given object has at least one key defined.

Inherited keys are not counted!

```coffee
hasKeys = require "hasKeys"

hasKeys {}             # => false

hasKeys { foo: true }  # => true
```
