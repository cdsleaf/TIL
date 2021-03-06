# CSS Basic

## 선택자

### 선택자와 선언

CSS 기본적인 문법
- CSS를 적용하고자 하는 태그(선택자)
- 선택자에 적용할 디자인(선언)
```Html5
<style>
li(선택자) {color:red;}(선언)
</style>
```

선언하는 내용 끝에 세미콜론 붙이는 것을 습관화하는게 좋다

### 선택자의 종류

- 태그 선택자 : 모든 선택자에 디자인 적용(그냥 태그 이름)
- 아이디 선택자 : 고유한 하나의 태그에만 아이디 부여해서 디자인 적용(#아이디 이름)
- 클래스 선택자 : 여러 개의 태그를 클래스로 그룹핑해서 디자인 적용(.클래스 이름)

### 부모 자식 선택자

아래의 태그는 ul 밑에 있는 모든 태그를 선택합니다.  
```
ul li{
    color:red;
}
```
아래 선택자는 #lecture 바로 밑에 있는 li만을 선택합니다.
```
#lecture>li{
    border:1px solid red;
}
```
아래 코드는 ul과 ol을 동시에 선택합니다.
```
ul,ol{
    background-color: powderblue;
}
```

### 선택자 공부 팁

선택자 배우기 좋은 사이트
http://flukeout.github.io/#

### 가상 클래스 선택자

클래스 선택자처럼 행동하지만 클래스 선택자는 아닌 선택자(엘리먼트의 특성에 따라 클래스 선택자처럼 몇몇 태그를 그룹핑한다.)

hover, active, link, visited등(visited는 보안상의 문제 때문에 일부 속성만 사용 가능)
  1. :link - 방문한 적이 없는 링크
  2. :visited - 방문한 적이 있는 링크
  3. :hover - 마우스를 롤오버 했을 때
  4. :active - 마우스를 클릭했을 때
  5. :focus - 탭으로 focus가 되었을 때

style 태그에서 위에 있는 것이 우선순위가 높다.

## 속성을 공부하는 방법

웹페이지를 만들 때 가장 많이 쓰는 CSS속성 세 가지
1. 타이포그래피
2. 컬러
3. 박스모델

## 타이포그래피(Typography)

 활자 서체의 배열을 말하는데, 특히 문자 또는 활판적 기호를 중심으로 한 2차원적 표현을 가리킨다.

### font-size

폰트 사이즈 단위 3가지 : px, em, rem  
 - px는 절대적
 - em은 부모 태그의 영향을 받는 상대적인 크기
 - rem은 html 태그에 적용된 font-size의 영향을 받는다.

오늘날 사용자가 디자인을 변경할 권리를 부여하기 위해 rem이 권장된다.

### color

1. color name : 유명한 색상만 사용 가능 ex) h1{color:blue}
2. hex(16진수) : 16진수로 색상 지정 ex) h1{color:#FF0000}
3. RGB(빨,초,파) : rgb 3개의 색상 조합으로 표현  ex) h1{color:rgb(256, 0, 0)}

### text-align

text-align의 4가지 속성값
1. left : 왼쪽 정렬
2. right : 오른쪽 정렬
3. center : 가운데 정렬
4. justify : 양쪽 정렬

### font

font속성 정리
1. font-family : 글꼴 설정(사용자 컴퓨터에 글꼴이 없는 경우 대비 여러 개를 써주는게 좋다/
끝에 serif or sans-serif(장식 O or 장식 X)와 monospace(고정폭 or 가변폭)을 정해준다.
2. font-weight : 굵게와 같은 것을 설정
3. line-height : 문장 사이에 간격(px같이 절대적인 단위 사용 안하는게 좋다)
4. font : 위에 것들과 같은 것 한 번에 쓸 수 있는 속성(대신 순서 지키는 것이 좋다)

### 웹폰트

개발자가 선정한 폰트를 사용자가 가지고 있지 않을 때를 대비해 서버에서 해당 폰트를 다운받을 수 있게 하는 것
- 구글 폰트를 사용하면 공짜로 웹폰트 사용 가능
- 내가 가지고 있는 폰트를 웹폰트로 만들 때 web font generator를 사용하면 된다.

## 조화

### 상속

부모 엘리먼트의 속성을 자식 엘리먼트들도 물려 받는 것  
- 일괄적으로 어떤 속성을 적용할 때 일일이 자식들에 속성을 적용하는 것보다 부모 엘리먼트 하나에 적용시키는 것이 더 효율적이다.
- 상속되는 속성이 있고 안 되는 속성이 있음.

### 캐스케이딩

CSS : Cascading Style Sheet의 약자. Cascading이 css에서 핵심 개념에 해당  
Cascading : 웹브라우저,사용자,저자간의 조화를 이루는 것이 핵심(그러려면 우선순위가 필요)  
- 저자 > 사용자 > 웹브라우저
- 스타일속성 > id선택자 > 클래스선택자 > 태그선택자 => 이 방식이 작업에 있어서 효율적이다./태그 선택자로 갈수록 포괄적, 반대로 갈수록 구체적
* !important를 기술하면 그 어떤 선택자보다도 우선순위가 가장 높아진다.

## 레이아웃

### 인라인 vs 블럭 레벨

태그들 중 화면 전체를 차지하는(한 줄을 차지하는)태그는 블럭레벨 엘리먼트  
화면 일부를 차지하는(딱 자기 크기만큼 차지하는)태그는 인라인 엘리먼트라고 한다.  
각 태그마다 지정되있는 속성이 있는데 이것은 style 태그에서 display속성을 바꿔주면 변경할 수 있다.
ex) display:inline, display:block

