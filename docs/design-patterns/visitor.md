# Visitor

## 다이어그램

![visitor](@src/visitor_diagram.png)

## 설명

구조를 변경하지 않고 새로운 기능을 추가하는 패턴

## Visitor 구현

![strategy](@src/visitor_diagram_2.png)

_Diagram 중, Element 에 속하는 Robot 클래스_
```java
public interface Robot {
    void work(Visitor visitor);
}
```

_Diagram 중, ConcreteElement 에 속하는 CleanRobot, CookRobot 클래스_
```java
public class CleanRobot implements Robot {
    String type;

    public CleanRobot(String type) {
        this.type = type;
    }

    @Override
    public void work(Visitor visitor) {
        visitor.work(this);
    }
}

public class CookRobot implements Robot {
    String type;

    public CookRobot(String type) {
        this.type = type;
    }

    @Override
    public void work(Visitor visitor) {
        visitor.work(this);
    }
}
```

_Diagram 중, Visitor 에 속하는 Visitor 클래스_
```java
public interface Visitor {

    void work(CleanRobot cleanRobot);

    void work(CookRobot cookRobot);
}
```

_Diagram 중, ConcreteVisitor 에 속하는 WorkVisitor 클래스_
```java
public class WorkVisitor implements Visitor {
    @Override
    public void work(CleanRobot cleanRobot) {
        System.out.println("The type of robot is " + cleanRobot.type);
    }

    @Override
    public void work(CookRobot cookRobot) {
        System.out.println("The type of robot is " + cookRobot.type);
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Robot cleanRobot = new CleanRobot("Clean");
        cleanRobot.work(new WorkVisitor()); // The type of robot is Clean

        Robot cookRobot = new CookRobot("Cook");
        cookRobot.work(new WorkVisitor()); // The type of robot is Cook
    }
}
```

<br><br>

* 장점
    * 기존코드를 변경하지 않고 새로운 기능을 추가할 수 있다.
    * 추가되는 기능을 한 곳에 모을 수 있다.

* 단점
    * 복잡도가 증가한다.
    * Element 가 변경되면 모든 Visitor 코드를 수정해야 한다.