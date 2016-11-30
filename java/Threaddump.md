# Thread dump

참고사이트 : http://d2.naver.com/helloworld/10963 (스레드 덤프 분석하기)  

아래 내용은 위의 참고사이트 내용을 요약...하려고 노력한 흔적이다.

## JAVA와 스레드

두 개 이상의 스레드가 같은 자원 사용 시, 필연적으로 스레드 간에 경합(contention) 발생 / 경우에 따라 데드락(Deadlock) 발생  
경합이란, 스레드가 획득하고 있는 락이 해제되기를 기다리는 상태.
데드락은 두 개 이상의 스레드에서 작업을 완료 하기 위해서 상대의 작업이 끝나야 하는 상황

위와 같은 상황때문에 다양한 문제가 발생할 수 있으며 이 문제를 분석하기 위해 스레드 덤프를 이용  
-> 각 스레드의 상태를 정확히 알 수 있다.

## Java 스레드 배경 지식

### 스레드 동기화

여러 스레드가 공유 자원 사용 시 정합성 보장을 위해 스레드 동기화 필요(한번에 하나의 스레드만 공유 자원에 접근하도록.)  
Java에서는 Monitor를 이용해서 스레드 동기화.  
모든 Java 객체는 하나의 Monitor 소유. 다시 Moniotr는 한나의 스레드만 소유.  
어떤 스레드가 소유한 Monitor를 다른 스레드가 획득하려면 해당 Monitor를 소유하고 있는 스레드가 Monitor를 해제할 때 까지 Wait Queue에서 대기 해야함.  

### 스레드 상태

스레드의 상태는 java.lang.Thread 클래스 내부에 State라는 이름을 가진 Enumerated Types(열거형)으로 선언  

[Thread State Diagrma]

New > Runnable (Blocked, Waiting, Timed_Waiting) > Terminated

* NEW: 스레드가 생성되었지만 아직 실행되지 않은 상태  
* RUNNABLE: 현재 CPU를 점유하고 작업을 수행 중인 상태. 운영체제의 자원 분배로 인해 WAITING 상태가 될 수도 있다.  
* BLOCKED: Monitor를 획득하기 위해 다른 스레드가 락을 해제하기를 기다리는 상태  
* WAITING: wait() 메서드, join() 메서드, park() 메서드 등를 이용해 대기하고 있는 상태  
* TIMED_WAITING: sleep() 메서드, wait() 메서드, join() 메서드, park() 메서드 등을 이용해 대기하고 있는 상태. WAITING 상태와의 차이점은 메서드의 인수로 최대 대기 시간을 명시할 수 있어 외부적인 변화뿐만 아니라 시간에 의해서도 WAITING 상태가 해제될 수 있다는 것이다.

### 스레드의 종류

Java 스레드는 Daemon Thread 와 Non-daemon Thread 로 나눌 수 있다.  
데몬 스레드는 비데몬 스레드가 없다면 동작을 중지한다.  
보통 데몬 스레드는 가비지 컬렉션이나 JMX등의 작업을 처리하기 위함.  
어플리케이션을 실행 했을 때 비데몬 스레드가 생성되고 이때 자동으로 데몬 스레드가 생성된다.  

## 스레드 덤프 획득

스레드 덤프는 획득할 당시의 스레드 상태만 알 수 있기 때문에 스레드 상태 변화를 확인하려면 5초 간격으로 5~10회 정도 획득하는게 좋다.  
스레드 덤프 획득 방법은 총 3가지가 소개 되어 있음.  

* jstack을 이용하는 방법  

우선, 프로세스의 PID를 확인한다.  
```
$ jps -v

17643 ...
27385 ...
```
jps로 획득한 PID로 jstack을 실행하면 스레드 덤프를 획득한다.
```
$ jstack 17643
```

* Java VisualVM을 이용하는 방법

좌측 패널의 프로세스 목록중 원하는 프로세스를 선택 후