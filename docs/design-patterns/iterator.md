# Iterator

## 다이어그램

![iterator](@src/iterator_diagram.png)

## 설명

특정 객체의 내부구조를 노출시키지 않고 순회하는 방법을 제공하는 패턴

## Iterator 구현

![iterator](@src/iterator_diagram_2.png)

_Diagram 중, ConcreteIterator 에 속하는 DescendingPriceIterator 클래스
```java
public class DescendingPriceIterator implements Iterator<Item> {
    private final Iterator<Item> itemIterator;

    public DescendingPriceIterator(List<Item> items) {
        items.sort((p1, p2) -> p2.getPrice() - p1.getPrice());
        this.itemIterator = items.iterator();
    }

    @Override
    public boolean hasNext() {
        return itemIterator.hasNext();
    }

    @Override
    public Item next() {
        return itemIterator.next();
    }
}
```

_Diagram 중, ConcreteAggregate 에 속하는 Shop, Item 클래스_
```java
public class Shop {
    private List<Item> items = new ArrayList<>();

    public void addItem(String name, int price) {
        this.items.add(new Item(name, price));
    }

    public Iterator<Item> getDescendingPriceItertor() {
        return new DescendingPriceIterator(this.items);
    }
}

public class Item {
    private String name;
    private Integer price;

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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Shop shop = new Shop();

        shop.addItem("Water", 1_000);
        shop.addItem("Cookie", 450);
        shop.addItem("Rice", 700);

        Iterator<Item> itemIterator = shop.getDescendingPriceItertor();
        itemIterator.forEachRemaining(item -> System.out.printf("NAME: %s, PRICE: %s \r\n", item.getName(), item.getPrice()));
        
        // NAME: Water, PRICE: 1000 
        // NAME: Rice, PRICE: 700 
        // NAME: Cookie, PRICE: 450 
    }
}
```

<br><br>

* 장점
    * 객체 내부의 집합객체가 변화가 되어도 클라이언트는 코드를 수정 할 필요가 없어진다.
    * 일관된 인터페이스로 인하여, 여러형태의 집합 구조를 순회할 수 있다.

* 단점
    * 패턴을 사용하지 않았을때보다 클래스, 복잡도가 증가한다.