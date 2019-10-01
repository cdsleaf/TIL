# Lesson 1 Iterations

### Task 1 BinaryGap

```javascript
function solution(N) {
    
  return Array
    .from(N.toString(2))
    .reduce((a,v) => {
      return {
        maxGap: a.state && v==="1" 
          ? Math.max(a.maxGap, a.candidate) 
          : a.maxGap,
        candidate: a.state && v==="0"
          ? a.candidate+1
          : 0,
        state: !a.state && v==="1"
          ? true
          : a.state
      };
    }, {
        maxGap: 0,
        candidate: 0,
        state: false
      }
    )["maxGap"];
}
```