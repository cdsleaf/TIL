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
### Task 3 MinAvgTwoSlice

time complexity: O(N)

```javascript
function solution(A) {
    let minIndex = 0;
    let minValue = 10001;
    
    for(let i=0; i<A.length-1; i++){
        if((A[i]+A[i+1])/2 < minValue){
            minIndex = i;
            minValue = (A[i]+A[i+1])/2;
        }
        if(i < A.length-2 && (A[i]+A[i+1]+A[i+2])/3 < minValue){
            minIndex = i;
            minValue = (A[i]+A[i+1]+A[i+2])/3 ;
        }
    }
    
    return minIndex;
}
```

### Task 4 CountDiv

time complexity: O(1)

```javascript
function solution(A, B, K) {
    if(K === 1) return B-A+1;
    
    return Math.floor(B/K) - (A%K === 0 ? Math.floor((A-1)/K) : Math.floor(A/K));
}
```