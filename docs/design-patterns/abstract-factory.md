# Abstract Factory

## 다이어그램

![abstract_factory](@src/abstract_factory_diagram.png)

## 설명

서로 관련성이 있거나 독립적인 여러 객체의 군을 생성하기 위한 인터페이스를 제공하는 패턴

## Abstract Factory 구현

![abstract_factory](@src/abstract_factory_diagram_2.png)

_인스턴스로 생성 할 기본 클래스와, 기본 클래스를 상속하여 만든 클래스_
```java
public class Bicycle {
    private String name;
    private String color;
    private Handle handle;
    private Wheel wheel;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Handle getHandle() {
        return handle;
    }

    public void setHandle(Handle handle) {
        this.handle = handle;
    }

    public Wheel getWheel() {
        return wheel;
    }

    public void setWheel(Wheel wheel) {
        this.wheel = wheel;
    }
}

public class RoadBicycle extends Bicycle {

}
```


_생성 할 인스턴스와 관련이 있는 클래스_
```java
public interface Handle {

}

public class GiantRoadHandle implements Handle {

}

public class BianchiRoadHandle implements Handle {
    
}


public interface Wheel {
    
}

public class GiantRoadWheel implements Wheel {
    
}

public class BianchiRoadWheel implements Wheel {
    
}
```

_관련있는 클래스를 생성해주는 Factory_
```java
public interface BicyclePartsFactory {
    Handle createHandle();

    Wheel createWheel();
}


public class GiantRoadPartsFactory implements BicyclePartsFactory {
    @Override
    public Handle createHandle() {
        return new GiantRoadHandle();
    }

    @Override
    public Wheel createWheel() {
        return new GiantRoadWheel();
    }
}


public class BianchiRoadBicyclePartsFactory implements BicyclePartsFactory {
    @Override
    public Handle createHandle() {
        return new BianchiRoadHandle();
    }

    @Override
    public Wheel createWheel() {
        return new BianchiRoadWheel();
    }
}
```
GiantRoadBicycle, BianchiRoadBicycle Factory 클래스에서 각각의 인스턴스를 생성하여 리턴한다.

<br><br>

_인스턴스를 생성 할 Factory_
```java
public interface BicycleFactory {
    default Bicycle orderBicycle() {
        return createBicycle();
    }

    Bicycle createBicycle();
}

public class RoadBicycleFactory implements BicycleFactory {

    private final BicyclePartsFactory bicyclePartsFactory;

    public RoadBicycleFactory(BicyclePartsFactory factory) {
        this.bicyclePartsFactory = factory;
    }

    @Override
    public Bicycle createBicycle() {
        Bicycle bicycle = new RoadBicycle();
        bicycle.setHandle(bicyclePartsFactory.createHandle());
        bicycle.setWheel(bicyclePartsFactory.createWheel());

        return bicycle;
    }
}
```
<br><br>
```java
public class App {
    public static void main(String[] args) {
        Bicycle giantRoad = new RoadBicycleFactory(new GiantRoadPartsFactory()).orderBicycle();
        System.out.println(giantRoad.getHandle().getClass()); // GiantRoadHandle
        System.out.println(giantRoad.getWheel().getClass()); // GiantRoadWheel

        Bicycle bianchiRoad = new RoadBicycleFactory(new BianchiRoadBicyclePartsFactory()).orderBicycle();
        System.out.println(bianchiRoad.getHandle().getClass()); // BianchiRoadHandle
        System.out.println(bianchiRoad.getWheel().getClass()); // BianchiRoadWheel
    }
}
```

_**인스턴스를 생성할 때, RoadBicycleFactory 에 각 부품들을 생성할 Factory 클래스를 인자로 주입하여 생성.**_

<br><br>

* 장점
  * 새로운 요구사항이 들어오더라도 기존코드를 변경하지 않고, 새로운 요구사항에 대하여 확장이 유연.
  * 객체간의 느슨한 결합.

* 단점
  * 각각의 역할에 맞게 클래스가 나뉘어져, 클래스가 많아진다.

<br>

::: tip Factory Method 와 Abstract Factory 의 차이점
* **Factory Method**
  * **`Factory를 구현하는 방법(inheritance)` 에 초점**
  * **구체적인 객체 생성과정을 서브클래스 또는 구체적인 클래스로 옮기는 것에 초점**

* **Abstract Factory**
  * **`Factory를 사용하는 방법(composition)` 에 초점**
  * **관련있거나 독립적인 여러 객체를 서브클래스 또는 구체적인 클래스에 의존하지 않고 만들 수 있게 해주는 것에 초점**
:::