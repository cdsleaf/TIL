# 자바스크립트와 이벤트루프  

http://meetup.toast.com/posts/89

>목차  
ECMAScript에는 이벤트 루프가 없다  
단일 호출 스택과 Run-to-Completion  
태스크 큐와 이벤트 루프  
비동기 API와 try-catch   
setTimeout(fn, 0)  
프라미스(Promise)와 이벤트 루프  
마치며  
참고 링크  


MDN의 이벤트 루프 설명 : https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop

```
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

위 코드의 waitForMessage() 메소드는 현재 실행중인 태스크가 없을 때 다음 태스크가 큐에 추가될 때까지 대기하는 역할을 한다.  
이런 식으로 이벤트 루프는 '현재 실행중인 태스크가 없는지'와 '태스크 큐에 태스크가 있는지'를 반복적으로 확인하는 것이다.  
간단하게 정리하면 다음과 같을 것이다.

1. 모든 비동기 API들은 작업이 완료되면 콜백 함수를 태스크 큐에 추가한다.
2. 이벤트 루프는 '현재 실행중인 태스크가 없을 때'(주로 호출 스택이 비워졌을 때) 태스크 큐의 첫 번째 태스크를 꺼내와 실행한다.

setTimeout(fn, 0) 은  fn 과 상당히 다른 결과를 가져온다.

setTimeout 함수는 콜백 함수를 바로 실행하지 않고 (호출 스택이 아닌)태스크 큐에 추가한다. 그렇기 때문에 아래의 코드는 콘솔에 B -> A 순서로 출력하게 될 것이다.

```
setTimeout(function() {
    console.log('A');
}, 0);
console.log('B');
```

Promise 는 microtask 가 있다. microtask는 일반 task 보다 우선순위가 높다.
본 내용은 HTML 스펙의 perform a microtask checkpoint 항목을 참고하자.
또는 microtask와 관련된 참고사이트.. https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
아래 예제의 정답은 B -> C -> A

```
setTimeout(function() { // (A)
    console.log('A');
}, 0);
Promise.resolve().then(function() { // (B)
    console.log('B');
}).then(function() { // (C)
    console.log('C');
});
```
