# jmap

참고사이트  : http://pmosic.tistory.com/entry/jmap%EC%9C%BC%EB%A1%9C-JVM-heap-%EC%83%81%ED%83%9C-%ED%99%95%EC%9D%B8  

jmap 명령으로 실행 중인 JVM의 heap 상태를 확인가능  

우선 실행중인 JVM의 프로세스 ID를 알아야하므로, jps를 사용하거나 ps -ef | grep java 를 사용해서 pid를 찾는다.  

* jmap 으로 pid 9344 의 heap 상태를 확인  
heap 설정과 각 generation별 현황확인 가능. 만약 old 쪽이 증가하며 메모리 누수를 의심해야함.
```
jmap -heap 9344
```

* -histo 옵션으로 클래스 별 객체 수와 메모리 사용량 확인 가능.   
```
jmap -histo:live 9344 | more
```

* dump 옵션으로 heap dump를 뜬후 MAT 등으로 분석하자.
```
jmap -dump:format=b,file=/tmp/9344.prof 9344
```
