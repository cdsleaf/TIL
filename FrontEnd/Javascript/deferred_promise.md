# 비동기 함수 처리를 위한 deferred promise 예제.

```
var testJson = {test1: "111", test2:"222", test3:"333"};

var keys = Object.keys(testJson);
var last = keys[keys.length-1];

console.log(last);

var r;

function testF(){
  var deferred = $.Deferred();
 setTimeout(function(){
    $.each(testJson,function(key, value){
     r = key;
    });
    
    if(r === "test3"){
      // 3.1) DEFERRED를 해결한다. (모든 done()...을 동작시킬 것이다.)
      deferred.resolve(r);
    }else{
      // 3.2) DEFERRED를 거부한다. (모든 fail()...을 동작시킬 것이다.)
      deferred.reject("HTTP error: ");
    }
    
  }, 2000);
  
  return deferred.promise();
}

var dataPromise = testF();

dataPromise.done(function(data){
  alert("We got data: " + data);
});

// 오류 함수를 등록한다.
dataPromise.fail(function(ex){
  alert("oops, some problem occured: " + ex);
});
```
