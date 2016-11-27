## Delete occurrences of an element if it occurs more than n times

https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript  

solution  
```
function deleteNth(arr,x){
  let map = new Map();
  let r = [];
  arr.forEach(num=>{
    if(map.has(num)){
      if(map.get(num) < x){
        r.push(num);
        map.set(num, map.get(num)+1);
      }
    }else{
      map.set(num, 1);
      r.push(num);
    }
  });
  return r;  
}

```

best practice1
```
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

```
best practice2
```
function deleteNth(arr, x){
  return arr.reduce(function(a, v){
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z){
  return arr.filter(function(q){ return z == q }).length;
}
```
