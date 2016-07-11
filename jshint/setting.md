# jshint 옵션 셋팅하기.

각 js 파일 내부에 직접 옵션을 줄 수 도 있지만, 프로젝트 단위로 옵션을 설정하는 편이 편하다.

프로젝트 최상위 경로에 '.jshintrc' 파일을 만들고 옵션을 부여 한다.

아래 옵션은 기본적으로 사용할만한 옵션을 추린 것이다. 각 프로젝트 성격에 따라 옵션이 추가되거나 삭제되면 될듯?

```
{
    "globals": {
      "CONTEXTPATH":false //read only
    },
        "strict":true, //모든 function 에 strict mode를 강제.
    "browser":true,   //document 같은 브라우저 api 사용 여부.
    "jquery": true,   
    "curly": true,    
    "eqeqeq": true,  // == 아닌 === 을 사용하도록 강제.
    "undef": true    // 선언하지 않은 변수는 사용 금지. 만약 다른js (공통js 같은..) 의 변수나 function 을 사용하는 경우라면, globals 에 등록한다.
    ,"devel":false  //console, alert 을 허용할지 여부. false 는 미허용
}
```

자세한 설명은 http://jshint.com/docs/options/
