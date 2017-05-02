# 2017. css Deep-Studying.

## Box Model

Margin > border > padding > contents  
실제 영역은 border~contents 까지. margin은 box 영역외.

1. contents : box-sizing:content-box  // width, height, min-width, max-width
2. padding : box-sizing:padding-box // width, height
3. border : box-sizing:border-box // width, height

## Normal Flow

DEFINITION :
```
Normal flow is the way that elements are displayed in a web page in most circumstances.   
All elements in HTML are inside boxes which are either inline boxes or block boxes.  
```

Block :세로, Inline :가로  

1. BFC (BlockFormattingContext) : block 요소를 담을 수 있는 일종의 컨테이너.

Create : BFC가 생성되는 조건들.
root  
float != none  
display == inline-block, table-cell, table-caption  
overflow != visible  
flex box  

Containing  :  자식 엘리먼트는 모두 BFC에 포함된다는 말...새로운 BFC 내부는 미포함.
A block formatting context contains everything inside of the  
element creating it that is not also inside a descendant  
element that creates a new block formatting context.  

2. IFC (InlineFormattingContext)

## pseudo-elements

아래에서 after 가 pseudo-elements. 있지만 없는 것.  
여기에서는 .boxA의 마지막 영역에 pseudo-element 를 만들어 붙인다는 의미.  
태그도 없고 아무것도 없지만. 아무튼 존재함. 그리고 content가 존재.평문 텍스트만 넣을 수 있음  
중첩된 엘리먼트를 만들순 없다.  
```
.boxA:after {content: "",
                  display: block;
                  clear: both}
```

## Media query

1. Media Type

css : all, print, screen, speech  

2. Display Area vs Device

3. Media feature : Media query 에서 사용할 수 있는 속성.
