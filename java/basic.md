## 항상 까먹는 기본 개념 정리

### 1. object & class

 - 객체는 객체지향프로그래밍에서 기초중에 기초. 기본중에 기본의 개념.
객체는 동작과 상태를 가진다. 여기에서 동작은 메소드, 상태는 필드로 치환되어 프로그래밍하게 된다.

 - 클래스는 이러한 객체들의 틀, 객체의 설계도라고 할 수 있다.
클래스를 선언하고 클래스 내부에 필드와 메소드를 만들고, new 연산자를 사용하여 이 클래스의 객체를 생성한다.
이때 생성된 객체는 클래스의 인스턴스이다.


### 2. Wrapper class 와 AutoBoxing  
   (참고 사이트 : http://hyeonstorage.tistory.com/168)

 - Wrapper class란?

    primitive type을 객체형으로 다루어야 할 경우 사용되는 클래스.  
    아래 내용 말고도 더 있음. 자세한건 java spec을 찾아보자.

    primitive type => wrapper class  
     byte =>  Byte  
     int  => Integer  

    Wrapper 클래스는 산술연산을 위해 정의된 클래스가 아니기 때문에, 이 클래스의 인스턴스에 저장된 값은 변경이 불가능하며, 값을 저장하는 새로운 객체의 생성 및 참조만 가능하다.

 - Boxing : 기본 자료형을 Wrapper 클래스의 객체로 변경하는 과정

    ```
    Integer age = new Integer(30);
    ```

  - Unboxing : 각각의 객체를 기본 자료형으로 변경하여 사용하는 과정

    ```
    int age2 = age.intValue();
    ```

  -  AutoBoxing, AutoUnBoxing  

    JDK 1.5 버전 이후에는 자동으로 Boxing과 UnBoxing을 처리하도록 AutoBoxing 과 AutoUnBoxing을 제공한다.

  - 그럼 Wrapper class 가 필요한 경우는?
    1. 매개변수로 객체가 요구 될때.
    2. 기본형 값이 아닌 객체로 저장해야 할 때.(null 이나 제너릭 같은..)
    3. 객체간의 비교가 필요할 때. 등등

### 3. Comparable과 Comparator 인터페이스의 차이는?

 Comparable 인터페이스는 자연스러운 순서로 정렬 시 사용.
 Comparator 인터페이스는 원하는 정렬순서로 지정하고 싶은 곳에 사용.

### 4. Heap & Stack

* Heap

new 키워드는 자바 heap 영역에 메모리를 할당한다.  
heap은 애플리케이션 영역에 접근할 수 있는 메모리의 메인 영역이다.  
객체를 할당할 때 이용할 수 있는 메모리가 충분치 않으면 JVM은 가비지 컬렉션을 이용하면서 힙에서 메모리를 재사용하려고 시도한다.  
그래도 충분한 메모리 영역을 확보할 수 없다면 out of memory error가 발생하며 JVM이 종료된다.

heap은 generation이라는 여러개의 영역으로 구분된다.  
객체가 처음 생성됐을 때는 Eden이라는 메모리 영역에 할당되며 이후 가비지 컬렉션 수집대상에서 제외될 때 Survivor 이라는 메모리 영역으로 옮겨진다. 이후에 또 제외 되면, Tenured generation에 할당된다.  
이렇게 계쇡 제외되면서 다음 generation으로 옮겨지면, 가비지 컬렉션 수집대상이 될 가능성이 점점 낮아진다.  
마지막으로 permanent generation 또는 PermGen 이라는 generation 까지 객체가 옮겨지면 해당 객체들은 가비지 컬렉션에서 수집되지 않으며 일반적으로 클래스 정의나 String 상수 같이 JVM에서 실행되는 데 필요한 immutable 상태가 포함된다.  

// TODO  자바8 에서는 PermGen 영역은 물리 메모리에 위치할 Metaspace라는 새로운 영역으로 변경됨. 자바8 내용 보고 위 내용 수정 필요.

JVM 실행 시 커맨드라인에 - Xmx 매개변수와 크기를 이용해서 최대 heap 크기를 지정할 수 있다.  
JVM에서 할당할 초기 메모리를 지정할 때는 - Xms 매개변수를 사용한다. 이 매개변수는 함수에서 필요한 메모리 양을 알면 필요한 크기만큼 확장하기 위해 과도하게 느린 가비지 컬렉션에서 애플리케이션을 보호한다.  

만약 Xms 와 Xmx 가 같은 값일 경우, JVM 실행 시 모든 메모리를 할당한다. 단 메모리는더이상 늘어나지 않는다.
초기 메모리 할당을 위한 기본값은 컴퓨터 메모리의 1/64 에서 1GB 까지 이다. 최대 기본값은 1GB보다 작거나 컴퓨터 물리 메모리 전체의 1/4이다.  

그외, JVM과 관련된 매개변수는 permanent generation용인 -XX:Permsize와 -XX:MaxPermSize 다. 클래스와 String 상수를 많이 사용하거나 비 자바 프로그래밍 언어에서 동적인 클래스 정의를 많이 사용한다면 이 값을 설정하자.  

**JVM은 메모리할당을 확장하기 전에 가능한 많은 가비지 컬렉션을 수행하려고 할 것이므로 JVM을 실행할 때 메모리 전체를 할당하지 않는다는 점이 중요하다.**

* Stack

stack은 기본값, 객체의 참조, 메서드가 저장되는 위치다. 따라서 stack에 있는 변수의 생애주기는 코드의 scope에 영향을 받는다. 자바에서 scope는 괄호로 구분해서 정의한다. 해당 scope의 실행이 종료되면 scope안에 선언된 변수들은 stack에서 제거된다.  
메서드 호출시 선언된 변수들은 stack의 상단에 위치한다. stack에서 다른 메서드를 호출하면 스택은 새로운 메서드의 변수를 stack의 상단에 둔다.  
재귀 메서드에서 너무 많이 호출될 경우 stack 메모리가 가득차서 stackOverflowError 가 발생하게된다.  

heap 크기의 초기값과 최대값을 지정하는 것과 비슷하게 JVM의 시작 매개변수로 stack의 크기도 지정할 수 있다. 단 실행중인 프로그램 대부분에는 이 값을 직접 설정하면 안된다.
stackOverflowError 발생 시 heap 최대값을 늘리지 말고, 재귀메소드 등을 찾아서 코드를 수정하자.  
