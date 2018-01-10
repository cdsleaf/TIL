# windows Git Server
## Bonobo
#### 프로그램 설치

install .NET Framework 4.5  
http://www.microsoft.com/ko-kr/download/details.aspx?id=30653

install Bonobo  
https://bonobogitserver.com/

#### ISS 설치 및 설정

제어판 -> 프로그램 및 기능 > windows 기능 사용/사용안함 에서
인터넷 정보 서비스 -> World Wid Web 서비스와 인터넷 정보 서비스, 웹 관리도구 선택

Bonobo는 ISS 기반의 웹서버이므로 제어판 -> 관리도구 -> IIS 관리자 에서 관리.

### Bonobo 설정

다운로드 받은 bonobo 압축을 풀고 IIS의 기본 디렉토리인 C:\inetpub\wwwroot 내부에 압축을 푼다. 그리고 압축을 푼 Bonobo 디렉토리의 속성으로 들어가서 IIS_IURS 수정, 쓰기 권한 추가  

이후 IIS 관리자에서 Bonobo를 찾은 후, ''응용프로그램으로 변환' 클릭  

접속은 http://localhost/Bonobo.Git.Server
