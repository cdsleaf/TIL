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