### 박스모델

박스모델 : 태그의 부피와 태그간의 여백등을 결정.
- 마진 : 태그와 태그 사이의 여백.
- 패딩 : 태그와 태그를 감싸는 테두리 사이의 여백
* 인라인 엘리먼트는 width, height 값 무시

### box-sizing

기존에 엘리먼트의 크기를 지정할 때 기준은 컨텐츠 기준이였다. 그래서 보더나 패딩값이 더해지면 개발자가 예측한 값과 다르곤 했다.  
그래서 box-sizing:border-box라는 속성이 탄생했는데 이렇게 하면 보더값까지 계산해서 엘리먼트 크기를 정한다.  
요새는 아예 모든 태그에 이 속성을 지정하고 코딩을 시작하는 경우가 많다.

### 마진 겹침 현상

마진겹침현상 세 가지  
1. 위,아래 엘리먼트들의 마진이 겹칠시 둘 중 마진이 큰게 둘 사이의 마진이 된다.
2. 부모,자식 엘리먼트 사이에서 부모의 시각적 요소가 없어지면 부모,자식 마진 중 마진이 큰 쪽이 자식 마진
처럼 사용된다.
3. 위,아래 엘리먼트들이 있을 때 위의 시각적 요소가 없어지면 위,아래 중 마진이 큰 쪽이 아래 마진처럼 사용된다

### 포지션

엘리먼트의 위치를 정하는 속성 position 속성값 4가지  
1. static(기본값) : 움직이지 않고 정적인 상태
2. relative : 부모 엘리먼트를 기준으로 상대적으로 움직인다
3. absolute : position값이 relative인 부모를 기준으로(없다면 웹페이지의 가장 가장자리 기준) 움직인다.  
자식의 위치값이 absolute이면 부모와의 관계가 끊기고 그래서 자신의 크기가 딱 컨텐츠만 해진다.  
그리고 값을 아예 없애면 원래 위치로 돌아간다.  
4. fixed : 스크롤을 움직여도 지정된 위치에 고정된다.
* absolute와 마찬가지로 부모와의 관계가 끊기고 크기는 자신의 컨텐츠만 해진다.

### flex

(화면 전체를 사용하는 태그를 'Block-element' 라고 한다.)

flex : 레이아웃을 좀 더 쉽게 짜기 위해 고안됨. item과 그것을 담을 container가 필요.  

- 컨테이너의 속성에 display:flex;를 하는 것부터 시작
- 여러 속성들  
flex-basis : 크기 지정,    
flex-grow : 아이템들이 컨테이너를 나눠갖는 비율 결정,   
flex-shrink : 화면이 작아질 때 줄어 드는 비율 결정,    
flex-diretion : 컨테이너 방향 결정(row: 좌우로 나열되는 것 처럼 보임, column: block 상태와 유사),  
flex-wrap : 아이템 크기가 컨테이너 크기보다 크다면 줄바꿈,    
align-items : 수직 관련 정렬,   
justify-items : 수평 관련 정렬,  
align-content : 아이템을 그룹핑해서 정렬,  
align-self : 특정 아이템만 크기 다르게,  
flex : flex-grow + shrink + basis, order : 아이템의 순서 바꿈.  

- holy grail layout : 이런 형태의 레이아웃을 flex를 통해 쉽게 만들 수 있음
```
<header>
<section> - <nav>,<main>,<aside> 수평 정렬
<footer>
수직 정렬
```

### media query

다양한 미디어의 크기에 따라 웹페이지를 다르게 할 수 있는 기술(반응형 디자인의 핵심)  
예) 최대 ...px까지는 혹은 최소 ...px부터는 ~~~을 적용한다
```html
<style>
        @media (max-width:600px){
            body{
                background-color: green;
            }
        }
        @media (max-width:500px){
            body{
                background-color: red;
            }
        }
        @media (min-width:601px){
            body{
                background-color: blue;
            }
        }
</style>
```
### float

본문에 이미지를 삽입하기위한 용도.  
````html
<img style="float:left">
<p>
</p>
<p>
</p>  
```
위와 같은 경우에 p 태그의 스타일에 clear:both 를 추가하면 img 태그의 float 효과를 clear 시킨다는 의미임. 이때, both는 float 의 left, right 둘다 clear 시키겠다는 것.  

### 다단(multi column)

- 다단을 만들때 column-count: 숫자
```html
<style>.column{text-align: justify;column-count: 4;/* column-width: 200px;*/column-gap:30px;column-rule-style: solid;column-rule-width: 5px;column-rule-color: red;}h1{column-span: all;}</style>
```

## 그래픽

### 배경(background)

background : 엘리먼트의 배경에 이미지나 색깔 등을 지정할 수 있는 속성  
- background-color : red  (색깔 지정)   
- background-image : url("bg.png") 이미지 지정(배경이 투명한 이미지를 쓰면 color와 같이 쓸수있음)  
- background-repeat : repeat, no-repeat, repeat-x, repeat-y  반복에 관한 설정,   
- background-attachment : scroll, fixed 스크롤 내릴 때 배경도 같이 내릴지 안내릴지  
- background-size :  100px 100px or cover or contain  크기에 관한 설정(cover, contain : 손실있어도 꽉차게, 꽉안차도 손실없게),
- background-position : left top  or x% y% or x y 위치 결정  
background : 축약형
