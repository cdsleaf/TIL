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
input file에서 json 파일을 선택하면, 
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
