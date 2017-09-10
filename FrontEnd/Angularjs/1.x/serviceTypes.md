
 ## Angularjs Service Types 요약
 
 개념 : 서비스는 여러 종류가 있고, 항상 singleton 이다.
 
 1. constant
  - 상수를 지정한다.
  ```
  // script 
app = angular.module("app", []);

app.controller('MainCtrl', function($scope, fooConfig) {
  $scope.fooConfig = fooConfig;
});

app.constant('fooConfig', {
  config1: true,
  config2: "Default config2"
});

// html
<!DOCTYPE html>
<html ng-app="app">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  <body ng-controller="MainCtrl">
    config1: {{fooConfig.config1}}
    <br />
    config2: {{fooConfig.config2}}
  </body>
</html>
```
 
 2. value
  - constant와 유사하나, 최초 한번은 값을 변경 할 수 있다.
  - value를 가지고 계산할 수 없다.
  
  ```
  // script 
app = angular.module("app", []);

app.controller('MainCtrl', function($scope, fooConfig) {
  $scope.fooConfig = fooConfig;
  // 최초 한번의 변경이 가능
  angular.extend(fooConfig, {config3: "I have been extended"}); 
});

app.value('fooConfig', {
  config1: true,
  config2: "Default config2 but it can changes"
});

// html 
<!DOCTYPE html>
<html ng-app="app">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  <body ng-controller="MainCtrl">
    config1: {{fooConfig.config1}}
    <br />
    config2: {{fooConfig.config2}}
    <br />
    config3: {{fooConfig.config3}}
  </body>
</html>
```
 
 3. factory
  - 가장 일반적으로 많이 사용하는 서비스종류
  - 어떤 타입이든 return이 가능.
  - 단, 리턴된 오브젝트의 값을 변경하면 해당 팩토리의 인스턴스를 사용하는 모든 곳에 변경값이 반영된다 
    (이 문구는 잘 이해가 안됨. 아직 구현을 안해봐서 그런듯?
     아마 해당 인스턴스를 사용한 A 라는 곳에서 리턴된 값을 변경하면 동일하게 사용한 B, C, D에서도 동시에 변경값이 반영된다는 의미인듯?
     이건 구현하면서 테스트를 통해 확인하면 될 듯.!!)
  - Revealing Module Pattern 식으로 작성. -> 윤영식님 블로그에서 해당 부분을 클릭 하면 아래 링크로 연결.
    https://addyosmani.com/resources/essentialjsdesignpatterns/book/
    정말 멋진 eBook 이다. 시간이 된다면 모조리 읽고 싶다!!
    
 ```
// script 
app = angular.module("app", []);
app.controller('MainCtrl', function($scope, foo) {
  $scope.foo = foo;
});

// revealing module pattern 방식의 팩토리 서비스
app.factory('foo', function() {
  var thisIsPrivate = "Private";
  function getPrivate() {
    return thisIsPrivate;
  }
  return {
    variable: "This is public",
    getPrivate: getPrivate
  };
});

// html
<!DOCTYPE html>
<html ng-app="app">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  <body ng-controller="MainCtrl">
    public variable: {{foo.variable}}
    <br />
    private variable (through getter): {{foo.getPrivate()}}
  </body>
</html>
```

 4. Service
  - 생성자명칭(== 서비스명칭)을 넘기면 자동으로 new를 통하여 생성된다 
    즉, Factory 처럼 오브젝트의 리턴이 필요없다 
  - actory안에서 또는 service사용시 new을 여러번 하여도 반드시 한번만 인스턴스화 한다
    즉, Singleton 패턴으로 객체 하나만이 생성된다 
    
 ```
 // script 
app = angular.module("app", []);

// Service를 통해서 생성 
app.controller('MainCtrl', function($scope, foo) {
  $scope.foo = foo;
});

app.service('foo', function() {
  var thisIsPrivate = "Private";
  this.variable = "This is public";
  this.getPrivate = function() {
    return thisIsPrivate;
  };
});

// Factory를 통해서 생성 : MainCtrl 에서 foo 파라미터 값과 하위 로직을 foo2로 바꿔도 동일 결과 
app.controller('MainCtrl', function($scope, foo2) {
  $scope.foo = foo2;
});

app.factory('foo2', function() {
  return new Foobar();
});

function Foobar() {
  var thisIsPrivate = "Private";
  this.variable = "This is public";
  this.getPrivate = function() {
    return thisIsPrivate;
  };
}

// 또는 펑션을 넘길 수도 있다 : : MainCtrl 에서 foo 파라미터 값과 하위 로직을 foo3로 바꿔도 동일 결과 
app.controller('MainCtrl', function($scope, foo3) {
  $scope.foo = foo3;
});

app.service('foo3', Foobar);

// html 
<!DOCTYPE html>
<html ng-app="app">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  <body ng-controller="MainCtrl">
    public variable: {{foo.variable}}
    <br />
    private variable (through getter): {{foo.getPrivate()}}
  </body>
</html>
```

5. Provider
  - Provider는 factory의 큰형님 뻘이다 
  - $get fuction을 가지고 있어야 한다. 만일 Provider 명칭이 foo이고 controller에 inject될 때 실제는 $get function의 결과값이   inject되는 것이다. 왜 factory로 사용하면 간편한데 굳이 이렇게 할까?
  - 이유인즉슨, config function을 통해서 provide에 대한 환경설정을 할 수 있기 때문이다 
  - 예를 보자 
    1) thisIsPrivate 변수가 $get 펑션 밖에 위치한다 
    2) 따라서 setPrivate 메소드를 통하여 thisIsPrivate 변수값을 변경할 수 있다 
    3) 이런게 하는 이유는 우리가 필요로 하는 다양한 환경값을 바꾸어서 환경설정을 하고 싶기 때문이다
    4) Provider명칭이 'foo' 이므로 app.config 에서 'fooProvider' 명을 준다 
 
 Provider 는 정말 모르겠다....이건 써봐야 알듯.
```
// script 
app = angular.module("app", []);
app.controller('MainCtrl', function($scope, foo) {
  $scope.foo = foo;
});


app.provider('foo', function() {
  var thisIsPrivate = "Private";
  return {
    setPrivate: function(newVal) {
      thisIsPrivate = newVal; 
    },
    
    $get: function() {
      function getPrivate() {
        return thisIsPrivate;
      }

      return {
        variable: "This is public",
        getPrivate: getPrivate
      };
    } 
  };
});

app.config(function(fooProvider) {
  fooProvider.setPrivate('New value from config');
});

// html 
<!DOCTYPE html>
<html ng-app="app">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  <body ng-controller="MainCtrl">
    public variable: {{foo.variable}}
    <br />
    private variable (through getter): {{foo.getPrivate()}}
  </body>
</html>
```

 공부한 url
 http://mobicon.tistory.com/329 (윤영식님의 블로그 - 각 서비스별 예제 코드도 같이 있다!)
http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory
