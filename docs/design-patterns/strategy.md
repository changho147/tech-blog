# Strategy

## 다이어그램

![strategy](@src/strategy_diagram.png)

## 설명

알고리즘을 캡슐화하고 상황에 맞게 교체 가능하게 만드는 패턴

## Strategy 구현

![strategy](@src/strategy_diagram_2.png)

_Diagram 중, Context 에 속하는 CoffeeMachine 클래스_
```java
public class CoffeeMachine {

    public void addEspresso(Espresso strategy) {
        strategy.addEspresso();
    }
}
```

_Diagram 중, Strategy 에 속하는 Espresso 클래스_
```java
public interface Espresso {

    void addEspresso();
}
```

_Diagram 중, ConcreteStrategy 에 속하는 DeepEspressoStrategy, SoftEspressoStrategy 클래스_
```java
public class DeepEspressoStrategy implements Espresso {
    @Override
    public void addEspresso() {
        System.out.println("Added Deep Espresso.");
    }
}

public class SoftEspressoStrategy implements Espresso {
    @Override
    public void addEspresso() {
        System.out.println("Added Soft Espresso.");
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        CoffeeMachine coffeeMachine = new CoffeeMachine();

        coffeeMachine.addEspresso(new DeepEspressoStrategy()); // Added Deep Espresso.

        coffeeMachine.addEspresso(new SoftEspressoStrategy()); // Added Soft Espresso.

        // concreteStrategy class 를 따로 만들지않고, 익명으로도 가능.
        coffeeMachine.addEspresso(() -> System.out.println("Added Espresso.")); // Added Espresso.
    }
}
```

<br><br>

* 장점
    * 새로운 strategy 가 추가되더라도 기존 코드는 변경되지 않는다.
    * 런타임 시에도 strategy 를 변경할 수 있다.

* 단점
    * 복잡도가 증가한다.
    * client 가 전략을 알고 있어야 한다.