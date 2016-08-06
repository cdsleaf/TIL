### 카멜케이스로 되어 있는 문자열을 sentence 로 변경해주는 정규식.

```
param.replace(/^[a-z]|[A-Z]/g, function(v, i) {
			return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
		});
```

```
var parma = abcDefg;

var result = param.replace(/^[a-z]|[A-Z]/g, function(v, i) {
			return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
		});
		
		
console.log(result); //Abc defg
```
