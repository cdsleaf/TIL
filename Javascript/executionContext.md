# Execution Context (실행 영역)- 수정 중. 현재 내용은 es5 기준이며, ECMAScript2015 내용확인 하고 보완 필요.

참고 사이트  
https://muckycode.blogspot.kr/2015/03/javascript-execution-context-scope.html  
http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
http://smarttech.tistory.com/entry/Javascript-Execution-context%EC%99%80-Stack%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%A0%95%EB%A6%AC%ED%95%98%EC%9E%90
http://alnova2.tistory.com/967  
http://huns.me/development/1407

자바스크립트는 실행 단위로써 Execution Context 내에서 실행된다. 이는 자바스크립트 코드 블럭으로도 볼 수 있다.  
Executon Context는 "실행 가능한 코드의 형상화하고 구별하는 추상적인 개념"이라고 정의 할 수 있다.    
Executon Context는 최초에 Global Execution Context가 있고, 스크립트가 실행됨에 따라 각각의 context가 생성되고 없어진다.  
이러한 Active Context들은 생성된 순서대로 Stack 메모리에 삽입되게되고 해당 Stack은 FILO 에 따라 현재 실행중인 Context가 Stack의 최상위에 위치하게 된다.  

각각의 Context는  
```
LexicalEnviroment  
VariableEnviroment  
ThisBinding
```

총 3개의 부분으로 구성되어 있다. 그리고 위의 3개의 부분은 Object 형식으로 저장된다.  
다만 여기에서 해당 Object 는 자바스크립트의 Object 자료형은 아니며 직접 접근할 방법은 없다. (자바스크립트 엔진 내부에서 처리되는 Object)  

Executon Context를 만드는 단위는 Executable Code.
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

### 1. Lexical Enviroment : 코드안에서 자원을 어디에서 찾을 것인가?  

Lexicla Enviroment 타입은 내부적으로 두개의 프로퍼티 2개를 가진다.  

1. EnviromnetRecord : 지역에서 사용하는 변수나 함수형 식별자를 넣어두는 프로퍼티.
2. OuterEnviromnetReference : 함수가 중첩될 수 있다. 유효범위가 중첩될 수 있다는 의미. 이때 상위 유효범위에 대한 참조. 상위 Lexical Enviroment를 참조한다.
이 outer enviromnet reference를 통해 스코프 체인이 형성되고 outer enviromnet reference 값이 null로 설정되는 Global Enviromnet를 만날 때 까지 이어진다.

enviromnet record는 2가지 타입임.

```
Declarative
Object
```

//단순하게 키와 값이 맵핑된 형태.
```
DeclarativeEnviromnetRecord : {
  x : 10,
  y : 20
}

ObjectEnviromnetRecord : {
  bindObject : globalObject
}
```

### 2. Establishing an Executon Context : ThisBinding, Hoisting

Executon context를 만드는 단위인 Executable Code 3가지에 대해 Execution Context와 Lexical Enviroment 형태로 살펴보자.  

**지금부터 Execution Context 는 Ec 라는 약어로 표현.**

#### 2.1. Global Code

```
Global's Ec: {
  LexicalEnviroment : [globalEnv],
  VariableEnviroment : [globalEnv],
  ThisBinding : window
}
```
여기에서 globalEnv : 전역환경의 Lexical Environment

```
ObjectEnviromnetRecord : {
  bindingObject : window //변수를 window에서 찾는다는 의미.
},
OuterEnvironmentReferece : null //최상위 이므로 null
```

#### 2.2 Function Code

```
function sum(x,y){
  console.log(barr);

  var result = x + y;
  var barr = function(){
    console.log("barr")
  }

  function printResult(){
    console.log(result);
  }

  return printResult;
}

sum(10,20);
```

자바스크립트 엔진의 Execution Context 들을 저장하는 stack 내부에 전역 컨테스트가 있고 sum 함수가 실행 되면 sum 컨텍스트가 전역 컨테스트 위에 쌓인다.

**여기에서 ThisBinding 알아 보자.**

