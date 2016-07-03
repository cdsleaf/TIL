## Bower Install

먼저 npm이 설치 되어 있어야 한다. 이후 아래와 같이 Global 로 설치한다.
```
npm install -g bower 
```

## Bower 에서 proxy 설정하기

~/.bowerrc 파일 만들고 아래 설정 추가.
```
echo "" > .bowerrc

{
  "proxy":"http://proxy.company.com:8080",

  "https-proxy":"http://proxy.company.com:8080",

  "strict-ssl": false
}
```

이후. bower init  으로 bower.json 을 만들어야 함.

한번 만든 후 install 시 --save 옵션을 같이 추가 하면 자동으로 bower.json에 설치버전을 추가해준다.

bower install 위치는 bowerrc 파일내에 아래와 같이 위치를 지정하면 변경 가능.

```
"directory": "git/project name/src/main/webapp/bower_components",
```

```
{
	"cwd": "git/bus_server_web_app_manager_plan",

	"directory": "src/main/webapp/bower_components",

	"proxy":"http://proxy.company.com:8080",

	"https-proxy":"http://proxy.company.com:8080",

	"strict-ssl": false,

	"json": "bower.json"
}
```

Grunt 또는 gulp에서 
wiredep task를 넣어두고, watch 옵션을 추가하면

 bower로 라이브러리 추가 시, js 와 css가 자동으로 index.html에 추가된다.
 //Automatically inject Bower components into the app
 ```
 <!-- bower:js -->
 <!-- endbower -->
 
 <!-- bower:css -->
 <!-- endbower -->
```
