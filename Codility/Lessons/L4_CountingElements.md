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

### Task 2 FrogRiverOne

```javascript
function solution(X, A) {
    
  let sum = X*(X+1)/2;
  let map = new Map();
  let result = -1;
    
  for(let i=0; i<A.length; i++){
    if(!map.has(A[i])){
      map.set(A[i], 1);
      sum -= A[i];
    }
        
    if(sum === 0){
      result = i;
      break;
    }
  }
    
  return result;
}
```

### Task 3 MaxCounters

```javascript
function solution(N, A) {
    let baseLine = 0;
    let max = 0;
    let map = new Map();
    let result = [];
    
    A.forEach(v => {
        if(v > N){
            baseLine += max;
            max=0;
            map.clear();
        }else{
            map.set(v, map.has(v) ? map.get(v)+1 : 1);
            max = Math.max(max, map.get(v));
        }
    });
    
    for(let i=0; i<N; i++){
        result.push(baseLine + (map.has(i+1) ? map.get(i+1) : 0));
    }
    
    return result;
}
```