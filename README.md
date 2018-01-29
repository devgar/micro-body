# micro-body

Simple body parser for [micro][]

Use it as expected in your __micro__ module:

```javascript
const microBody = require('micro-body')

module.exports.POST = async (req, res) => {
  let body = await microBody(req)
  return body
}
```

__micro-body__ can parse `urlencoded` and `json` body types, but throws an error if `content-type` header has another type.

If request hasn't got body or no `content-type` header is present __micro-body__ returns an empty object `{ }`.

[micro]: https://github.com/zeit/micro
