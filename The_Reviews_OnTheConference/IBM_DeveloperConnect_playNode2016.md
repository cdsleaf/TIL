# 개발자와 IBM, 새로운 관계의 시작 

정창우 상무 한국IBM연구소 및 클라이언트 센터 총괄.

 - 앞으로는 cloud platform, Congnitive Solution  

 - 새로 오픈! 좀 더 개발자 친화적으로 가겠다.  
  https://developer.ibm.com/kr/, Meetup (오프라인 만남)  

 - 스킬 아카데미
 1. IBM Watson Academy
 2. Udacity

- 스마트 캠프 Global Enterpreneur Program
  전세계 스타트업과 경쟁하고 투자 받을 수 있는 캠프 진행.

# Growing up woth Node.js

-  2009: how it began  
비동기 IO의 필요성.
처음엔 4명의 개발자로 시작.  
초기엔 커뮤니티에서 4명의 개발자는 독재자라는 여론...  
그러나 상표권자와 4명의 코어 개발자는 달가워하지 않음..  

-  Node.js vs io.js  
이후 foundation 생성 이후로 많은 사람들이 참여 시작.(joyent, IBM 등)
io와 node.js가 합쳐져서 node.js로 함께..

- 2015년은 커뮤니티에 중요한 해.
컨트리뷰터의 증가.(242명 증가)  
워킹그룹은 14 (디버깅, 웹사이팅 등..)  
워킹그룹은 평범한 사람들이 구글 행아웃으로..대단한건 없다.  

- 예측가능한 릴리즈 스케쥴로 안전성..

- what happened in 2016
  1. ES7
  2. inspector built in
  3. ibm과 논의 후에 Express가 노드 재단에 합류함.  


- plan 2017  
    1. choice of different javascript engines
    (다양한 자바스크립트 엔진 지원. 구글외 등등의 엔진을 지원하도록.
    노드는 서버에서 구동하기에 기존의 브라우저의 엔진과는 달라질 수 있다.그래서 다양한 엔진 지원을 계획.  )
    2. es 모듈 지원
    3. Web assembly
    (복수개의 언어를 지원. 노드는 웹브라우저와 서버간의 가교역할이다.)    


- 로켓 개발자. 대단한 사람이 아님. 노드는 오픈소스. 누구나 참여가능.

# Let's Talk about Watson

- text to speech by watson  
목소리 톤 조절 (brigten 60%), 감정표현처럼 들리는 억양 표현이 가능해 보임.  

- 아직도 사람들은 과거의 2011년 show 의 watson이 아님. 5년간 발전. -> welcome to world with watson  

- watson은 4개로 정의.
  1. cloud
  2. content - 정형, 비정형, 음성, 비디오 등.. 데이터를 다루는게 왓슨.
  3. compute - content를 계산하는 compute
  4. conversation - 사람과 의사소통을 통해 사람을 도우는 서비스.


- watson APIs  
10개 중 8개가 언어쪽에 특화되어 있음.  
다양하게 사용되는 왓슨. 대학의 어느교수가 9번째 조교로 Gill watson 이라는 인공지능 조교를 셋팅. 학생들에게는 비밀ㅎㅎ
Gill의 reponse time 이 짧다. 답변이 정확하다.
조교 만족 survey 에서 최상. 어느 학생이 데이터 신청도..
유머러스한 응답도..

  스탠포드 대학생이 만든 무료 앱 - DONOTPAY.CO.UK 세계최초의 변호사 앱 이라는...주차 딱지 받았을 때 항소장 작성..  
  이 앱으로 항소처리 완료 된게 19만건.  
  만약 비행기 지연에 따른 보상도 대응. 월세 관련 집주인과 의 분쟁도..이렇게 점점 사업영역을 확장..

  그외 업체들도 고객응대 또는 내부 서비스등으로 상용화.

- watson APIs 상용화한 국내 사례 소개 - swizzle Lab  
데이터의 80%는 비정형. 아직도 비정형 데이터 분석은 사람이..
댓글들을 AI로 분석. 온라인상의 유저들의 대화를 분석. 키워드 단위로 쪼개서 호감도 유형 사용성들을 분석 후 담당자에게 의미 있는 내용을 전달 하여 담당자의 시간을 절약.  

  아직은 영어 유럽언어에 치중.  
  스위즐랩스의 차별화 : 아시아 & 자동화.  
  팀원을 구성 시, 다양한 문화와 기능이 섞여 있도록.

  텍스트 분석 기반 마켓 리서치 프로세스.  
  처음부터 솔루션화 하지 않고. 데이터 분석 기반 리서치 컨설팅 서비스에 집중. deep diving

  case study
  1. 게임의 부정적인 부분을 분석 및 사용자들의 불만 반응을 분석
  2. 교육적인 부분.
  3. 금융 - 보배드림에서 남초임에도 와이프 키워드가 많았다. 할부금융에서 여성에게 좀 더 포커싱 또는 부부동반 서비스 등을 제안.

# 15분 만에 뚝딱 IBM Bluemix 맛보기.

- what is Bluemix  
  1. 컴퓨팅 환경, 다양한 서비스 카탈로그 등을 선택 가능.
  2. DevOps, integration and API Management 등을 선택.


- Bluemix에서 Node.js로 채팅 앱 개발  
pass 에서 runtime 까지 자동 할당. 이후, 사용자의 선택.

- Bluemix Demo

  라이브 싱크 편집 기능. 블루믹스에서 기반이 되는 클라우드 환경을 구성 하고 내부에서 선택한 환경에 따라 준비가 되며
해당 환경에서 바로 편집이 가능함.  온라인 IDE 선택도 가능할듯.
스피커가 버벅...역시 라이브코딩은 어렵다. ㅎㅎ

- 신속한 애플리케이션 개발 지원.  
도커 기반 이미지, 런타임, 보일러플레이트 제공.

- watson 서비스 api 연동.  
블루믹스 카탈로그에서 왓슨 api선택.  
하나의 예시로 챗봇
가이드 문서에 자바, 노드, 파이선 등의 샘플 코드를 제공.  

# How the Node.js event loop works

구글에서 검색가능한 그림은 전부 틀렸다.ㅎㅎ  
non-blocking worker 이런거 없다.

index.js -> ... -> process#exit

# dockerize node.js application

nginx 에서 round robin 처리..
container orchestration  - swarm, kubernate
