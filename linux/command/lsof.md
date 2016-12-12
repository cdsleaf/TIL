# lsof 명령어

참고 사이트 : https://www.lesstif.com/pages/viewpage.action?pageId=20776078#lsof사용법-특정사용자의열린파일출력  

lsof 는 list open files 의 약자로 시스템에서 열린 파일 목록을 알려주고 사용하는 프로세스, 디바이스 정보, 파일의 종류등 상세한 정보를 출력한다.  

* 특정 사용자의 열린 파일 출력  
```
lsof -u 사용자id
```

* 특정 포트를 사용하는 프로세스 정보 보기
```
lsof -i 프로토콜과 포트... // lsof -i TCP:22
```

* 특정 프로세스가 오픈한 파일 표시
```
lsof -p 프로세스id
```
