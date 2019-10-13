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