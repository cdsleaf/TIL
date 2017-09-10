# ES6 Class

Class is not syntactic sugar.  

```javascript
var Dog = function(){};
Dog.prototype.bark = function(){
  return 'woof';
};

var Spitz = function(){};
Spitz.prototype = new Dog();
Spitz.prototype.bark = function(){
  return 'woof woof';
};

var dog = new Spitz();
console.log(dog instanceof Dog); //대체 가능
console.log(dog.bark()); //woof woof 상속 메소드에 대한 오버라이드
```

기존 ES5에서 프로토타입은 단일 체이닝 구조.  
그래서 오버라이드된 메소드의 경우 부모 클래스를 모르면 해당 메소드를 호출 할 방법이 없음.  

생성자에서도 반드시 부모 클래스를 하드코딩해야 생성자 체인 가능  
```javascript
var Parent = function(a){
  this.a = a;
};

var Child = function(a,b){
  Parent.call(this,a); //하드코딩 된 Parent...
  this.b = b;
};

```

기존의 this는 현재 주체가 되는 객체의 참조로서 동작하는 컨텍스트를 제공  
super 는 상위클래스에 대한 상대경로를 제공하는 새로운 컨텍스트를 제공  

다만, super를 es5로 polyfill 해보면 생성자, 메소드 두가지 경우에 따라 다름.

1. 생성자에서 사용

```javascript
const Parent = class{
  constructor(a){
    this.a = a;
  }
};

const Child = class extends Parent{
  constructor(a,b)
    super(a); //Parent.call(this,a);
    this.b = b;
  }
};
```
2. 메소드에서 사용

```javascript
const Parent = class{
  constructor(a){
    this.a = a;
  }

  test(){
    return this.a+'parent';
  }
};

const Child = class extends Parent{
  constructor(a,b){
    super(a);
    this.b = b;
  }

  static staticTest(){ // Child.prototype.staticTest = function(){return "static test";};
    return "static test";
  }

  test(){
    const v = super.test(); //Parent.prototype.test.call(this)
    return v+this.b+':child';
  }
};
```
