# tag

Parses template literals to a function.

## setup

### npm

```shell
npm i @seregpie/tag
```

---

Import inside an ES module.

```javascript
import tag from '@seregpie/tag';
```

*or*

Import inside a CommonJS module.

```javascript
let tag = require('@seregpie/tag');
```

### browser

```html
<script src="https://unpkg.com/@seregpie/tag"></script>
```

The function is globally available as `tag`.

## usage

```javascript
let renderTemplate = tag`Hi, ${'name'}!`;
let string = renderTemplate({name: 'Patrik'});
// => 'Hi, Patrik!'
```