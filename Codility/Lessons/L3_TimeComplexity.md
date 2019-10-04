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

### Task 3 TapeEquilibrium

- time complexity: O(N)
```javascript
function solution(A) {

    let leftSum = A[0];
    let rightSum = A.reduce((a,v) => a+v, 0) - leftSum;
    let minimun = Math.abs(rightSum - leftSum);
    
    for(let i = 1; i< A.length-1; i++){
        leftSum += A[i];
        rightSum -= A[i];
        
        minimun = Math.min(minimun, Math.abs(leftSum-rightSum));
    }
    
    return minimun;
}
```