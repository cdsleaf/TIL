# Lesson 7 Stacks and Queues

### Task 1 Brackets

time complexity: O(N)
```javascript
function solution(S) {
    let map = new Map();
    map.set("()", 1);
    map.set("{}", 1);
    map.set("[]", 1);
    
    let stack = S.length !== 0 ? [S[0]] : [];
    
    for(let i=1; i<S.length; i++){
        if(map.has(stack[stack.length-1]+S[i])){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
```
### Task 2 Fish

time complexity: O(N)
```javascript
function solution(A, B) {
    let downstreamFishes = [];
    let aliveFishes = 0;
    
    for(let i=0; i<A.length; i++){
        if(B[i] === 1){
            downstreamFishes.push(i);
            continue;
        }
            
        while(true){
            if(downstreamFishes.length === 0){
                aliveFishes++;
                break;
            }else if(A[i] > A[downstreamFishes[downstreamFishes.length-1]]){
                downstreamFishes.pop();
            }else{
                break;
            }
        }
    }
    
    return aliveFishes+downstreamFishes.length;
}
```

### Task 3

time complexity: O(N)

```javascript
function solution(S) {
    const nestedString = '()';
    let stack = [S[0]];
    
    for(let i=1; i< S.length; i++){
        if(stack[stack.length-1] + S[i] === nestedString){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }

    return S.length === 0 || stack.length === 0 ? 1 : 0;
}
```