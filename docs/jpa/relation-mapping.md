# 연관관계

### 테이블과 객체에서의 연관관계
![relation_mapping](@src/relation_mapping.png)
```text
개발 시 Oracle 이나 MySql 등 데이터베이스를 사용하다보면 다른 두 테이블간 관계를 맺기 위해서 다른 테이블의
외래키를 이용해서 두 테이블을 함께 조회한다. 그러나 객체는 다른 객체와 관계를 맺기 위해서 외래키대신 객체를 참조하여
서로 관계를 맺는데, JPA 가 제공하는 API 를 사용하여 데이터베이스와 객체의 연관관계를 맺는 방식의 차이점을
극복할 수 있다.
```

<br>

### N : 1 (@ManyToOne)
```java
@Entity
public class User {
    @Id @GeneratedValue
    @Column(name = "USER_ID")
    private Long entityId;

    @ManyToOne
    @JoinColumn(name = "SKILL_ID")
    private Skill skill;
}

@Entity
public class Skill {
    @Id @GeneratedValue
    @Column(name = "SKILL_ID")
    private Long id;
    
    // 양방향 관계 매핑 시
    @OneToMany(mappedBy = "skill")
    private List<User> users = new ArrayList<>();
}
```
* N 쪽 테이블에서 외래키를 관리 
* 가장 흔히 사용하는 연관관계

<br>

### 1 : N (@OneToMany)
```java
@Entity
public class Skill {
    @Id @GeneratedValue
    @Column(name = "SKILL_ID")
    private Long id;

    @OneToMany
    @JoinColumn(name = "SKILL_ID") // User Entity 에 있는 SKILL_ID 
    private List<User> users = new ArrayList<>();
}

@Entity
public class User {
    @Id @GeneratedValue
    @Column(name = "USER_ID")
    private Long entityId;
    
    // 양방향 관계 매핑 시
    @ManyToOne
    @JoinColumn(name = "SKILL_ID", insertable = false, updatable = false)
    private Skill skill;
}
```
::: tip
    @JoinColumn 을 사용하지 않으면, 자동으로 관계를 맺기위한 테이블이 생성되기 때문에 주의필요
:::

* 연관관계 주인은 1 에 있지만, 외래키는 N 테이블에서 관리
* 연관관계 주인이 아닌 쪽에 외래키가 존재 해, 복잡성이 증가
* Skill 을 저장하면, 외래키 때문에 User 에 Update Query 가 발생하기 때문에 성능악화 
* 특별한 경우가 아니라면 N : 1 양방향 관계로 해결하는 방식 추천

<br>

### 1 : 1 (@OneToOne)
```java
@Entity
public class User {
    @Id @GeneratedValue
    @Column(name = "USER_ID")
    private Long entityId;

    @OneToOne
    @JoinColumn(name = "SKILL_ID")
    private Skill skill;
}

@Entity
public class Skill {
    @Id @GeneratedValue
    @Column(name = "SKILL_ID")
    private Long id;
    
    // 양방향 관계 매핑 시
    @OneToOne(mappedBy = "skill")
    private User user;
}
```
* 주 테이블, 대상 테이블 어느곳에서도 외래키를 가지고 있어도 가능
* N : 1, 1 : N 관계와 유사

<br>

### N : M (@ManyToMany)
```java
@Entity
public class User {
    @Id @GeneratedValue
    @Column(name = "USER_ID")
    private Long entityId;

    @ManyToMany
    @JoinTable(name = "USER_SKILL",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "SKILL_ID"))
    private List<Skill> skills = new ArrayList<>();
}

@Entity
public class Skill {
    @Id @GeneratedValue
    @Column(name = "SKILL_ID")
    private Long id;

    @ManyToMany(mappedBy = "skills")
    private List<User> users = new ArrayList<>();
}
```

```text
관계형 데이터베이스는 정규화된 테이블 2개로 관계를 표현할 수 없다. 그래서 JPA 에서 N : M 관계를 맺게
되면 별도의 관계테이블을 생성하여 연관관게를 맺어준다.
```

* JPA Spec 상 N : M 연관관계를 지원하지만 실 사용 지양
* 의도치 않은 복잡한 질의가 나가 성능 최적화가 어렵다
* 자동으로 생성 된 관계테이블에 별도의 컬럼을 지정할 수 없다
* 특별한 경우가 아니면 N : 1 양방향 관계로 해결하는 방식 추천

<br>

### 연관관계 FetchType

| FetchType    |     |
|-----|-----|
| EAGER    | 즉시로딩    |
| LAZY    |  지연로딩   |

```text
Entity 간 연관관계를 맺을 때 FetchType 을 설정할 수 있다. Default 로 FetchType.EAGER 로 되어 있는데,
EAGER 로 설정되어 있으면, Entity 를 조회할때 연관관계가 맺어진 Entity 를 같이 한번의 질의로 조회해온다.
언뜻보면 좋아보일 수 있지만, 연관관계가 많거나 복잡할 경우, 사용하지 않는 Entity 를 전부 조회하기 때문에 
성능문제가 발생한다. 
LAZY 인 경우에는, Entity 내 연관된 객체가 참조가 될 때 질의문을 보내고 조회해오기 때문에, 객체를 참조하여 사용하기 전까진
불필요한 질의문이 나가지 않는다. 또, LAZY 로 설정한 경우에 성능을 최적화할 수 있는 방법이 존재하기 때문에, 무조건 LAZY 로
설정하는것은 추천한다.
```

_참고. 자바 ORM 표준 JPA 프로그래밍_