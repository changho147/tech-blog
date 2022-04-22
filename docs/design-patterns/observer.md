# Observer

## 다이어그램

![observer](@src/observer_diagram.png)

## 설명

다수의 객체가 특정객체 변화를 감지하고 알림을 받을 수 있는 패턴

## Observer 구현

![observer](@src/observer_diagram_2.png)

_Diagram 중, Observer 에 속하는 Observer 클래스_
```java
public interface Observer {
    void update(String message);
}
```

_Diagram 중, ConcreteObserver 에 속하는 User 클래스_
```java
public class User implements Observer {

    @Override
    public void update(String message) {
        System.out.println("Received, [" + message + "]");
    }
}
```

_Diagram 중, Subject 에 속하는 Notice 클래스_
```java
public class Notice {
    private final List<Observer> subscribers = new ArrayList<>();

    public void subscribe(Observer observer) {
        if (observer == null)
            throw new NullPointerException();

        subscribers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        subscribers.remove(observer);
    }

    public void notify(String message) {
        subscribers.forEach(observer -> observer.update(message));
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Notice notice = new Notice();

        Observer user1 = new User();
        Observer user2 = new User();

        notice.subscribe(user1);
        notice.subscribe(user2);

        notice.notify("Notice 1");
        notice.notify("Notice 2");

//        Received, [Notice 1]
//        Received, [Notice 1]
//        Received, [Notice 2]
//        Received, [Notice 2]
    }
}
```

<br><br>

* 장점
    * 상태를 변경하는 객체, 변경을 감지하는 객체 사이의 관계를 느슨하게 유지할 수 있다.
    * runtime 시에 observer 를 추가하거나 삭제할 수 있다.

* 단점
    * 복잡도가 증가한다.
    * observer 를 등록하고, 해지를 하지 않는다면 추후, 메모리 누수가 발생할 수 있다.