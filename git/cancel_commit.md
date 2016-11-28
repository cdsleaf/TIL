# git commit 취소 방법

참고 url : http://jinnydown.tistory.com/entry/git-commit  

## 가장 최근의 커밋을 취소하고 로컬의 수정사항도 같이 되돌리고 싶다면.

```
git reset --hard HEAD~1
```

## 가장 최근의 커밋을 취소하지만, 로컬의 내용은 그대로 유지하고 싶다면,

```
git reset HEAD~1
```

## 가장 최근의 커밋은 취소하지만, index 영역까지는 그대로 유지 하고 싶을 때

```
git reset --soft HEAD~1
```
