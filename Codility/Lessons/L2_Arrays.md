# Lesson 2 Arrays

### Task 1 OddOccurrencesInArray

```javascript
function solution(A) {
  let map = new Map();
  A.forEach(v => map.has(v) ? map.delete(v) : map.set(v, 1));
    
  for(const [k, v] of map){
    if(v === 1) return k;
  }
}
```

### Task 2 CyclicRotation

```javascript
function solution(A, K) {
    
  if(K === 0) return A;
    
  const shiftedIndex = K < A.length 
    ? A.length - K 
    : A.length - (K % A.length );

  return [ ...A.slice(shiftedIndex), ... A.slice(0, shiftedIndex)];
}
```



