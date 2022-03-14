# Composite

## 다이어그램

![composite](@src/composite_diagram.png)

## 설명

개별객체와 복합객체를 동일하게 다룰 수 있게 만드는 패턴

## Composite 구현

![composite](@src/composite_diagram_2.png)

_Diagram 중, Component 에 속하는 Component 클래스_
```java
public interface Component {
    int getPrice();
}
```

_Diagram 중, Leaf 에 속하는 Item 클래스_
```java
public class Item implements Component {

    private String name;
    private int price;

    public Item(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
```

_Diagram 중, Composite 에 속하는 Orders 클래스_
```java
public class Orders implements Component {

    private List<Component> items = new ArrayList<>();

    public List<Component> getItems() {
        return items;
    }

    public void setItems(Component item) {
        this.items.add(item);
    }

    @Override
    public int getPrice() {
        return this.items.stream().mapToInt(Component::getPrice).sum();
    }
}
```


<br><br>

```java
public class App {
    public static void main(String[] args) {
        Component galaxy = new Item("Galaxy", 100_000_0);
        Component apple = new Item("Apple", 998_000);

        System.out.println(galaxy.getPrice()); // 1000000
        System.out.println(apple.getPrice()); // 998000

        Orders orders = new Orders();
        orders.setItems(galaxy);
        orders.setItems(apple);

        System.out.println(orders.getPrice()); // 1998000
    }
}
```

<br><br>

* 장점
    * 객체들을 모두 같은 타입으로 취급하기 때문에, 새로운 객체 추가가 용이하다.
    * 다형성과 재귀를 활용할 수 있다.

* 단점
    * 공통된 인터페이스를 정의해야 하기 때문에, 지나친 일반화를 해야하는 경우가 생길 수 있다.