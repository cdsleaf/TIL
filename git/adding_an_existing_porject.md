
### 기존에 존재하는 프로젝트를 깃허브에 올리는 방법

 - 1. 우선 깃허브에 리파지토리를 생성한다.
 - 2. 로컬 디렉토리를 초기화 한다.
```
git init
```
 - 3. 새로 생긴 로컬 리파지토리에 해당 프로젝트를 add 한다. 즉 stage에 추가한다는 것을 의미한다.
```
git add .
```
 - 4. 로컬 리파지토리에 커밋을 한다.
```
git commit -m "First Commit"
```
 - 5. 원격 리파지토리 URL을 등록한다.
```
git remote add origin remote repository URL
git remote -v
```
 - 6. 원격 리파지토리에 push를 한다.
```
git push origin master
```
