# Factory Method

## 다이어그램

![factory_method](@src/factory_method_diagram.png)

## 설명

객체를 생성하기 위한 인터페이스를 정의하는데, 어떤 클래스의 인스턴스를 만들지는 서브클래스에서 결정하게 하는 패턴

## Factory Method 구현

![factory_method](@src/factory_method_diagram_2.png)

_인스턴스로 생성 할 기본 클래스와, 기본 클래스를 상속하여 만든 클래스_
```java
public class Bicycle {
    String name;
    String color;

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
}

public class RoadBicycle extends Bicycle {
    public RoadBicycle(String name, String color) {
        setName(name);
        setColor(color);
    }
}

public class MountainBicycle extends Bicycle {
    public MountainBicycle(String name, String color) {
        setName(name);
        setColor(color);
    }
}
```

_팩토리 인터페이스와 인터페이스 내 createBicycle 메소드를 구현한 각 팩토리 클래스_
```java
public interface BicycleFactory {
    default Bicycle orderBicycle(String name, String color) {
        return createBicycle(name, color);
    }

    Bicycle createBicycle(String name, String color);
}

public class RoadBicycleFactory implements BicycleFactory {
    @Override
    public Bicycle createBicycle(String name, String color) {
        return new RoadBicycle(name, color);
    }
}

public class MountainBicycleFactory implements BicycleFactory {
    @Override
    public Bicycle createBicycle(String name, String color) {
        return new MountainBicycle(name, color);
    }
}
```
<br><br>
```java
public class App {
    public static void main(String[] args) {
        Bicycle roadBicycle = new RoadBicycleFactory().orderBicycle("road", "black");
        
        Bicycle mountainBicycle = new MountainBicycleFactory().orderBicycle("mountain", "red");
    }
}
```

roadBicycle, mountainBicycle 의 인스턴스를 생성할 때, BicycleFactory 를 구현한 각각의 팩토리클래스에서 생성한다.

<br><br>

* 장점
  * 새로운 요구사항이 들어오더라도 기존코드를 변경하지 않고, 새로운 요구사항에 대하여 확장이 유연.
  * 객체간의 느슨한 결합.

* 단점
    * 각각의 역할에 맞게 클래스가 나뉘어져, 클래스가 많아진다.