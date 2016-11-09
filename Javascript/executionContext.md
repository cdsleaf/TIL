# Execution Context 과 Scope - 수정 중.

참고 사이트  
https://muckycode.blogspot.kr/2015/03/javascript-execution-context-scope.html  
http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
http://smarttech.tistory.com/entry/Javascript-Execution-context%EC%99%80-Stack%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%A0%95%EB%A6%AC%ED%95%98%EC%9E%90
http://alnova2.tistory.com/967
http://huns.me/development/1407

자바스크립트는 실행영역이라 번역될 수 있는 Execution Context와 스코프(scope)를 가지고 있다.  
이러한 실행영역 덕분에 함수는 다양한 context 에서 호출 될 수 있고, 스코프가 해당 context내에서 생성/유지 될 수 있다.  

## Execution Context (실행 영역)

자바스크립트는 실행 단위로써 Execution Context 내에서 실행된다. 이는 자바스크립트 코드 블럭으로도 볼 수 있다.  
Executon Context는 "실행 가능한 코드의 형상화하고 구별하는 추상적인 개념"이라고 정의 할 수 있다.    
Executon Context는 최초에 Global Execution Context가 있고, 스크립트가 실행됨에 따라 각각의 context가 생성되고 없어진다. 이러한 Active Context들은 생성된 순서대로 Stack 메모리에 삽입되게되고 해당 Stack은 FILO 에 따라 현재 실행중인 Context가 Stack의 최상위에 위치하게 된다.  

각각의 Context는 1개의 Variable Enviroment, 1개의 Lexical Enviroment, 1개의 ThisBinding 속성, 총 3개의 부분으로 구성되어 있다. 그리고 위의 3개의 부분은 Object 형식으로 저장된다. 다만 여기에서 해당 Object 는 자바스크립트의 Object 자료형은 아니며 직접 접근할 방법은 없다. (자바스크립트 엔진 내부에서 처리되는 Object)  

---
실행 context를 만드는 단위는 Executable Code.
자바스크립트 엔진이 스크립트를 만나면, Evaluating 해서 실행 컨텍스트를 생성함.

1. Global Code

2. Function Code

3. Eval Code

각각에 따라서 컨텍스트를 만드는 과정이나 초기화가 다르다.

```
// ..여기에서 Lexical 과 Variable 은 둘다 Lexicla Enviroment 타입 이라는 의미.
ExecutionContext = {
  LexicalEnviroment : [Lexical Enviroment],
  VariableEnviroment : [Lexical Enviroment],
  ThisBinding : [object]
}
```

LexicalEnviroment : 코드안에서 자원을 어디에서 찾을 것인가?
프로퍼티 2개를 가진다.
enviromnet record : 지역에서 사용하는 변수나 함수형 식별자를 넣어두는 프로퍼티.
outer enviromnet reference : 함수가 중첩될 수 있다. 유효범위가 중첩될 수 있다는 의미. 이때 상위 유효범위에 대한 참조. 상위 Lexical Enviroment를 참조한다.
이 outer enviromnet reference를 통해 스코프 체인이 형성되고 outer enviromnet reference 값이 null로 설정되는 Global Enviromnet를 만날 때 까지 이어진다.

enviromnet record는 2가지 타입임.
Declarative
Object

```
//단순하게 키와 값이 맵핑된 형태.
DeclarativeEnviromnetRecord : {
  x : 10,
  y: 20
}

ObjectEnviromnetRecord : {
  bindObject : globalObject
}
```

여기에서 Executable Code 에 대한 설명..

Global Code
```
Global Execution Context : {
  LexicalEnviroment : [globalEnv],
  VariableEnviroment : [globalEnv],
  ThisBinding : window
}

```
globalEnv 전역환경.

```
ObjectEnviromnetRecord : {
  bindingObject : window //변수를 window에서 찾는다는 의미.
},
OuterEnvironmentReferece : null //최상위 이므로 null
```

Function Code

아래 예제 함수 sum은 계속 사용됨.
```
function sum(x,y){
  console.log(barr);

  var result = x + y;
  var varr = function(){
    console.log("barr")
  }

  function printResult(){
    console.log(result);
  }

  return printResult;
}

sum(10,20);
```

stack 내부에 전역 컨테스트가 있고 sum 함수가 실행 되면 sum 컨텍스트가 쌓인다.

ThisBinding

함수 실행 시 좌측에 뭔가가 있는지확인 하고 없으면 전역으로 처리.

sumFunctionEc.thisBinding = null;

thisBinding이 null, underfined인 경우 this = global
"use strict" 모드에서는 this = null

만약 foo.sum(10,20); 이렇게 호출할 경우
sumFunctionEc.thisBinding = foo;

Creating local lexical environment

앞서 sum 함수 실행 시 아래와 같이 thisBinding=null 로 생성됨.
이때, LexicalEnv.EnvironmentRecord : {}  이렇게 빈 상태로 생성됨.

```
sumFunctionEc = {
  thisBinding : null,
  LexicalEnv : localEnv
}

localEnv = {EnvironmentRecord : {}}
```

실행 컨테스트 바인딩 초기화..

앞서 sum(10,20); 이렇게 인자가 입력된 상태로 sum이 실행되면,
```
localEnv = {
  EnvironmentRecord : {
    x : 10,
    y : 20,

    printResult : function Reference, //호이스팅이 발생.
/*
    코드를 해석하는 단계에서 printResult 참조가 셋팅됨.
    그래서 코드 상에 함수가 선언되지 않았음에도 해당 함수 호출이 가능함.
    아래 예제코드에서 코드상으로는 barr 함수가 선언되지 않았음에도  
    console.log(barr); 가 호출됨.

    ex) console.log(barr);
        var barr = function(){
          ...
        }
*/
    result : undefined,
    barr : undefined //변수 선언식이라 나중에 해석됨.그래서 undefined.
  }
}
```

identifier resolution
식별자와 묶여있는 값을 찾아가는 과정  
스코프 체인의 원리.

outer Enviromnet Reference
=> The outer Enviromnet reference is used to model the logical nesting of Lexical Environment values.

```
var a = 10;

(function foo(){
  var b = 20;

  (function bar(){
    var c = 30;
    console.log(a + b + c);
  })();
})();
```

실행 컨텍스트 스택은 아래와 같이 쌓인다. barEC가 최상위

barEC
```
LexicalEnviroment : {
  EnvironmentRecord : {
    c : 30
  }
  OuterEnvironmentReferece : fooEC.LexicalEnviroment
}
```
fooEC
```
LexicalEnviroment : {
  EnvironmentRecord : {
    b : 20
  }
  OuterEnvironmentReferece : globalEC.LexicalEnviroment
}
```
globalEC
```
LexicalEnviroment : {
  EnvironmentRecord : {
    a : 10
  }
  OuterEnvironmentReferece : null
}
```

이제 console.log(a+b+c) 에서 a를 찾을 때 barEC 를 먼저 찾고 없으면 OuterEnvironmentReferece 를 통해서 fooEC 를 찾고 없으면 다시 OuterEnvironmentReferece를 찾아서 a의 찾아간다. 이런식으로 스코프 체인이 실행된다.

Closure - 자유변수를 간직한 코드 블럭
유효범위 밖에 있는 값의 참조를 간직하고 있는 코드블럭



---

### 1. Lexicla Enviromnet Object

한글로 의역하면 "구성 환경 객체"라 할 수 있다. 해당 Context에서 선언된 변수, 함수들의 Reference 값들을 저장하는 객체이다.

### 2. Variable Enviroment Object

### 3. ThisBinding Object
