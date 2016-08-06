# json 에 대해 알게된 다양한 스크립트.

## json 객체에서 마지막 요소를 찾고 싶을 때.
```
var testJson = {test1: "111", test2:"222", test3:"333"};

var keys = Object.keys(testJson);
var last = keys[keys.length-1];

console.log(last);
```
