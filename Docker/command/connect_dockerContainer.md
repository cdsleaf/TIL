# docker container에 접속하기

참고사이트 : http://bluese05.tistory.com/21  

* 컨테이너 확인
```
docker ps -a

ONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                  NAMES
c456623003b1        nimmis/apache       "/my_init"          40 seconds ago      Up 39 seconds       0.0.0.0:8080->80/tcp   high_ritchie  
```

* 도커 컨테이너에 접속

```
docker exec -it  c456623003b1 /bin/bash
또는
docker exec -it  도커name bash
```
