# Template Method

## 다이어그램

![template-method](@src/template_method_diagram.png)

## 설명

알고리즘이 정의된 템플릿 구조를 서브클래스가 확장할 수 있도록 제공하는 패턴

## Template Method 구현

![template-method](@src/template_method_diagram_2.png)

_Diagram 중, AbstractClass 에 속하는 RobotFactory 클래스_
```java
public abstract class RobotFactory {

    public void make() {
        addHead();
        addBody();
        addReg();
        addWeapon();
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

    protected abstract void addWeapon();
}
```

_Diagram 중, ConcreteClass 에 속하는 DrillRobotFactory, MissileRobotFactory 클래스_
```java
public class DrillRobotFactory extends RobotFactory {
    @Override
    protected void addWeapon() {
        System.out.println("Added Drill Weapon");
    }
}

public class MissileRobotFactory extends RobotFactory {
    @Override
    protected void addWeapon() {
        System.out.println("Added Missile Weapon");
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        RobotFactory drillRobotFactory = new DrillRobotFactory();
        drillRobotFactory.make();
//        Added Head
//        Added Body
//        Added Reg
//        Added Drill Weapon

        RobotFactory missileRobotFactory = new MissileRobotFactory();
        missileRobotFactory.make();
//        Added Head
//        Added Body
//        Added Reg
//        Added Missile Weapon

        RobotFactory robotFactory = new RobotFactory() {
            @Override
            protected void addWeapon() {
                System.out.println("Not Exist Weapon");
            }
        };
        robotFactory.make();
//        Added Head
//        Added Body
//        Added Reg
//        Not Exist Weapon
    }
}
```

<br><br>

* 장점
    * 템플릿을 사용하여 중복코드를 줄일 수 있다.

* 단점
    * 상속을 받아 구현을 하기 때문에, 리스코프 치환원칙을 위반할 수도 있다.
    * 알고리즘 구조가 복잡해질수록 템플릿을 유지하기가 어려워진다.