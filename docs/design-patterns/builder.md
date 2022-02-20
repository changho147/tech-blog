# Builder

## 다이어그램

![builder](@src/builder_diagram.png)

## 설명

인스턴스를 만드는 프로세스를 독립적으로 분리하는 패턴

## Builder 구현

![builder](@src/builder_diagram_2.png)

_인스턴스로 생성 할 클래스_
```java
public class Bicycle {
    private String name;
    private String color;
    private Long since;

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

    public Long getSince() {
        return since;
    }

    public void setSince(Long since) {
        this.since = since;
    }
}
```

_Builder 클래스_
```java
public interface BicycleBuilder {

    BicycleBuilder newInstance();

    BicycleBuilder name(String name);

    BicycleBuilder color(String name);

    BicycleBuilder since(Long name);

    Bicycle build();
}

public class DefaultBicycleBuilder implements BicycleBuilder {

    private Bicycle instance;

    @Override
    public BicycleBuilder newInstance() {
        this.instance = new Bicycle();

        return this;
    }

    @Override
    public BicycleBuilder name(String name) {
        instance.setName(name);

        return this;
    }

    @Override
    public BicycleBuilder color(String color) {
        instance.setColor(color);

        return this;
    }

    @Override
    public BicycleBuilder since(Long since) {
        instance.setSince(since);

        return this;
    }

    @Override
    public Bicycle build() {
        return instance;
    }
}
```

_Director 클래스_

Director 클래스를 이용하게 되면, Builder 클래스를 이용하여 생성하는 객체를 템플릿화 하여 객체를 생성할 수 있다
```java
public class BicycleDirector {

    private final BicycleBuilder builder;

    public BicycleDirector(BicycleBuilder builder) {
        this.builder = builder;
    }

    public Bicycle createRoadBicycle() {
        return builder.newInstance()
                .name("Road Bicycle")
                .color("Black")
                .since(2022L)
                .build();
    }

    public Bicycle createMountainBicycle() {
        return builder.newInstance()
                .name("MOuntain Bicycle")
                .color("White")
                .since(2000L)
                .build();
    }
}
```

<br><br>

```java
* Director 클래스를 이용하여 생성하는 방법
public class App {
    public static void main(String[] args) {
        BicycleDirector director = new BicycleDirector(new DefaultBicycleBuilder());
        Bicycle roadBicycle = director.createRoadBicycle();
        Bicycle mountainBicycle = director.createMountainBicycle();
    }
}

* Builder 클래스를 직접 사용하여 생성하는 방법
public class App {
    public static void main(String[] args) {
        DefaultBicycleBuilder builder = new DefaultBicycleBuilder();
        Bicycle bicycle = builder.newInstance()
                .name("Bianchi Road")
                .color("Black")
                .build();
    }
}
```
_**Director 이나 Builder 를 통하여 객체를 생성.**_

<br><br>

* 장점
  * 복작한 객체를 순차적으로 생성
  * 복작한 객체를 생성하는 과정을 캡슐화
  * 동일한 프로세스를 통해 각각 다른 객체를 생성할 수 있다
  * 불완전한 객체를 사용하지 못하도록 방지
  
* 단점
  * 객체를 만들기 위한 구조가 복잡