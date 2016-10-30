# 자바스크립트 최적화

## 1. 자바스크립트 엔진의 최적화 기법 - JITC, Adaptive Compilation

http://meetup.toast.com/posts/77

아래 내용은 위 주소에 포스팅된 내용의 마지막 결론 부분을 그대로 복사해 넣은 것 입니다.

 * Hotspot이 별로 없는 고전적인 JavaScript 프로그램들에는 interpreter가 JITC보다 효율이 좋다.
 * 최근 많이 사용되는 compute-intensive한 JavaScript 프로그램들에는 JITC가 좋다.
 * 두 가지 성향의 코드에 대한 성능을 모두 만족하기 위해 최근 엔진들은 adaptive JITC를 채용한다.
 * Adaptive JITC는 type profiling을 수행하므로, 변수의 type이 변하지 않는다면 높은 성능을 얻을 수 있다.

마지막 항목은 바꿔 말하면, 자주 반복되는 loop 안에서 수행 도중 변수의 type이 변하게 되면 많은 페널티가 발생하게 된다는 것입니다. 실제로 코드를 구현할 때 그런 상황은 거의 없겠지만, 알아두면 언제든 유용할 것입니다.

JavaScript 엔진을 연구하는 사람들은 그 놈의 dynamic typing 때문에 많은 고생을 합니다. 위에서 설명한 Adaptive JITC에서의 type profiling 뿐만 아니라, 미리 type을 유추하는 type inferencing 기법, 변수 선언 시 type을 명시적으로 annotation하여 엔진에서 고정된 type으로 변수를 활용하게 하는 asm.js 등 dynamic typing language라는 성능 최적화의 가장 큰 벽을 뛰어넘기 위한 연구가 가장 활발히 이루어지고 있습니다.

만약 성능이 좋은 JavaScript 코드를 만들고 싶다면, JavaScript 코드를 작성할 때 마치 C나 Java처럼 **static typing 언어라고 생각하세요.**
특히 array가 중요한데, **하나의 array에는 하나의 type만 넣어주는 것이 최고입니다!**
