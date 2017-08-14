ref site : http://hacks.mozilla.org/category/javascript/page/2/

# ES6 Iteraor & for-of

### 배열을 순회하는 방법

1. for( ; ;) - ES5 이전의 전형적인 for 문
2. sampleArray.forEach(v=>console.log(v)); - 중간에 break나 continue 사용 불가
3. for(var a in sampleArray) console.log(sampleArray[a]);
4. for(var a of sampleArray) console.log(a);

####그럼 3과 4를 비교해보자

##### 3. for-in

1. 루프 구문이 배열 요소들만을 순회하지 않는다. 확장속성(expando)들도 순회하여 예상치 못한 동작을 야기할 수 있음.뿐만 아니라 배열의 프로토타입 체인(prototype chain)도 순회 가능
2. 어떤 환경에서는 이 루프의 순회 순서가 무작위
3. **일반 Object의 문자열 키(key)를 순회하기 위해 만들어진 문법**이기에 Array를 다루기엔 적합하지 않음.

##### 4. for-of

1. for-in의 단점 배제
2. forEach와 달리 break, continue, return을 함께 사용할 수 있음. 즉, 중간에 개발자가 의도한 대로 멈추거나 진행이 가능
3. 유사배열에서도 사용가능.(ex, Dom의 NodeList), Map, Set 에서도 사용가능. - 사실상 모든 컬렉션 클래스를 지원 함.

```javascript
//Map 에서 key 와 value를 별도로 분리(destructuring).
for (var [key, value] of Map) {
  console.log(key + "'s phone number is: " + value);
}
```

Object 내부 속성을 순회 하고 싶다면, for-in을 이용하거나 아래와 같이 Object.keys 를 사용한다.

```javascript
// 객체의 모든 속성을 콘솔에 출력합니다
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```
```
[Symbol.iterator]()
```
메소드를 제공하는 객체를 이터러블 객체 (iterable object)라고 부른다.  
for–of 루프는 컬렉션(collection)에 있는
```
[Symbol.iterator]()
```
메소드 호출로 시작합니다.  
이 메소드는 새로운 이터레이터 객체를 리턴합니다.  
.next() 메소드를 제공하는 객체는 모두 이터레이터 객체입니다.  
for–of 루프는 .next() 메소드를 반복적으로 호출하면서 컬렉션에 포함된 객체들을 순회합니다

아래 두개의 코드블럭은 동일한 동작을 함.
```javascript
for (VAR of ITERABLE) {
  STATEMENTS
}
```
```javascript
var $iterator = ITERABLE[Symbol.iterator]();
var $result = $iterator.next();
while (!$result.done) {
  VAR = $result.value;
  STATEMENTS
  $result = $iterator.next();
}
```
