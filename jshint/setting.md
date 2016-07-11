# jshint 옵션 셋팅하기.

각 js 파일 내부에 직접 옵션을 줄 수 도 있지만, 프로젝트 단위로 옵션을 설정하는 편이 편하다.

프로젝트 최상위 경로에 '.jshintrc' 파일을 만들고 옵션을 부여 한다.

```
{
    "globals": {
      "CONTEXTPATH":false //read only
    },
    "strict":true,
    "browser":true,
    "jquery": true
}
```

자세한 설명은 http://jshint.com/docs/options/
