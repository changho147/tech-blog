# Proxy

## 다이어그램

![proxy](@src/proxy_diagram.png)

## 설명

특정 객체를 사용하고자 할 때, 직접 호출하지 않고 해당 객체를 대행하는 역할을 하여 객체에 대한 접근을 
제어하거나 기능을 추가할 수 있는 패턴

## Proxy 구현

![proxy](@src/proxy_diagram_2.png)

_Diagram 중, Subject 에 속하는 Printable 클래스_
```java
public interface Printable {
    void print(String text);
}
```

_Diagram 중, RealSubject 에 속하는 Printer 클래스_
```java
public class Printer implements Printable {

    @Override
    public void print(String text) {
        System.out.println(text);
    }
}
```

_Diagram 중, Proxy 에 속하는 PrinterProxy 클래스_
```java
public class PrinterProxy extends Printer implements Printable {
    private Printer printer;

    public PrinterProxy(Printer printer) {
        this.printer = printer;
    }

    @Override
    public void print(String text) {
        System.out.println("[Start Print] " + getTime());
        this.printer.print(text);
        System.out.println("[End Print] " + getTime());
    }

    private String getTime() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Printable proxy = new PrinterProxy(new Printer());
        proxy.print("Printing...");
        
        // [Start Print] 2022-03-15 15:51:13
        // Printing...
        // [End Print] 2022-03-15 15:51:14
    }
}
```

<br>

::: tip 구현방법에 따라 다양한 Proxy
    특정객체 접근에 제한을 두거나, 지연생성, 로그 등
    Proxy 에서 어떻게 구현하냐에 따라 다양하게 활용이 가능하다.
:::

<br><br>

* 장점
    * 코드를 변경하지 않고, 새로운 기능을 추가할 수 있다. (SOLID 중, OCP)
    * 구현방법에 따라 다양하게 활용이 가능하다.

* 단점
    * 패턴을 사용하지 않았을때보다 코드의 복잡도가 증가한다.