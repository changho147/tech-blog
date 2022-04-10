# Memento

## 다이어그램

![memento](@src/memento_diagram.png)

## 설명

객체의 상태를 저장하거나 이전의 상태로 복원할 수 있게 만드는 패턴

## Memento 구현

![memento](@src/memento_diagram_2.png)

_Diagram 중, Originator 에 속하는 Originator 클래스_
```java
public class Originator {
    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Memento save() {
        return new Memento(this.state);
    }

    public void restore(Memento memento) {
        state = memento.getState();
    }
}
```

_Diagram 중, Memento 에 속하는 Memento 클래스_
```java
public final class Memento {
    private final String state;

    public Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}
```

_Diagram 중, CareTaker 에 속하는 CareTaker 클래스_
```java
public class CareTaker {
    private final List<Memento> mementos = new ArrayList<>();

    public void add(Memento memento) {
        mementos.add(memento);
    }

    public Memento get() {
        Memento memento = mementos.get(mementos.size() - 1);
        mementos.remove(mementos.size() - 1);

        return memento;
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Originator originator = new Originator();
        CareTaker careTaker = new CareTaker();

        originator.setState("State #1");
        careTaker.add(originator.save());

        originator.setState("State #2");
        originator.setState("State #3");
        careTaker.add(originator.save());
        originator.setState("State #4");

        System.out.println(originator.getState()); // State #4

        originator.restore(careTaker.get());
        System.out.println(originator.getState()); // State #3

        originator.restore(careTaker.get());
        System.out.println(originator.getState()); // State #1
    }
}
```

<br><br>

* 장점
    * 캡슐화를 유지하면서 객체의 상태 스냅샷을 만들 수 있다.
    * 객체 내부의 상태가 바뀌어도, 클라이언트 코드는 바뀌지 않는다. (SOLID 중, OCP)

* 단점
    * 많은정보를 저장하는 Memento 의 경우, 메모리 사용량에 영향을 줄 수 있다.