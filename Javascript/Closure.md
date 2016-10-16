## Closure

매우 유용한 참고사이트.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures

### 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 '기억한다'.

 - 아래 코드에서 testF 객체 내부의 gVar는 글로벌변수인 gVar와 다르며 직접 호출이 불가능한 private 변수이다.
 - increaseFunc 함수는 testF 내부의 함수들에 의해서만 호출이 가능한 private 함수 이다.
```
var gVar = 'globalValue';

var testF = (function(){
	var gVar = 'test1';
  function increaseFunc(val){
  	gVar = gVar+val;
  }
  return {
  	getVal : function(){
    	return gVar;
    },
    setVal : function(v){
    	gVar = v;
    },
    addVal : function(v){
    	increaseFunc(v);
    }
    
  }

})();

console.log("realGvar", gVar);
console.log("realGvar1", testF.getVal());
testF.setVal(1111);
console.log("realGvar1", gVar);
console.log("realGvar2", testF.getVal());
testF.addVal(222);
console.log("realGvar1", gVar);
console.log("realGvar2", testF.getVal());
```

 - 위의 예제는 클로저 내부 변수와 전역변수의 이름이 동일하게되어 있다. 이렇게 명명하면 안된다!!! 반드시 다르게 명명하자.
 - 아래 예제에서 ping 객체가 만들어지면, ping 객체는 스코프를 차단하는 역할과 함께, 내부에 두개의 클로저를 포함하는 역할을 하게 된다.
   이때, 중요한 점은 내부의 두 클로저를 제외하고는 testPrivate 변수에 접근할 방법이 없다는 것이다.
 ````
  var ping = (function(){
    var testPrivate = 0;
    
    return {
     plus_func : function(n){
        return testPrivate += n;
     },
     minus_func : function(n){
        return testPrivate -= n;
     }
   };
 })();
 ````