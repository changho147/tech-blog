# State

## 다이어그램

![state](@src/state_diagram.png)

## 설명

객체 내부의 상태에 따라 객체의 행동을 다르게 만들어주는 패턴

## State 구현

![state](@src/state_diagram_2.png)

_Diagram 중, State 에 속하는 State 클래스_
```java
public interface State {
    void pushOn();

    void pushOff();
}
```

_Diagram 중, ConcreteState 에 속하는 OnState, OffState 클래스_
```java
public class OnState implements State {
    private final Light light;

    public OnState(Light light) {
        this.light = light;
    }

    @Override
    public void pushOn() {
        System.out.println("Already turned On.");
    }

    @Override
    public void pushOff() {
        System.out.println("turn Off.");

        this.light.changeState(new OffState(light));
    }
}

public class OffState implements State {
    private Light light;

    public OffState(Light light) {
        this.light = light;
    }

    @Override
    public void pushOn() {
        System.out.println("turn On.");

        this.light.changeState(new OnState(light));
    }

    @Override
    public void pushOff() {
        System.out.println("Already turned Off.");
    }
}
```

_Diagram 중, Context 에 속하는 Light 클래스_
```java
public class Light {
    private State state = new OffState(this);

    public void pushOn() {
        state.pushOn();
    }

    public void pushOff() {
        state.pushOff();
    }

    public void changeState(State state) {
        this.state = state;
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Light light = new Light();

        light.pushOff(); // Already turned Off.

        light.pushOn(); // turn On.
        light.pushOff(); // turn Off.
    }
}
```

<br><br>

* 장점
    * state 에 따른 동작을 별도의 클래스로 나누어 관리할 수 있다.
    * 새로운 state 가 추가되어도 기존 코드를 변경하지 않고 새로운 동작을 추가할 수 있다.

* 단점
    * 소스 복잡도가 증가한다.