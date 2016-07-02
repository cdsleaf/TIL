# 사내 http proxy 사용하는 경우 해결 방법

## proxy 주소 확인

```
cmd -> netstat
```

이후 npm command line 에서 아래 설정 추가.

```
npm config set strict-ssl false
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```


## git-scm.com

git 설치 할 때, 아래 옵션으로 설치하자. 그래야 npm으로 설치 시 git 관련 오류 발생 안함.

```
Run Git from the Windows Command Prompt”. This will add the PATH variable for Git.
```

방화벽 내부에 있을때 github 접근이 안된다면 아래와 같이 git 설정 변경한다.

```
git config --global url."https://".insteadOf git://
git config --global url."https://".insteadOf git@
```
