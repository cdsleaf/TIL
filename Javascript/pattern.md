
* 데코레이터 패턴

함수를 호출하는 행위는 작동하는 컴퓨터를 다른 컴퓨터로 옮기는 차원이동과 비슷

가버리고 오지 않는다 chain of responsibility
갔다가 돌아오는건 decorator

건내줄 다른 차원
그 차원의 포탈이름
본인도 포탈이름의 메소드 구현

```
class Deco{
    execute(){}
}
class Person extends Deco{
      constuctor(next){
           this.next = next;
      }
      execute(){
           return "person with " + this.next.execute();
     }
}
class Dog extends Deco{
      constructor(){}
      execute(){
            return "dog";
     }
}
p = new Person(new Dog());
console.log(p.execute());
person with dog
```

아래코드는 자바에서의 데코레이터 패턴 사용 예시.
```
new Zip(new ByteSt(new OutStream()))
```

* 강제 인터페이스 패턴
```
class Deco{
    execute(){throw 1;}
}
```
