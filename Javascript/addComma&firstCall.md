### 금액에 add comma

```
function addComma(m){

  m = m.toString();

  let totalComma = parseInt(m.length / 3);
  let restPlace = m.length % 3;

  let result;

  if(m.length <= 3){
    return m;
  }else{
    result = m.substr(0,restPlace);
  }

  for(let j=0; j<totalComma; j++){
    if(j == 0 && restPlace == 0){
        result += m.substr(restPlace+j ,3);
    }else{
        result += ','+ m.substr(restPlace+j ,3);
    }
  }

  return result;
}
```

### firstCall

f(g) 일 때, g 가 한번만 호출되도록.  

```
let f =(fn)=>{
  let count = 0;
  return function(){
    if(count === 0){
      fn();
      count++;
    }
  }
}

let g =_=>console.log("test g");

let a = f(g);

a(); // test g
a(); // undefined
```
