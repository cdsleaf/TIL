# HTML Basic

## tag 의 중첩 과 목록


1. ol : ordered list  
2. ul : unordered list
3. li : list  

```
<ol>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ol>

```

## 선택

###  DropdownList
'multiple' 옵션을 줄 경우, 다중 선택이 가능함.
```
<select name="color" multiple>
  <option value="red">붉은색</option>
  <option value="black">검은색</option>
  <option value="blue">파란색</option>
</select>
```

### radio botton, checkbox
 - type이 radio 일 경우는 단일 선택  
 - type이 checkbox 일 경우는 다중 선택

```
<p>
  <h1>사이즈(다중선택)</h1>
  95 : <input type="checkbox" name="size" value="95">
  100 : <input type="checkbox" name="size" value="100" checked>
  105 : <input type="checkbox" name="size" value="105" checked>
</p>
```


## meta

meta태그 직접적으로 웹페이지에 표현되진 않지만 웹페이지를 설명해주는 태그
```
<meta charset="utf-8">
<meta name="description" content="...">
<meta name="keywords" content="코딩,coding">
<meta name="author" content="cdsleaf">
<meta http-equiv="refresh" content="30">
```
 - charset : 이 문서를 ...방식으로 저장해라(인코딩) <-> 이 문서를 ...방식으로 읽어라(디코딩)
 - content : 내용이 검색엔진에서 웹페이지의 설명에 쓰일 경우가 많다.    
 - keywords : 검색엔진에서 검색할 때 사용되는 키워드를 설정
 - author : 만든이 이름 설정
 - http-equiv="refresh" : 웹페이지가 ...초마다 새로고침됨. 잘 사용되진 않음.


## 파일 업로드

파일을 업로드할 때 필요한 html 코드
```
<input type="file" name="...">
```
파일을 업로드하는 코드가 있다면 form태그의 속성은 method="post" enctype="mutiple/..."이 되야한다.

## 모바일 지원 (viewport)

모바일에서 웹페이지크기를 최적화시키는 방법
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
웹페이지의 폭을 장치의 폭으로 설정하고 초기화면을 줌 안한 상태로 맞춘다는 코드.  
PC가 아닌 장치에서의 웹페이지 크기를 최적화하는 코드.

## iframe : 웹페이지 안에서 다른 웹페이지를 불러올 수 있는 기법
 - 아래와 같이 태그 사용
```
 <iframe src="...">
```
 - 유튜브의 공유하기가 이 방식을 사용
 - 하지만 불러온 웹페이지의 악성코드 등이 자신의 웹페이지에 전파될 수 있는 보안적 취약점이 있음.
 - 그래서 HTML5부터 sandbox라는 속성 도입(자바스크립트나 폼태그와 같이 위험할 가능성이 있는 기술들은 불러올 때 원천적으로 차단)
 ```
  <iframe src="..." sandbox></iframe>
 ```

## Html5 video tag

HTML5부터 웹브라우저 자체적으로 비디오 삽입가능.  
- 방법 : 'img'태그 처럼 자체적인 src속성이 있지 않고 'video'태그 안에
```
<video width="400" controls>
  <source src="videos/small.mp4">
</video>
```
를 삽입해줘야 한다
- 브라우저마다 지원하는 동영상 포맷이 다르기 때문에 여러가지 확장자의 비디오 파일을 기술하면 브라우저가 자신에게 맞는 형태의 동영상을 선택한다.
- 'video' 태그에 controls라는 속성을 추가하면 재생, 소리 등을 제어할 수 있는 컨트롤이 나타난다.

## Can I use

HTML5같이 웹 최신 기술을 웹페이지에 사용하면 예전 버전 웹브라우저를 사용하는 사용자같은 경우는 사용할 수 없는 호환이 안되는 문제가 생길 수 있다.  
이런 최신 기술들을 사용해도 되는지에 대한 의사결정에 도움을 주는 사이트 caniuse.com  
어떤 기술들이 각 웹브라우저에서 지원되는지, 전세계적으로 얼마나 이 기술을 사용할 수 있는지 알 수 있다.

## Html5의 입력양식

input types

 - color : 컬러선택
 - date : 날짜선택
 - datetime : 국제표준시
 - datetime-local : 로컬표준시
 - email : 이메일 정보만 입력가능하게 강제
 - month : 날짜의 월
 - number : min, max
 - range : 슬라이드를 움직이면서 입력 가능하도록
 - search : 검색입력창 (특별한 기능은 없으나, 웹접근성 측면에서 추천)
 - tel : 전화번호 관련
 - time : 시간
 - url : url 정보
 - week : 날짜의 주

### Html5 입력양식의 속성들

- 자동완성기능 :
```
<form autocomplete="on">
```
을 하면 예전의 입력받았던 값들을 브라우저가 기억해 다음에는
자동으로 완성해준다. (부분적으로 이 기능을 끄고 싶다면 해당하는 input태그의 autocomplete값을 off하면 됨)
- 자동포커싱기능 : 웹페이지가 떴을 때 포커싱이 갔으면 하는 부분이 있다면 그 input태그에 autofocus속성 추가

```HTML5
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <form action="login.php" autocomplete="on">
            <input type="text" name="id" placeholder="id를 입력해주세요." autofocus>
            <input type="password" name="password" autocomplete="off" placeholder="비밀번호를 입력해주세요.">
            <input type="submit">
        </form>
    </body>
</html>
```

### Html5 입력 값 체크

입력값체크(유효성 검사) : 사용자가 입력한 값이 올바른지 검사하는 기능
- 필수적으로 입력해야 하는 부분 : 속성 required 추가
- 패턴에 맞게 입력해야 하는 부분 : 속성 pattern=에 정규 표현식 추가
- 정규표현식 : HTML과는 다른 프로그래밍 언어([a-zA-z] : 알파벳 하나, . : 아무거나, + : 하나 이상, [0-9] : 숫자하나

-> 유효성 검사는 사용자가 입력하기 쉽게 하기 위한 장치로 인식해야지, 검사를 통과한 값들을 무조건적으로 신뢰해서는 안됨.