ThisBinding 객체는 해당 Executon Context의 this 키워드의 반환 값을 저장한다.  
Ec 에서 사용자가 유일하게 접근 가능한 부분이다. this 키워드는 현재 Context 가 참조하고 있는 객체를 가리키며 이 값은 어떻게 함수가 호출되었는지에 따라 달라진다.  

엔진은 함수 실행 시 함수 좌측에 뭔가가 있는지 확인 하고 없으면 전역으로 처리를 하며 있으면 좌측에 있는 객체를 바로보며 ThisBinding 에 해당 객체를 참조로 걸어둔다.  

sumFunctionEc.ThisBinding = null;  

ThisBinding이 null 또는 underfined인 경우 :  this = global  
"use strict" 모드에서는 :  this = null  

만약 foo.sum(10,20); 이렇게 호출할 경우  
sumFunction's Ec.ThisBinding = foo;  

**Creating local lexical environment**

앞서 sum 함수 선언 시 아래와 같이 thisBinding=null 로 생성됨.  
이때, localEnv.EnvironmentRecord : {}  이렇게 빈 상태로 생성됨.  

```
sumFunction's Ec = {
  LexicalEnviroment : localEnv
  VariableEnviroment : localEnv
  ThisBinding : null,
}

localEnv = {EnvironmentRecord : {}}
```

#### 2.3. Eval Code

-> 내용 추가 필요.  
Eval은 사용을 자제해야함. with와 더불어 비추천

### 3. Declaration Binding Instantiation : 실행 컨테스트 바인딩 초기화..

앞서 sum(10,20); 이렇게 인자가 입력된 상태로 sum이 실행되면,  

```
localEnv = {
  EnvironmentRecord : {
    x : 10,
    y : 20,

    printResult : function Reference, //호이스팅이 발생.
    result : undefined,
    barr : undefined //변수 선언식이라 나중에 해석됨.그래서 undefined.
  }
}
```

엔진이 자바스크립트 코드를 최초 읽어들이는 단계에서 printResult 함수가 호이스팅 되면서 EnvironmentRecord에 추가되고, printResult 참조가 셋팅됨.  
그래서 코드 상에서 foo() 함수 호출을 foo 함수가 선언보다 앞에 있어도 정상 실행되는 것임.  
sum(10,20); 이렇게 sum 함수가 호출되기 전에 브라우저 엔진이 이미 알고 있는 상태라는 의미.

```
foo();

function foo(){
  console.log("foo");
}
//콘솔 상에 "foo" 가 출력됨.
```    

하지만, barr 의 경우 변수 선언식이라 barr 라는 변수만 undefined 상태로 호이스팅 됨.  
그래서 sum 함수 상단의 console.log(barr); 은 콘솔상에 undefined 라고 출력됨.

이후에 sum(10,20); 이렇게 호출이 되면 그제서야 result = 10 +20; 이 실행 되고, barr 변수에 연결되는 함수가 실행됨.  
그래서 실제로 sum 함수가 호출되어야, localEnv 의 EnvironmentRecord.result 과 EnvironmentRecord.barr 에 값과 객체 참조가 저장됨.

```
localEnv = {
  EnvironmentRecord : {
    x : 10,
    y : 20,

    printResult : function Reference, //호이스팅이 발생.
    result : 30,
    barr : function Reference //sum 함수가 실제로 실행된 이후에 함수 객체 참조가 저장됨.
  }
}
```

### 4. Identifier resolution : 식별자와 묶여있는 값을 찾아가는 과정, 스코프 체인의 원리.

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

이제 console.log(a+b+c) 에서 a를 찾을 때 barEC 를 먼저 찾고 없으면 OuterEnvironmentReferece 를 통해서 fooEC 를 찾고 없으면 다시 OuterEnvironmentReferece를 찾아서 a의 찾아간다.  
이런식으로 스코프 체인이 실행된다.
반대로 fooEC 에서 barEC의 EnvironmentRecord 상의 값이나 객체를 찾을 순 없다. OuterEnvironmentReferece 로는 찾을 수 없으니까~

### 5. Closure - 자유변수를 간직한 코드 블럭

유효범위 밖에 있는 값의 참조를 간직하고 있는 코드블럭  

