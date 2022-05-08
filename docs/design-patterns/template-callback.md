# Template Callback

## 다이어그램

![template-callback](@src/template_callback_diagram.png)

## 설명

Strategy 패턴과 Template Method 패턴이 합쳐진 형태로, Template Method 패턴에서 상속대신 위임을 사용하는 패턴

## Template Callback 구현

![template-callback](@src/template_callback_diagram_2.png)

_Diagram 중, AbstractClass 에 속하는 RobotFactory 클래스_
```java
public class RobotFactory {
    public void make(String weapon) {
        addHead();
        addBody();
        addReg();

        executeWeapon(weapon).addWeapon();
    }

    private void addHead() {
        System.out.println("Added Head");
    }

    private void addBody() {
        System.out.println("Added Body");
    }

    private void addReg() {
        System.out.println("Added Reg");
    }

    private Weapon executeWeapon(String weapon) {
        return () -> System.out.println("Added " + weapon);
    }
```

_Diagram 중, Callback 에 속하는 Weapon 클래스_
```java
public interface Weapon {
    void addWeapon();
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        RobotFactory robotFactory = new RobotFactory();

        robotFactory.make("Missile");
//        Added Head
//        Added Body
//        Added Reg
//        Added Missile

        robotFactory.make("Drill");
//        Added Head
//        Added Body
//        Added Reg
//        Added Drill
    }
}
```

<br><br>

* 장점
    * 템플릿을 사용하여 중복코드를 줄일 수 있다.
    * 어떤전략을 사용하는지 감출 수 있다.

* 단점
    * 클래스간의 결합도가 증가한다.