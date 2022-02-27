# Prototype

## 다이어그램

![prototype](@src/prototype_diagram.png)

## 설명

기존 인스턴스를 프로토타입으로 사용 해, 새로운 인스턴스를 만드는 패턴

## Prototype 구현

![prototype](@src/prototype_diagram_2.png)

_자전거 목록을 가지고오는 Repository 클래스_
```java
public class BicycleRepository {
    public List<String> loadItems() {
        List<String> items = new ArrayList<>();

        items.add("Road Bike");
        items.add("Mountain Bike");
        items.add("Hybrid Bike");
        items.add("Folding Bike");

        return items;
    }
}
```

_Cloneable 을 구현한 Store 클래스_
```java
public class BicycleStore implements Cloneable {
    private List<String> bicycles;

    public List<String> getBicycles() {
        return bicycles;
    }

    public void setBicycles(List<String> bicycles) {
        this.bicycles = bicycles;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        /** Deep Copy
            BicycleStore bicycleStore = new BicycleStore();
            bicycleStore.setBicycles(this.bicycles);
            return bicycleStore;
        **/
        
        return super.clone(); // Shallow Copy
    }
}
```
::: tip
    Cloneable 을 구현한 Clone() 메소드는 Shallow Copy(얇은복사) 이다.
    만약 Cloneable 을 구현한 클래스 내부에, 참조하고 있는 부분이 바뀌면 Clone 으로 생성한
    인스턴스의 값도 바뀐다.

    Deep Copy(깊은복사)를 하고 싶다면, Clone() 메소드를 직접구현하는 방법이 있다.
:::

<br><br>

```java
public class App {
    public static void main(String[] args) throws CloneNotSupportedException {
        BicycleRepository repository = new BicycleRepository();
        List<String> items = repository.loadItems();

        BicycleStore prototypeStore = new BicycleStore();
        prototypeStore.setBicycles(items);

        System.out.println(prototypeStore.getBicycles()); // [Road Bike, Mountain Bike, Hybrid Bike, Folding Bike]

        BicycleStore firstStore = (BicycleStore) prototypeStore.clone();
        System.out.println(firstStore); // [Road Bike, Mountain Bike, Hybrid Bike, Folding Bike]

    }
}
```

<br><br>

* 장점
    * 복잡한 인스턴스를 만드는방법을 숨길 수 있다.
    * 인스턴스를 생성하는 비용이 값비싸다면(DB 에서 데이터를 가지고오거나 통신 등...), 데이터 로드가 끝난 하나의 인스턴스를 복제하는 것이 효율적일 수 있다.

* 단점
    * 인스턴스를 생성하는 과정이 복잡할 수 있다.(특히, 순환참조가 있는경우)