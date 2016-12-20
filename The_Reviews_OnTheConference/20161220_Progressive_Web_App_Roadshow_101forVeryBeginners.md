# Progressive Web App Roadshow 101 for Very Beginners  

### 시작하는 말...도창욱님    

Progressive Web App는 기술이 아니다. 캠페인의 일환이다.  
향후 Roadshow는 매번 주제가 달리 진행될 예정이다.  

### AMP 소개
* 조은님

AMP 사이트 : http://www.ampproject.org/ko  
amp 예제 사이트 : https://ampbyexample.com

- 모바일페이지를 빠르게 만드는게 목표.  
- 왜 AMP 인가? 보통 네트워크가 잘 되어있으면(한국..) 체험하기 어려우나 네트워크가 느린 곳에서는 너무느리다.
- AMP는 모바일에 국한된건 아니지만...모바일 지원하는 부분이 월등히 많다.
- amp의 시작은 html 태그에 amp 추가하고 head의 style태그에 amp-boilerplate 를 추가한다.
  (내부에 CSS코드를 넣는건 css호출 한번도 줄이기 위해...결국 최대한의 성능 향상을 위한 방안.)
- amp로 된 웹페이지를 하나 더 만드는 것. amp 자체는 난이도가 높지 않다. 특정 페이지에만 이라도 부분적 적용이 좋은 듯..
- 제약사항 : JS 코드 사용에 제한을 둠. 모든 리소스의 크기를 정적으로 지정해야함.

### service worker
* 도창욱님

- web worker :
 1. ui 스레드에서 분리되어 실행되어야 하므로 DOM에 접근 조작 불가.
 2. 자체적인 글로벌 스코프
 3. 일부속성과 api만 허가.  


- service worker :  
 1. 자바스크립트를 로컬에 설치하는 것.  
 2. 오프라인에서도 웹 어플리케이션이 기동하도록 훅(hook)을 포함.  
 3. 지속적인 백그라운드 프로세싱의 장점을 취하도록 하는 방법.  
 4. 기본적으로 https 에서만 동작함. (중간자 공격을 피하기 위함.) 대신, 127.0.0.1 이나 localhost로 테스트 가능.
 5. 네트워크 request 훔치기!

- 배워야할 것.
1. 직접 조작할 caches
2. 이벤트 생명 연장의 꿈 .waitUntil()
3. 네트워크를 통한 리소스

- Cache Storage : Promise 객체를 반환하는 캐시 저장소 인터페이스
- .waitUntil() : 이벤트가 종료되지 않도록...

샘플 사이트 : https://airhorner.com/


### 설치형 웹앱 만들기.

 - 어제나 동작가능한 웹앱.
 - 설치형은 반드시 웹매니페스트 작성해야함. (Web Manifest)
 - 인스톨 부추기기. 하단에 설치를 유도하는 인스톨 버튼을 노출.
