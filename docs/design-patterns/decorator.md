# Decorator

## 다이어그램

![decorator](@src/decorator_diagram.png)

## 설명

객체의 결합을 통하여, 기능을 동적으로 유연하게 확장할 수 있게 만드는 패턴

## Decorator 구현

![decorator](@src/decorator_diagram_2.png)

_Diagram 중, Component 에 속하는 Computer 클래스_
```java
public interface Computer {
    void addPart();
}
```

_Diagram 중, ConcreteComponent 에 속하는 DefaultComputer 클래스_
```java
public class DefaultComputer implements Computer {

    @Override
    public void addPart() {
        System.out.print("Basic Computer.");
    }
}
```

_Diagram 중, Decorator 에 속하는 ComputerDecorator 클래스_
```java
public class ComputerDecorator implements Computer {

    private Computer computer;

    public ComputerDecorator(Computer computer) {
        this.computer = computer;
    }

    @Override
    public void addPart() {
        computer.addPart();
    }
}
```

_Diagram 중, Concrete Decorator 1 에 속하는 GraphicCardDecorator 클래스_
```java
public class GraphicCardDecorator extends ComputerDecorator {

    public GraphicCardDecorator(Computer computer) {
        super(computer);
    }

    @Override
    public void addPart() {
        super.addPart();
        System.out.print(" with Graphic Card.");
    }
}
```

_Diagram 중, Concrete Decorator 2 에 속하는 SoundCardDecorator 클래스_
```java
public class SoundCardDecorator extends ComputerDecorator {
    public SoundCardDecorator(Computer computer) {
        super(computer);
    }

    @Override
    public void addPart() {
        super.addPart();
        System.out.print(" with Sound Card.");
    }
}
```

<br><br>

```java
public class App {

    public static boolean ENABLED_GRAPHIC_CARD = true;
    public static boolean ENABLED_SOUND_CARD = true;

    public static void main(String[] args) {
        Computer computer = new DefaultComputer();

        if (ENABLED_GRAPHIC_CARD)
            computer = new GraphicCardDecorator(computer);
        if (ENABLED_SOUND_CARD)
            computer = new SoundCardDecorator(computer);

        computer.addPart(); // 상태에 따라 "with Graphic Card." 나 "with Sound Card." 가 추가 됨
    }
}
```

<br><br>

* 장점
    * 새로운 클래스를 만들지 않고 기능을 추가할 수 있다.
    * 컴파일 타임이 아닌 런타임에 동적으로 기능을 변경할 수 있다.

* 단점
    * 복잡도가 증가할 수 있다.