ref site : http://hacks.mozilla.org/category/javascript/page/2/

# ES6 Generator

코드를 간결하게 만들고 콜백 지옥을 제거하는 새로운 문법  

아래 코드는 Generator의 예시
```javascript
function* quips(name) {
  yield "hello " + name + "!";
  yield "i hope you are enjoying the blog posts";
  if (name.startsWith("X")) {
    yield "it's cool how your name starts with X, " + name;
  }
  yield "see you later!";
}
```

1. 제너레이터함수는 function* 키워드로 시작
2. 함수내부에 yield 구문이 존재. return 과 유사하나, 단 한번만 호출되는 return과 달리 yield는 여러번 실행됨.(제너레이터의 실행을 멈췄다가 다시 시작할 수 도 있음)
-> 즉, 스스로 실행을 멈추고 다시 시작할 수 있음.

```javascript
> var iter = quips("jorendorff");
  [object Generator]
> iter.next()
  { value: "hello jorendorff!", done: false }
> iter.next()
  { value: "i hope you are enjoying the blog posts", done: false }
> iter.next()
  { value: "see you later!", done: false }
> iter.next()
  { value: undefined, done: true }
  ```

기술적 관점에서, 제너레이터의 yield 구문이 실행될 때, 제너레이터의 스택 프레임 (stack frame: 로컬 변수, 인자, 임시 값, 제너레이터 코드의 실행 위치)은 스택에서 제거됩니다.  
하지만, 제너레이터 객체는 이 스택 프레임에 대한 참조를 (또는 복사본을) 유지하고 있다가 다음번 .next() 호출 때 재활성화 시켜서 실행을 계속합니다.  
**제너레이터는 쓰레드가 아니다, 이터레이터 일 뿐.**  

 모든 제너레이터는 .next() 코드와 ```[Symbol.iterator]()``` 코드를 내장(built-in)하고 있음.

아래 코드를
```javascript
 // 1차원 배열 'icons'를
// 'rowLength' 길이의 배열 여러개로 나눕니다.
function splitIntoRows(icons, rowLength) {
  var rows = [];
  for (var i = 0; i < icons.length; i += rowLength) {
    rows.push(icons.slice(i, i + rowLength));
  }
  return rows;
}
  ```
  이렇게 표현할 수 있다.

```javascript
function* splitIntoRows(icons, rowLength) {
  for (var i = 0; i < icons.length; i += rowLength) {
    yield icons.slice(i, i + rowLength);
  }
}

let testArray = [1,2,3,4,5,6,7,8,9];
for(let item of splitIntoRows(testArray, 3)){
  console.log(item);
}

```
