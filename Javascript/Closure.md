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