Function Object's Internal property => [[Scope]]  
(내부에서만 사용되고 개발자가 접근할 수 없는 프로퍼티는 [[ ]] 이렇게 표현함.)  
A lexical environment that defines the environment in which a Function object is executed.  

Creating Functon Object.  
```
functon sum(x,y){
  var result = x + y;
  function printResult(){
    console.log("foo:"+result);
  }
  return printResult;
}

var print = sum(10,20);
print();
```

위 코드에서 sum 함수가 실행 될 때, 아래와 같은 sum's EC가 생성된다.

sum's EC
```
LexicalEnviroment = {
  EnviromnetRecord : {
    x : 10,
    y : 20,
    result : undefined //이제 막 생성되었으므로 undefined 임.
    printResult : function Reference
  },
  OuterEnvironmentReferece : globalEC.LexicalEnviroment
}
ThisBinding : null
```

코드가 해석되면서, printResult 함수를 호이스팅함.  
함수선언 이므로, 함수식별자를 넣을거고 해당 식별자가 참조를 해야하므로 함수 객체가 생성됨. 이 함수객체를 메모리 어디엔가에 저장해 둬야 하므로,  
printResult 함수의 [[Scope]] 생성함. 해당 [[Scope]]에 sumEC의 LexicalEnviroment를 저장해둠.  
```
[[Scope]]: sumEC's LexicalEnviroment
```

아래 코드와 같이 sum 이 실행되고 나면 sumEC는 사라져야하지만, printResult 함수의 [[Scope]]에 참조가 걸려있으므로 사라지지 않는다.
```
var print = sum(10,20);
```

다음으로 print(); 가 실행되면, printResult 함수가 실행되면서 printResult's EC가 생성된다.  
이때, printResult's EC의 OuterEnvironmentReferece 에는 [[Scope]]에 저장되어 있는 걸 가져다 저장하게 된다.  

printResult's EC  
```
LexicalEnviroment = {
  EnviromnetRecord : {
    ...
  },
  OuterEnvironmentReferece : sumEC's LexicalEnviroment
}
ThisBinding : null
```

이러한 구조때문에 printResult's EC 의 EnviromnetRecord에 값이 없을 경우 OuterEnvironmentReferece 를 통해서 sumEC's LexicalEnviroment 내부의 값을 찾을 수 있는 것.

### 6. Variable Environment : Lexical Enviromnet의 쌍둥이..

LexicalEnviroment and VariableEnviroment components of an execution context are always Lexical Environment  
처음엔 Variable Enviroment 와 Lexicla Enviromnet 가 동일한 값.  

Variable Enviroment은 불변. Lexicla Enviromnet은 변경될 수 있다.  

with statement.  

with 를 사용하는 예제에서 Variable Enviroment와 Lexicla Enviromnet의 역할을 확인해보자.  
```
var foo = "abc";

with({foo:"bar"}){
  function f(){
    console.log(foo);
  }
  f();
}
```

이럴경우, with({foo:"bar"}) 이 부분 실행되면,  newEnv 라는 새로운 LexicalEnviroment가 생기면서 GlobalEc의 LexicalEnv : newEnv 로 셋팅된다.  

Global EC  
```
{
  ThisBinding : null,
  LexicalEnv : newEnv,
  VariableEnv : globalEnv
}
```

globalEnv  
```
EnviromnetRecord : {
  bindingObject : window
},
OuterEnvironmentReferece : null
```

newEnv  
```
ObjectEnviromnetRecord : {
  bindingObject : {foo: "bar"}
},
OuterEnvironmentReferece : globalEC.LexicalEnv
```

그래서 중간의 console.log(foo); 에서 foo를 찾을 때, Global Ec의 LexicalEnv 를 찾고 newEnv를 찾아가서 "bar" 를 콘솔에 출력하게 된다.  

with 구문이 종료되면 Global EC의 LexicalEnv가 VariableEnv의 globalEnv으로 대체 된다.  
```
{
  ThisBinding : null,
  LexicalEnv : globalEnv,
  VariableEnv : globalEnv
}
```
