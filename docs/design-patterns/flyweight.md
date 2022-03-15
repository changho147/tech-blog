# Flyweight

## 다이어그램

![flyweight](@src/flyweight_diagram.png)

## 설명

자주 변하는속성(Extrinsit), 변하지 않는속성(Intrinsit)을 분리하고 재사용하여 메모리 사용을 줄이는 패턴

## Flyweight 구현

![flyweight](@src/flyweight_diagram_2.png)

_Diagram 중, Flyweight 에 속하는 Bicycle 클래스_
```java
public final class Bicycle {
    private final String type;
    private final String alias;

    public Bicycle(String type, String alias) {
        this.type = type;
        this.alias = alias;
    }

    public String getType() {
        return type;
    }

    public String getAlias() {
        return alias;
    }
}
```

_Diagram 중, FlyweightFactory 에 속하는 BicycleFactory 클래스_
```java
public class BicycleFactory {
    private final Map<String, Bicycle> bicycleMap = new HashMap<>();

    public Bicycle getBicycle(String key) {
        if (bicycleMap.containsKey(key))
            return bicycleMap.get(key);

        String[] splitKeys = key.split(":");
        Bicycle bicycle = new Bicycle(splitKeys[0], splitKeys[1]);
        bicycleMap.put(key, bicycle);

        return bicycle;
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        BicycleFactory factory = new BicycleFactory();

        Bicycle mountainBicycle = factory.getBicycle("mountain:Specialized");
        Bicycle roadBicycle = factory.getBicycle("road:Bianchi");

        System.out.printf("%s Bicycle. Alias %s.", mountainBicycle.getType(), mountainBicycle.getAlias()); // mountain Bicycle. Alias Specialized.
        System.out.printf("%s Bicycle. Alias %s.", roadBicycle.getType(), roadBicycle.getAlias()); // road Bicycle. Alias Bianchi.
    }
}
```

<br><br>

* 장점
    * App 에서 사용하는 메모리를 줄일 수 있다.

* 단점
    * 패턴을 사용하지 않았을때보다 코드의 복잡도가 증가한다.