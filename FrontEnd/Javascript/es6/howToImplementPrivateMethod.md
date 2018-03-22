# How to implement private method in ES6

* Hika Maeng님의 페이스북 댓글 내용을 거의 그대로 복사/정리한 글입니다.  

1. private symbol을 이용하는 방법
- 클래스를 감싸는 클로저를 만들어 자유변수로 Symbol을 사용하면 일부러 인스턴스의 심볼을 꺼내지 않는 이상 참조불가.

```javascript　
const Test =(_=>{
    const method = Symbol(), field = Symbol();
　  return class{
　　    constructor(a){
　　　      this[field] = a; //private 필드생성
　　    }
　　    [method](){ //private 메소드
　　　      return this[field]++;
　　    }
　　    get a(){ //외부용 공개 메소드
　　　      return this[method]();
　　    }
　  };
})();
　
const test = new Test(10);
console.log(test.a);
```
　
test[field]를 조사하거나 test[method]()를 호출하고 싶어도 field, method를 그냥은 얻을 방법이 없음.  
다만 Object.getOwnPropertySymbols(test); 를 통해서 심볼을 빼낼 수 있음.  
　
2. 인스턴스마다 함수객체를 만들지 않는 해법이 있는데 WeakMap을 쓰는 방법   
(getOwnPropertySymbols 와 유사한 꼼수를 쓸 수 없음.)
　
```javascript　
const Test =(_=>{
    //private필드는 위크맵으로
　  const fields = new WeakMap();
　  //클래스 안에 정의할 수 없으니 밖에 만들어 사용
　  const method = self=>fields.set(self, fields.get(self)++);
　  return class{
　　    constructor(a){
　　　      fields.set(this, a); //위크맵은 키를 객체로 받음
        }
　　    get a(){
　　　      return method(this);
　　    }
　  };
})();
　
const test = new Test(10);
console.log(test.a);
```

이 경우는 결코 내부 속성인 a를 얻을 수 없고 method도 호출할 수 없으면서 인스턴스가 gc될때 위크맵도 날아갑니다.