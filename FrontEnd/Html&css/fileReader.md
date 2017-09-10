### html5에서 파일을 읽어들여서 처리하는 방법

type을 file로 하는 input을 준비한다. 선택할 파일 형식을 accept로 지정할 수 있다.
```
<input id="file" type="file" accept=".json"/>
```

json의 경우 아래와 같이 데이터 형식을 맞춘 후 XXX.json 으로 파일을 생성한다.
```
{
  "code": "testCode1",
  "value": "testValue",
  "content": "detailContent"
}  
```

html5의 FileReader 를 이용하여 파일 업로드를 처리한다.
input file에서 json 파일을 선택하면, 해당 파일의 확장자를 확인하여 json 인지 체크하고
.json 이 아니라면 return.
이후 선택된 파일을 readAsText로 읽어들여서 처리한다.
```
(function(){
    
    function onChange(event) {
    		console.log(event.target.files[0].name);
    		var nameArray = event.target.files[0].name.split(".");
       
        if(nameArray[nameArray.length-1] !== "json"){
        	alert("확장자가 json 파일만 선택 가능 합니다.");
          document.getElementById('file').value = "";
          return;
        }

        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
    	console.log(event);
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        alert_data(obj.name, obj.family);
    }
    
    function alert_data(name, family){
        alert('Name : ' + name + ', Family : ' + family);
    }
 
    document.getElementById('file').addEventListener('change', onChange);

}());
```

### html5에서 json Object를 file download 하는 방법

업로드보다 훨씬 간단하다.
아래와 같이 다운로드 링크를 걸어둘 div를 준비한다.
```
<div id="download"></div>
```

다운로드할 json를 준비하고, encodeURIComponent 함수로 인코딩을 하면 끝.
여기서 인코딩이란 어느 시스템에서나 읽을 수 있는 ascii 문자로 변환해 주는 것을 말한다.

```
var obj = {
 	test : "test1",
  test1 : "test2"
}

var jsonFileName = "testJsonFile"; //파일 명
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
$('<a href="data:' + data + '" download="'+jsonFileName+'.json">Download Me</a>').appendTo("#download");
```


자바스크립트 인코딩 함수 관련 유용한 사이트 
http://realmind.tistory.com/191
http://programmingsummaries.tistory.com/162
