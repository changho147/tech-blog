# Bridge

## 다이어그램

![bridge](@src/bridge_diagram.png)

## 설명

구체적인 것과 추상적인 것을 분리하여 각각 독립적으로 변형 및 확장이 가능하게 하는 패턴

## Bridge 구현

![bridge](@src/bridge_diagram_2.png)

_Diagram 중, Abstraction 에 속하는 Phone 클래스_
```java
public class Phone {
    private final Carrier carrier;

    public Phone(Carrier carrier) {
        this.carrier = carrier;
    }

    public void connect() {
        carrier.connect();
    }
}
```

_Diagram 중, Refined Abstraction 에 속하는 Galaxy, Apple 클래스_
```java
public class Galaxy extends Phone {
    public Galaxy(Carrier carrier) {
        super(carrier);
    }
}

public class Apple extends Phone {
    public Apple(Carrier carrier) {
        super(carrier);
    }
}
```

_Diagram 중, Implementation 에 속하는 Carrier 클래스_
```java
public interface Carrier {
    void connect();
}
```

_Diagram 중, Concrete Implementation 에 속하는 KtCarrier, SktCarrier 클래스_
```java
public class KtCarrier implements Carrier {
    @Override
    public void connect() {
        System.out.println("KT Network Connect.");
    }
}

public class SktCarrier implements Carrier {
    @Override
    public void connect() {
        System.out.println("SKT Network Connect.");
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Phone galaxy = new Galaxy(new KtCarrier());
        galaxy.connect(); // KT Network Connect.

        Phone apple = new Apple(new SktCarrier());
        apple.connect(); // SKT Network Connect.
    }
}
```

<br><br>

* 장점
    * 추상적인 코드를 구체적인 코드 변경 없이도 독립적으로 확장할 수 있다. (SOLID 원칙 중, OCP)
    * 추상적인 코드과 구체적인 코드를 분리할 수 있다.

* 단점
    * 계층구조가 늘어나 복잡도가 증가할 수 있다.