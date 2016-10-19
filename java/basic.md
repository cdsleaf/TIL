### 항상 까먹는 기본 개념 정리

1. object & class

 - 객체는 객체지향프로그래밍에서 기초중에 기초. 기본중에 기본의 개념.
객체는 동작과 상태를 가진다. 여기에서 동작은 메소드, 상태는 필드로 치환되어 프로그래밍하게 된다.

 - 클래스는 이러한 객체들의 틀, 객체의 설계도라고 할 수 있다.
클래스를 선언하고 클래스 내부에 필드와 메소드를 만들고, new 연산자를 사용하여 이 클래스의 객체를 생성한다.
이때 생성된 객체는 클래스의 인스턴스이다.


2. Wrapper class 와 AutoBoxing  
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
