# Mediator

## 다이어그램

![mediator](@src/mediator_diagram.png)

## 설명

여러 객체들이 상호작용 하는 방법을 캡슐화하여 결합도를 낮추는 패턴

## Mediator 구현

![mediator](@src/mediator_diagram_2.png)

_Diagram 중, Mediator 에 속하는 Mediator 클래스
```java
public interface Mediator {
    void add(User user);

    void send(User user, String message);
}
```

_Diagram 중, ConcreteMediator 에 속하는 ChatMediator 클래스_
```java
public class ChatMediator implements Mediator {
    private final List<User> users;

    public ChatMediator() {
        this.users = new ArrayList<>();
    }

    @Override
    public void add(User user) {
        this.users.add(user);
    }

    @Override
    public void send(User user, String message) {
        users.stream().filter(item -> item != user).forEach(item -> item.receive(message));
    }
}
```

_Diagram 중, Colleague 에 속하는 User 클래스_

```java
public class User {
    private final Mediator mediator;
    private final String name;

    public User(Mediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public void send(String message) {
        System.out.println(this.name + " SENDING MESSAGE: " + message);
        this.mediator.send(this, message);
    }

    public void receive(String message) {
        System.out.println(this.name + " RECEIVED MESSAGE: " + message);
    }
} 
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Mediator mediator = new ChatMediator();

        User user1 = new User(mediator, "Lee");
        User user2 = new User(mediator, "Park");
        User user3 = new User(mediator, "Kim");

        mediator.add(user1);
        mediator.add(user2);
        mediator.add(user3);

        user1.send("Hi, Good Day.");
        
        // Lee SENDING MESSAGE: Hi, Good Day.
        // Park RECEIVED MESSAGE: Hi, Good Day.
        // Kim RECEIVED MESSAGE: Hi, Good Day.
    }
}
```

<br><br>

* 장점
    * 다른 객체와 상호작용 하는 코드가 한곳에 집중되어 있어 코드를 간결하게 유지할 수 있다.

* 단점
    * 중재자 역할을 하는 클래스의 복잡도와 결합도가 증가한다.