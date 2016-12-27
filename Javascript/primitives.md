# Primitives

자바스크립트의 Primitive Type > 총 6가지.    

Boolean / Null / Undefined / Number / String /
Symbol (ECMAScript 6 에 추가됨)

Primitive type is immutable value.  
they hold a reference to their (primitive) values.  

 if you have a memory location referenced to by say, var x = 1; having the content 0000000000000001 then "immutability" implies that we can't change the memory lcoation's contents to say, 0000000000000011.If this is the case then, if I write var x=1; x=2; everytime JavaScript will provide me with a new memory location and garbage-collect the older unattended one

https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/  
http://stackoverflow.com/questions/16115512/understanding-javascript-immutable-variable  

현재까지 결론은, 자바스크립트의 경우 immutable 이란 의미는 해당 값을 변경 못한다.
즉, 아래와 같이 x의 값을 변경 시, 기존 1 이 저장된 메모리공간의 데이터(1) 이 변경되지는 않고(immutable), 새로운 숫자 2가 저장될 메모리 공간이 stack 내부에 새로 확보되며 해당 메모리 공간의 참조값을 바라 보게 된다. 다만 값이 저장되어 있는 메모리 공간의 참조값을 직접 변경하거나 해당 공간내부의 저장된 값 자체 수정은 불가능하다.  
```
var x = 1; x=2;
```
