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