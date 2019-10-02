# Lesson 3 Time Complexity

### Task 1 FrogJmp

- time complexity: O(1)
```javascript
function solution(X, Y, D) {
  return Math.ceil((Y-X)/D)
}
```

### Task 2 PermMissingElem

- time complexity: O(N)
```javascript
function solution(A) {
  return A.reduce((a,v) => a -= v, (A.length+1)*(A.length+2)/2);
}
```