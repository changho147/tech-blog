# Adapter

## 다이어그램

![Adapter](@src/adapter_diagram.png)

## 설명

클래스의 인터페이스를 클라이언트에서 사용하고자하는 다른 인터페이스로 변환하는 패턴

## Adapter 구현

![Adapter](@src/adapter_diagram_2.png)

_외부 라이브러리 클래스_
```java
public class ExternalLoader {
    public String load(String item) {
        return String.format("Loaded %s Item by ExternalLoader.", item);
    }
}
```

_Loader 인터페이스와 인터페이스를 구현하는 클래스_
```java 
public interface Loader {
    String load(String item);
}

public class ItemLoader implements Loader {
    @Override
    public String load(String item) {
        return String.format("Loaded %s Item by ItemLoader.", item);
    }
}
```

_service 클래스_
```java
public class LoaderService {
    Loader loader;

    public LoaderService(Loader loader) {
        this.loader = loader;
    }

    public String loadItems(String item) {
        return loader.load(item);
    }
}
```

_외부 라이브러리와 사용하고자 하는 다른 인터페이스로 바꿔주는 adapter 클래스_
```java
public class LoaderAdapter implements Loader {

    private final ExternalLoader loader;

    public LoaderAdapter(ExternalLoader loader) {
        this.loader = loader;
    }

    @Override
    public String load(String item) {
        return loader.load(item);
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        LoaderService localService = new LoaderService(new ItemLoader());
        String loadedLocalItem = localService.loadItems("Local");

        System.out.println(loadedLocalItem); // Loaded Local Item by ItemLoader.

        LoaderAdapter loaderAdapter = new LoaderAdapter(new ExternalLoader());
        LoaderService externalService = new LoaderService(loaderAdapter);

        String loadedExternalItem = externalService.loadItems("External");

        System.out.println(loadedExternalItem); // Loaded External Item by ExternalLoader.
    }
}
```

<br><br>

* 장점
    * 기존코드를 변경하지 않고, 인터페이스 구현체를 만들어 사용할 수 있다.(SOLID 원칙 중, OCP)
    * 기존코드가 하던 일과 특정 인터페이스 구현체로 변환하는 작업을 각기 다른 클래스로 분리하여 관리할 수 있다.(SOLID 원칙 중, SRP)

* 단점
    * 새 클래스가 생겨 복잡도가 증가할 수 있다. 경우에 따라서는 기존 코드가 해당 인터페이스를 구현하도록 수정하는 것이 좋은 선택이 될 수도 있다.