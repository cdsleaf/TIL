## Grunt Install

### 1. grunt cli 설치


Grunt의 Command Line Interface(CLI)를 설치한다

```
npm install -g grunt-cli
```


### 2. package.json 파일 생성 -> 프로젝트의 root 에서 생성한다.

```
npm init
```

### 3. grunt 설치 -> 역시나 마찬가지로 프로젝트의 root 에 설치한다. (npm에서 local install)

npm 기준으로 프로젝트 로컬 설치임. 이로 인해 프로젝트 단위로 grunt 개별 설정이 가능해짐.

```
npm install grunt --save-dev
```

### 4. gruntfile.js 파일 생성

package.json과 같은 위치(프로젝트 폴더의 root경로)에 Gruntfile.js를 생성

-> grunt 가 수행할 작업 및 옵션을 정의.

### 5. 사용하려는 Grunt Plugin 설치

```
npm install grunt-contrib-concat --save-dev

npm install grunt-contrib-uglify --save-dev

npm install grunt-contrib-jshint --save-dev

npm install jshint-stylish --save-dev

npm install grunt-contrib-cssmin --save-dev

npm install jshint-html-reporter --save-dev
```

### 6.grunt 명령어로 실행한다. 

정의해놓은 복수 개의 플러그인을 동시에 실행시킬 수 있다. 

개별 실행을 시키고 싶다면 ‘grunt 플러그인이름’으로 실행하면 된다. 

예) grunt concat

반드시 gruntfile.js 이 있는 경로에서 grunt 명령어를 실행한다.


### 참고 사이트

http://gruntjs.com

http://nuli.navercorp.com/sharing/blog/post/1132682
