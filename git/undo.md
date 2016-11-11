# undo

참고 사이트 : https://git-scm.com/book/ko/v1/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B8%B0  

아래 내용은 참고 사이트 내용을 요약한 것이다.

## 커밋 수정하기.  

커밋 메시지를 잘못 적어서 다시 커밋 하고 싶을때는 --amend  

```
git commit --amend
```

커밋 파일중에 빼먹은게 있을 경우에는.  
```
git commit -m "..." // 이렇게 커밋하고
git add 깜박한 파일명.
git commit --amend
```

## 파일 상태를 unstage로 변경하기.  

이번엔 staging area에 있는 걸 working directory 로 상태 변경.  

실수로 git add . 으로 변경된 파일 전체를  staging area로 보냈을 때, 그 중 파일 하나로 다시 working directory 로 옮기고 싶다면.

```
git add .
git status //이걸 보면 어떻게 해야할지 알 수 있다. 일종의 가이드.

git reset HEAD 돌리고 싶은 파일명.
```

### Modified 파일 되돌리기.

working directory에 수정된 파일을 수정되기전으로 revert 하고 싶을 때.  

```
git checkout -- 되돌리고 싶은 파일명
```
