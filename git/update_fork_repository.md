# Github에서 fork한 repository를 원본 repository와 동기화 하기.
---
 **출처 : http://lifove.tistory.com/54**

Github에서 수많은 오픈소스 프로젝트가 있다.  
이러한 프로젝트에 기여하는 방법은 가장 손쉽게는 readme 파일의 오타를 찾아 준다거나 또는 가이드 문서에 보완했으면 좋은 부분을 의견 형식으로 제안하는 것이다.  

그러다보면, 직접 소스코드를 수정하거나 기능을 추가로 제안하고 싶은 경우가 있는데 이럴때, 해당 repository를 fork 해서 개인 저장소에서 이것 저것 해보고 그후에 pull request를 날리면 된다.  

그런데...너무 바빠서 오랬동안 손을 대지 못한 경우 원 repository의 소스코드가 저 멀리 앞서가버리는 경우가 발생해버린다.  

이런 경우 원 repository와 fork repository를 동기화 해야하는데 이에 대한 방법을 잊지 않기 위해 내 개인 TIL에 기록해둔다.  

출처에서 요약한 내용을 그대로 붙여보자.  
* 나의 PC에 clone한 fork 저장소에 원본(보통 upstream 이라고 함) 저장소의 github주소를 추가한다.

* 나의 PC에 clone한 fork 저장소에서 원본 저장소를 fetch 하고, 나의 저장소에서 master branch를 checkout한 다음, 원본 저장소의 master (upstream/master)를 merge하면 된다. 해당 원본 저장소에 다른 branch가 있다면, 아래 (2) 4번 부터 branch명만 바꾸어 반복해 주면 된다.  

위의 요약내용을 풀어서 기술 하면,  

(1) 현재 원격주소가 무엇인지 확인

```
$ git remote -v

origin  https://github.com/cdsleaf/functionalstudy.git (fetch)
origin  https://github.com/cdsleaf/functionalstudy.git (push)
```

(2) 원본 저장소의 원격 주소를 추가한다.

```
$ git remote add upstream https://....
$ git remote -v

origin  https://github.com/cdsleaf/functionalstudy.git (fetch)
origin  https://github.com/cdsleaf/functionalstudy.git (push)
upstream https://github.com/projectBS/functionalstudy.git (fetch)
upstream https://github.com/projectBS/functionalstudy.git (push)
```

(3) clone한 fork 저장소와 원본 저장소 동기화 하기.

```
$ git fetch upstream

$ git merge upstream/master
```

여기까지 했을 때, conflict 되는 파일이 없다면 자동으로 merge 된다.
