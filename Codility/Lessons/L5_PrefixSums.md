# Lesson 5 Prefix Sums

### Task 1 PassingCars

```javascript
function solution(A) {
    let sum = 0;
    let west = 0;
    
    for(let i = A.length-1; i >= 0; i--){
        if(A[i] === 1){
            west++;
        }else{
            sum += west;
            
            if(sum > 1000000000){
                sum = -1;
                break
            }
        }
    }
    
    return sum;
}
```
### Task 2 GenomicRangeQuery

```javascript
function solution(S, P, Q) {
    const arrayS = Array.from(S);
    const map = new Map([['A', 1], ['C', 2], ['G', 3], ['T', 4]]);
    const memo = Array.from(Array(S.length), () => Array());
    const searchFn = (first, end) => {
        if(Array.from(new Set(arrayS.slice(first, end+1))).length === 1){
            return memo[first][end] = memo[first][first];
        }
        if(!memo[first][end]){
            memo[first][end] = Math.min(searchFn(first, end-1), memo[end][end]); 
        }
        return memo[first][end]; 
    };
    
    let result = [];
    
    arrayS.forEach((v, i) => memo[i][i] = map.get(v));
    
    for(let i=0; i< P.length; i++){
        result.push(searchFn(P[i], Q[i]));
    }
    
    return result;
}
```