# Graphics System & Normal Flow

css는 5세대언어로써 표현언어라고 한다.  

geometry calculate : 영역을 구분 (width..) 이게 더 어렵다.
fragment fill : 영역을 어떻게 채울것인가.  

css는 2.1까지만 공식 버전이 존재. 이후에는 모듈별 버전관리가 이루어 짐.  

## normal flow

### position

position : static, relative, absolute, fixed, inherit  
position속성이 static이나 relative일 때는 위치를 결정할 때 노말플로우 계산이 적용 

BFC, IFC, RP의 세 가지 기본적인 계산식이 사용됨  

1. Block Formatting Context는 줄 단위의 위치를 계산하는 시스템,

2. Inline Formatting Context는 한 줄을 가로로 채워가는 위치를 계산하는 시스템,

3. Relative Positioning은 노말플로우 하에서의 상대적인 위치를 처리하는 시스템

### 하나의 화면은 BFC와 IFC가 여러군데서 협조하며 그려진다.  

BFC하에서는 블록요소들이 줄단위로 공간을 차지하게 되고 IFC가 개입하면 다시 옆으로 채워지는 식으로 화면이 그려진다.  

## BFC/IFC/RP

블록요소에 들어있는 텍스트는 IFC로 작동하지만 공백문자에 따라 다르게 작동한다.  
블록요소의 크기는 부모를 계속 탐색하며 다른 블록요소의 크기를 찾는다.
DOM의 구조와 별도로 IFC/BFC관점에서 어떻게 그려지는지가 중요  
상대적인 위치를 주면 BFC/IFC로 그린 뒤에 상대적인 위치를 결정  

## Float

float 의 기본 값 4개 : left, right, none, inherit  

Float을 선언하면 새로운 BFC 영역이 시작됩니다.   
그리고 기존의 Normal flow위에 둥둥 떠있게 되는데, float가 있는 자리에는 IFC 요소가 오지 못하게 되어 IFC요소의 가드 역할을 하게 됩니다.  
Float 요소끼리는 Line box라는 원리에 따라 배치  

<img src="./ch1_float.png" width="80%" height="80%">

2번째(반투명 초록색) 요소가 float이므로, 그 때부터 새로운 BFC 계산식이 시작됩니다. Normal flow에 있는 요소(하늘색 박스) 위에 둥둥 떠있게 됩니다.  

Float은 IFC 요소의 가드로 작동되기 때문에 IFC요소인 텍스트가 Float 영역에는 못오고, 그 영역이 끝난이후 부터 그려지게 됩니다.  

<img src="./ch1_linebox.png" width="80%" height="80%">

실습코드  
http://www.bsidesoft.com/hika/s72/1/float2.html  

## OverFlow

visible, hidden, scroll, inherit, auto  
기본값은 visible입니다. auto도 visible로 취급되며 normal flow의 배치 알고리즘과 동일하게 작동  

visible이 아닌 경우(hidden, scroll)에는 새로운 BFC 영역을 만들게 되면서 Normal flow에 영향을 미치게 됩니다.  

일반적으로 BFC 박스의 초기값은 부모 블록 요소의 width입니다. overflow hidden 요소는BFC의 초기값은 그대로 갖되, 그 안에 들어오는 요소들의 크기는 float의 Line box가 영역을 계산하는 알고리즘에 따라 작동합니다.  

만약 overflow hidden의 요소의 width, height가 Line box 영역 안에 포함되지 않으면 그려지지 않습니다. 단, 그 다음의 요소는 hidden이 그려질 영역 다음에 그려지게 됩니다.  

실습코드  
http://www.bsidesoft.com/hika/s72/1/overflow.html  

# Box Model & Absolute Position

## box model


