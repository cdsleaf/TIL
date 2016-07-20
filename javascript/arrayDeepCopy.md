
# 레퍼런스 참조 없는 배열 복사

자바스크립트에서 배열을 복사할 때, 아래와 같이 복사하면 
```
var a = [0, 1, 2, 3, 4, 5];
var b = a;
```
배열의 주소값이 복사 되어 a의 값을 변경 시 b에서도 변경된 값을 참조하게 된다.

참조 복사가 아닌 배열 객체 자체를 복제하고 싶다면, 아래와 같이 slice 함수를 사용한다.

```
var b = a.slice(); //indexOf 혹은 contains로 검색 가능
```

다른 방법으로는 underscore.js 의 api를 통해 deep copy를 할 수 있다.