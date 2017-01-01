# Runnable 과 Thread 의 관계

본 내용은 아래 블로그의 내용을 토대로 요약? 된 것임.
http://zbomoon.tistory.com/12  

두개의 같은 점은 run()을 정의해야하 한다는 점.  
run은 Thread에서 실행되는 메소드인데 thread 와 Runnable 각각의 구현의 차이는  
* run이 Thread를 extends 함으로 써 @override 될 것이냐  
* Runnable 인터페이스를 구현함으로 써 추상 메소드를 오버라이딩 할 것이냐의 차이  

차이 점을 다시 한번 정리하면,
1. Thread는 상속을 받으며 Runnable은 인터페이스로서 구현. (그래서 Thread 사용 시 다른 클래스 상속 불가...)
2. Thread는 재사용이 불가능하며 Runnable은 가능.
3. Thread 사용 시 해당 class를 바로 사용가능.

### Thread 상속.
```
class ThreadExtended extends Thread{
  public void run(){

  }
}

class Main{
  public void static main(String args[]){
    ThreadExtended t = new ThreadExtended(); //재사용 불가.
    t.start();
  }
}
```

### Runnable 인터페이스
```
class RunnableImplements implements Runnable{
  public void run(){

  }
}

class Main{
  public void static main(String args[]){
    Runnable r = new RunnableImplements();
    Thread t = new Thread(r); //재사용 가능.
    t.start();
  }
}

```
