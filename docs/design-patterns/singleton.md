# Singleton

## 다이어그램

![singleton](@src/singleton_diagram.png)

## 설명

프로그램을 개발하다보면 인스턴스가 여러개일 때 문제가 생길 수 있는 경우가 있다.
<br>
이 경우, 인스턴스를 오직 하나만 생성할 수 있게 제한하는 패턴.

## Singleton 구현

**_Lazy-Initialize Singleton_**
```java
public class SingletonInstance {
    private static SingletonInstance instance;

    private SingletonInstance() {}

    public static SingletonInstance getInstance() {
        if (instance == null)
            instance = new SingletonInstance();

        return instance;
    }
}
```
`SingletonInstance` 인스턴스를 생성할 때, new 키워드 대신 static method 인 `getInstance` method 를 호출하여 인스턴스를 사용.
<br>
* 장점
  * Lazy-Initialize 작동방식으로 사용 시, 인스턴스를 생성하기 때문에, 메모리 최적화
  
* 단점
  * Single Thread 에서는 안전하지만, Multi Thread 에서 문제가 생길 수 있음

<br><br>

**_Synchronized Singleton_**
```java
public class SingletonInstance {
    private static SingletonInstance instance;

    private SingletonInstance() {}

    public static synchronized SingletonInstance getInstance() {
        if (instance == null)
            instance = new SingletonInstance();

        return instance;
    }
}
```
`getInstance` method 를 호출할 때, _synchronized_ 키워드를 통해 여러 Thread 의 접근을 막아 Multi Thread 인 상황에서 안정성을 보장.
<br>
* 장점
  * Lazy-Initialize 작동방식으로 사용 시, 인스턴스를 생성하기 때문에, 메모리 최적화
  * Single Thread, Multi Thread 에서 단일 인스턴스 보장

* 단점
  * _synchronized lock_ 으로 인해 한번에 하나의 Thread 만 접근할 수 있기 때문에 속도가 느려질 수 있음

<br><br>

**_Eager-Initialize Singleton_**
```java
public class SingletonInstance {
    private static final SingletonInstance INSTANCE = new SingletonInstance();

    private SingletonInstance() {}

    public static SingletonInstance getInstance() {
        return INSTANCE;
    }
}
```
App 이 구동될 때 ``SingletonInstance`` 인스턴스를 생성하고, 생성된 인스턴스를 ``getInstance`` method 를 호출하여 인스턴스를 사용.
<br>
* 장점
    * Single Thread, Multi Thread 에서 단일 인스턴스 보장

* 단점
    * Eager-Initialize 이기 때문에, 만약 생성하는 인스턴스가 비용이 비싼 객채면 최적화에 문제가 생길 수 있음

<br><br>

**_Double-checked Locking Singleton_**
```java
public class SingletonInstance {
    private static volatile SingletonInstance instance;

    private SingletonInstance() {}

    public static SingletonInstance getInstance() {
        if (instance == null) {
            synchronized (SingletonInstance.class) {
                if (instance == null)
                    instance = new SingletonInstance();
            }
        }

        return instance;
    }
}
```
`getInstance` method 에 바로 _synchronized_ 키워드를 사용하지 않고, 인스턴스가 null 인 경우에만 _synchronized block_ 을 지정하여 lock 이 되는 상황을 최대한 방지하는 구현방식.  
<br>
* 장점
  * Single Thread, Multi Thread 에서 단일 인스턴스 보장
  * _synchronized_ 키워드를 인스턴스가 null 인 경우에만 사용되기 때문에, method 에 _synchronized_ 키워드를 사용할 때 보다 더 최적화

* 단점
  * Java 1.5 이상부터 사용가능
  * 코드 복잡도 상승

<br><br>

**_Inner-class(Holder) Singleton_**
```java
public class SingletonInstance {
    private SingletonInstance() {
    }

    public static SingletonInstance getInstance() {
        return SingletonInstanceHolder.INSTANCE;
    }

    private static class SingletonInstanceHolder {
        private static final SingletonInstance INSTANCE = new Settings();
    }
}
```
_synchronized_ 의 비싼 비용문제를 Lazy-initialize 방식으로 해결한 Singleton 구현방법.
<br>
* 장점
  * Single Thread, Multi Thread 에서 단일 인스턴스 보장
  * _synchronized_ 의 비싼 비용문제를 Lazy-initialize 방식으로 해결하여 Multi Thread 환경에서 최적화

* 단점
  * 리플렉션, 직렬화/역직렬화에 의해 Singleton 이 깨질 수 있음

_참고 Site_. [Initialization-on-demand holder](https://en.wikipedia.org/wiki/Initialization-on-demand_holder_idiom)

<br><br>

**_Enum Singleton_**
```java
public enum SingletonInstance {
    INSTANCE
}
```
enum 의 특성을 이용한 구현방법.
<br>
* 장점
  * 리플렉션, 직렬화/역직렬화 같은 예상치 못한 singleton 을 깨트리는 방식에 안전

* 단점
  * ....












