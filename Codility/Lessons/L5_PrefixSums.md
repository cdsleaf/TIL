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

time complexity: O(N + M)

```javascript
function solution (S, P, Q) {
	let dna = '';
	let result = [];

	for (let i=0; i < P.length; i++) {
		dna = S.slice(P[i], Q[i] + 1);

		if (dna.indexOf('A') !== -1) {
			result.push(1)
		} else if (dna.indexOf('C') !== -1) {
			result.push(2)
		} else if (dna.indexOf('G') !== -1) {
			result.push(3)
		} else {
			result.push(4)
		}
	}

	return result;
}
```