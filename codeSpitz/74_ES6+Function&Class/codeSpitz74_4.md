# code Spitz 74 - 4

역할모델을 인식하면 OOA를 할 수 있다.
여기서 역할은 책임과 권한이 독립되어 적절하게 밸런스를 갖춘 상태

생소한 도메인으로 트레이닝해야 함.
(이런 도메인에서 객체후보를 추리고 추려진 객체끼리 상호작용을 어떻게 하는지 인식하는 훈련.)

### abstraction - 3가지
1. Categories : 공통점을 묶어서 그룹을 짓는 방법. 계층적인 구조화
어떤 기준점으로 categories 하느냐. 그 기준점은 역할 이다. 부모 클래스는 자식 클래스의 역할모델로써의 공통점을 가진다.
2. modeling : 실체와는 다르지만, 기억하고 싶은 것만 추려낸 것.
3. grouping : 임의로 만들어내는 케이스가 많음. 보통 추상화라면 grouping class만 만든다.(그래서 망함.)

즉, 1,2 방식으로 추상화 해야 함.

역할은 메소드로 표현된다. 행동으로 표현된다.

비즈니스영역 - 도메인 영역

도메인 패턴: 도메인만 가지고 순수한 값/객체들을 만들고 그들의 관계를 만들어라.

도메인은 아닌 모든 것 : native layer(webGl, canvas, dom 등...)

도메인 설계 시 도메인 layer만 가지고 만들어야 한다. navtive 는 배제해야 한다.

도메인 모델을 그리는 것 : Renderer (범용 렌더링 처리기)
도메인과 도메인을 연결 할 때 사용하는 것 : 프로토콜
앞으로 renderer 는 table renderer 와 canvas renderer를 만들 예정.

es6 에서는 클래스를 값으로 할당하라.
클래스는 반드시 클래스 문으로만 만든다.


39.25- 58.32 마이크 배터리 꺼진 시간.

객체지향에서 추상화를 잘하려면, 자식간에 공통점을 파악하는 눈이 높아야 함.

상속받는 class에서 constructor 내에서 this를 사용하려면 해당 this 위에 반드시 super()가 있어야 함



