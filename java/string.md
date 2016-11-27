## string에 관련된 기억해야할 내용들을 정리한 문서 입니다.

### 1. String, StringBuffer, StringBuilder 차이점과 장단점

 - String은 immutable,  StringBuffer,StringBuilder는 mutable

 - string은 한번 생성된 이후 할당된 메모리공간이 변하지 않는다. + 연산자 또는 concat 메서드를 통해  
   기존에 생성된 String 클래스 객체 문자열에 다른 문자열을 붙여도 새로운 String 객체를 생성하고 해당 객체에 연결된 문자열을 저장하며 참조하도록 만든다.  
   (즉, String 클래스 객체는 Heap 메모리 영역(가비지 컬렉션이 동작하는 영역)에 생성되며, 한 번 생성된 객체의 내부 내용을 변화시킬 수 없습니다. 기존 객체가 제거 되면 Java의 가비지 컬렉션이 회수합니다.)  

   이러한 점 때문에 연산이 많을 경우 성능이 좋지 않다. 다만 동기화에 대해 신경쓰지 않아도 되기 때문에(Thread-Safe), 내부 데이터를 자유롭게 공유할 수 있습니다.  

 - StringBuffer,StringBuilder의 차이점은 동기화 여부. (StringBuffer는 동기화 지원, StringBuilder는 동기화 미지원)  
   StringBuffer는 각 메서드 별로 Synchronized Keyword 가 존재하여, 멀티스레드 환경에서도 동기화를 지원하지만, StringBuilder는 지원하지 않는다.  
   그렇기 때문에 멀티스레드 환경이라면 값 동기화 보장을 위해 StringBuffer를 사용하고, 단일스레드 환경이라면 StringBuilder를 사용해야한다.  
   단일스레드환경에서 StringBuffer를 사용할 경우, 동기화 관련 처리로 인해 StringBuilder에 비해 성능이 좋지 않다.  

 - JDK 1.5 버전 이후에는 컴파일 단계에서 String 객체를 사용하더라도 StringBuilder로 컴파일 되도록 변경되었음.

### 2. String Interning

 - 동일한 문자열을 복수의 String 객체에서 사용해야 할 경우, 아래와 같이 test1 객체를 생성 후 다음 String 들은 intern 메소드를 사용하면 test2, 3 은 별도의 heap 메모리를 점유하지 않고 String pool 을 바라보게되어 heap 메모리를 아낄 수 있다.  
 다만, 이런경우 매번 String pool에서 equal 로 동일한 문자열을 찾으므로 찾는 시간이 추가로 소모된다. 또한, test1 처럼 최초 객체가 반드시 있어야 한다.  
 동일한 String 문자열을 매우 많이 사용할 경우에 유용한 메소드.  

 ```
String test1 = "test123";
String test2 = new String("test123").intern();
String test3 = new String("test123").intern();
 ```
