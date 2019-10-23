# Lesson 6 Sorting

### Task 1 MaxProductOfThree

```javascript
function solution(A) {
    const sorted = [...A].sort((a,b) => b-a);
    return Math.max(sorted[0] * sorted[1] * sorted[2], 
        sorted[0] * sorted[sorted.length-1] * sorted[sorted.length-2]);
}
```

### Tast 2 Distinct

```javascript
function solution(A) {
    return new Set(A).size;
}
```

### Tast 3 Triangle

```javascript
function solution(A) {
    const sorted = [ ...A ].sort((a,b) => b-a);
    
    for(let i=0; i< A.length-2; i++){
        if(sorted[i] < sorted[i+1] + sorted[i+2]){
            return 1;
        }
    }
    
    return 0;
}
```