# Lesson 4 Counting Elements

### Task 1 PermCheck

```javascript
function solution(A) {
  const setA = Array.from(new Set(A));
  const { max, sum } = setA.reduce((a,v) => {
    return {
      max: Math.max(a.max,v),
      sum: a.sum+v
    }
  }, {max:0, sum:0});
    
  return A.length === max && sum === (max*(max+1)/2)
    ? 1
    : 0
}
```