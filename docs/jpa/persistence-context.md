# 영속성 컨텍스트

### 영속성 컨텍스트란
```text
영속성 컨텍스트는 JPA 가 Entity 를 관리하는 공간이다.
영속으로 등록된 Entity 들을 EntityManager 가 Commit 될 때, SQL 을 DB 로 전송한다.
영속성 컨텍스트는 1치 캐시, 동일성 보장, 쓰기지연, 변경감지, 지연로딩 등 이점을 제공한다.

영속성 컨텍스트의 라이프싸이클은 트랜잭션이 시작 [ transaction.begin() ] 부터,
트랜잭션 커밋 [ transaction.commit() ] 까지이다.
```

### 플러시(영속성 컨텍스트와 DB 동기화)
```text
영속성 컨텍스트가 동기화가 발생되는 시점은 변경감지, 변경 된 Entity 가 쓰기지연 SQL 저장소에 등록,
쓰기지연 SQL 저장소의 SQL 이 DB 에 질의될 때 자동으로 동기화가 진행된다.

동기화를 한다고 해서 영속성 컨텍스트가 비워지는것은 아니고, 동기화만 진행한다. 
실제 영속성 컨텍스트를 초기화 하려면 entityManager.clear() 로 초기화를 하거나, 
entityManager.close() 로 영속성 컨텍스트를 종료하여야 한다.

영속성 컨텍스트와 DB가 동기화 되는 시점은 아래와 같다.
* entityManager.flush() // 직접 동기화 진행
* transaction.commit() // Commit 될 때 자동으로 동기화 진행
* JPQL 쿼리 실행 // SQL 이 질의될 때 자동으로 동기화 진행
```

### 1차 캐시
![persistence_context_1](@src/persistence_context_1.png)
```text
1차 캐시는 영속으로 등록된 Entity 가 등록되며, PK 값을 Key 로 등록된다.
JPA 에게 조회하라는 명령을 내렸을 때, 만약 1차 캐시에 조회하려는 Entity 있으면,
DB 에 조회를 요청하지 않고 1차 캐시에 있는 값을 반환함으로써 성능향상을 꾀할 수 있다.
```

### 동일성 보장
```java
    Member member1 = repository.findOne(id);
    Member member2 = repository.findOne(id);

    System.out.println(member1 == member2); // true
```

```text
영속성 컨텍스트에 있는 같은 PK 를 가진 Entity 는 동일성을 보장한다.
```


### 쓰기지연
![persistence_context_2](@src/persistence_context_2.png)
```text
영속성 컨텍스트에 Entity 를 등록하면 DB 에 바로 SQL 를 질의하는게 아니라, 쓰기지연 SQL 저장소에
SQL 을 가지고 있다가 Commit 될 때 SQL 을 DB 에 질의한다.
```


### 변경감지
![persistence_context_3](@src/persistence_context_3.png)
```text
영속성 컨텍스트에 등록 된 Entity 가 변경이 되면, 변경사항을 자동으로 감지하고 DB 에 UPDATE SQL 을 
질의 해준다.
```

