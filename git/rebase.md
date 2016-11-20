# rebase

//TODO 내용 보완 중.

참고사이트 : https://backlogtool.com/git-guide/kr/stepup/stepup7_6.html  
http://ohgyun.com/524  
https://backlogtool.com/git-guide/kr/stepup/stepup7_6.html  rebase -i 로 커밋 수정하기  
https://backlogtool.com/git-guide/kr/stepup/stepup2_8.html   rebase 로 병합하기  

merge와 rebase 둘다 브랜치를 병합할 수 있다. 이때 차이점은 merge는 히스토리가 남지만, rebase는 복잡한 merge 이력 없이 깔끔하게 이력을 정리할 수 있는 장점이 있다.  
또한, 로컬에서 여러개의 커밋으로 되어 있는 이력을 원격 저장소에 push 시 한번의 커밋이력으로 올리고 싶을 경우, rebase를 사용하면 이러한 이력들을 하나로 합칠 수도 있다.  

## 1. 여러개의 이력을 하나로 통합시켜주는 커밋 이력 정리. -> squash

git log 를 했을 때, 아래와 같이 여러개의 이력이 보일 경우,
```
7ee8f67 - Third commit
bbb5c5d - Second commit
37aa5cc - First commit
```

정리하고 싶은 이력의 범위를 지정해서 rebase -i 를 실행.
여기서 ~ 은 현재 시점에서 거슬러 올라갈 커밋 이력. 3 이라면 이전의 3번째 커밋 까지 거슬러 올라간다는 의미.
```
git rebase -i HEAD~3

+ .git-test
       20 pick 7ee8f67 Third commit
       19 pick bbb5c5d Second commit
       18 pick 37aa5cc First commit
       17
       16 # Rebase 37aa5cc..8fde911 onto 37aa5cc
       15 #
       14 # Commands:
       13 #  p, pick = use commit
       12 #  r, reword = use commit, but edit the commit message
       11 #  e, edit = use commit, but stop for amending
       10 #  s, squash = use commit, but meld into previous commit
        9 #  f, fixup = like "squash", but discard this commit's log message
        8 #  x, exec = run command (the rest of the line) using shell
        7 #
        6 # These lines can be re-ordered; they are executed from top to bottom.
        5 #
        4 # If you remove a line here THAT COMMIT WILL BE LOST.
        3 #
        2 # However, if you remove everything, the rebase will be aborted.
        1 #
        0 # Note that empty commits are commented out
```

## 2. 과거의 특정 시점의 커밋의 코멘트 또는 파일 정보를 변경. -> edit

//작성중.

## 3. 갈라지고 다시 합쳐지는 복잡한 이력 없이 마치 원래 하나 였던 것 처럼 이력을 유지하며 병합.

//작성중.
