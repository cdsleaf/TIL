# What are Pure Functions?

1. Return the same result if the same arguments are passed in
2. Depend solely on the arguments passed into them
3. Do not produce side effects, such as API requests and I/O operations

### Examples

- Pure Function
```javascript
const add = (a, b) => a + b
```

- Impure Function
```javascript
Math.random();

```
```javascript
let a = 1;
const b = c => c + a
```