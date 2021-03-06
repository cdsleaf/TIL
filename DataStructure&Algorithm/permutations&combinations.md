# 순열과 조합

## 순열(nPk)
 : N가지의 물건 중 K개의 물건을 순서 구분하여 고르는 경우의 수  
1 2 3 / 3 2 1 은 순서가 다르므로 다른 경우로 계산  
nPk = N! / (N-K)!

## 조합(nCk)
: N가지의 물건 중 K개의 물건을 순서 구분없이 고르는 경우의 수
1 2 3 / 3 2 1 순서 상관없으므로 같은 경우로 계산  
nCk = nPk / K! = N! / (N-K)!(K!)  

아래 두개는 동일한 경우.
```
4C3 : 3개의 공을 뽑아 상자에 넣는다.
4C1 : 1개의 공을 상자에 넣지 않는다.
```

## 조합의 성질(파스칼의 삼각형)
:nCk = (n-1)C(k-1) + (n-1)Ck

## 조합(nCk)값을 계산하는 여러 방법의 시간복잡도와 유의사항
#### 정의(nCk=N!/(N-K)!K!)에 따라 계산하는 방법  
O(N)의 시간복잡도를 가지며, 구하고자하는 최종 nCk의 값은 자료형(int,long등)의 범위 내에 있다 하더라도 N!은 매우 빠른 속도로 증가하기 때문에 계산과정 중 자료형의 범위를 벗어날 수 있음을 유의해야 함.

#### DP와 파스칼의 삼각형을 통해 계산하는 방법
D[n][k] = nCk 라고 정의하면, 앞서 배운 조합의 성질(파스칼의 삼각형)을 통해 D[n][k] = D[n-1][k-1]+D[n-1][k] 임을 알 수 있다.  
마찬가지로 O(N^2)의 시간복잡도를 가지며, 메모이제이션을 통해 조합의 값을 여러 번 구할 때 불필요한 계산을 줄여준다는 장점이 있다.  
하지만, DP배열을 만들기 위해 N*N배열만큼의 공간이 필요하기 때문에 N의 값이 클 경우 사용이 불가능하다.==> 공간복잡도가 너무 커질 수 있다...

## 모듈러 연산이 있는 조합(nCk)값을 계산하는 여러 방법의 시간복잡도와 유의사항
#### 정의(nCk=N!/(N-K)!K!)에 따라 계산하는 방법
일반적으로 모듈러 연산이 있는 조합 값을 구하는 문제는 조합의 값이 매우 커서 모듈러한 값을 출력하는 문제이다. 따라서 보통 그냥 계산하면 자료형의 범위를 넘어가 버림. 이를 피하기 위해 계산 과정 중 모듈러를 취할 경우 단순 곱셈에서는 문제가 없지만, 나눗셈에서는 분배법칙이 보장되지 않아 계산이 불가능하다. (나눗셈에서 부모쪽은 모듈러해버리면 문제가 생김.)

#### DP와 파스칼의 삼각형을 통해 계산하는 방법
D[n][k] = nCk(mod P) 라고 정의하면  
```
D[n][k] = nCk(mod P)
        = n-1Ck-1+n-1Ck(mod P)
        = (n-1Ck-1)(mod p)+(n-1Ck)(mod p)
        = D[n-1][k-1] + D[n-1][k]
```
 O(N^2)의 시간복잡도를 가지며, 메모이제이션을 통해 조합의 값을 여러 번 구할 때 불필요한 계산을 줄여준다는 장점이 있으나, N*N배열의 공간이 필요.

#### 페르마의 소정리를 사용하는 방법
페르마의 소정리란, a와 p가 서로소 일 때, a^(p-1) ≡ 1(mod p)를 만족  
