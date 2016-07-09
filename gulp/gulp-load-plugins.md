
# gulp plugin 들을 자동으로 load 해주는 멋진 plugin

보통 gulp에 plugine들을 load 하려면 아래와 같이 해야한다.
```
var gulpP = require('gulp-xxxx-');
```

하지만, 'gulp-load-plugins' 을 쓰게 되면 수많은 plugin을 일일이 load 할 필요 없다.!!!
그냥 간단하게 아래와 같이 해주면 끝!
```
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
```

gulp-load-plugins 에서 package.json을 읽어들여서 자동으로 load 시킨다!!!

짱 편하다. 좋다.

자세한 내용은 아래 사이트로!
https://www.npmjs.com/package/gulp-load-plugins
