
 
 Mean Stack 이란, 
 
 자바스크립트로 이루어진 full stack 을 말한다.
 
 MongoDB, expressJS, AngularJs, node.js 의 약자를 딴 것이 Mean
 
 서버 구동은 우선 MongoDB 구성 부터 시작한다.
 MongoDB를 c:/MongoDB에 설치했고, 
 이번에 진행하려는 프로젝트의 DB저장소로 meanstack 라는 폴더를 미리 만들었다.
 이후 아래 명령어로 MongoDB를 구동한다.
 
```
mongod -dbpath=c:/MongoDB/meanstack
```

이후에 Grunt 또는 Gulp의 서버를 구동한다.
이때, 위의 MongoDB가 반드시 먼저 구동되어 있어야한다.
Grunt 또는 Gulp 의 서버가 구동될 때, 몽구스를 통해서 MongoDB와 연결된다.

```
Grunt serve 
```
또는 
```
Gulp serve
```

종료 할 때, Gulp는 그냥 끄면 되지만,
MongoDB는 제대로 종료해주는 게 좋다.

MongoDB가 설치된 위치로 가서 쉘을 실행한다.
bin 폴더에서 mongo 명령어로 쉘을 실행할 수 있다.

이후 아래와 같이 인증된 사용자로 변경후 (admin) 
db.shutdownServer() 명령어를 입력하면 DB서버가 종료된다.
```
use admin
db.shutdownServer()
```
