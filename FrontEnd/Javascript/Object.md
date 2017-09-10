## 자바스크립트 객체.

아래 소스코드에서 글로벌 변수innerVal 과 testObj.innerVal 변수는 완전히 분리된 각기 다른 변수이다.

아래와 같이 객체 내부에 변수를 정의해서 사용할 경우, 전역네임스페이스를 오염시키지 않고 데이터를 관리할 수 있다.

 - 객체 리터럴로 객체 생성한 경우.
```
var innerVal = '333';

var testObj = {
  innerVal : 111,
  
  function testFunc(){
  
  }

}
```
