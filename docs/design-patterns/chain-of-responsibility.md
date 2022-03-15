# Chain Of Responsibility

## 다이어그램

![chain-of-responsibility](@src/chain_diagram.png)

## 설명

요청을 보내는 쪽과 요청을 처리하는 쪽의 결합을 느슨하게 하기 위한 패턴

## Chain Of Responsibility 구현

![chain-of-responsibility](@src/chain_diagram_2.png)

_Diagram 중, Handler 에 속하는 Logger 클래스_
```java
public abstract class Logger {
    public static int INFO = 1;
    public static int DEBUG = 2;
    public static int ERROR = 3;

    protected int logLevel;
    protected Logger nextLogger;

    public void setNextLogger(Logger logger) {
        this.nextLogger = logger;
    }

    protected abstract void handle(int level, String message);
}
```

_Diagram 중, Concrete Handler 에 속하는 InfoLogger, DebugLogger, ErrorLogger 클래스_
```java
public class InfoLogger extends Logger {

    public InfoLogger(int logLevel) {
        this.logLevel = logLevel;
    }

    @Override
    protected void handle(int level, String message) {
        if (this.logLevel <= level)
            System.out.println("[INFO] " + message);

        if (this.nextLogger != null)
            this.nextLogger.handle(level, message);
    }
}

public class DebugLogger extends Logger {
    public DebugLogger(int logLevel) {
        this.logLevel = logLevel;
    }

    @Override
    protected void handle(int level, String message) {
        if (this.logLevel <= level)
            System.out.println("[DEBUG] " + message);

        if (this.nextLogger != null)
            this.nextLogger.handle(level, message);
    }
}

public class ErrorLogger extends Logger {
    public ErrorLogger(int logLevel) {
        this.logLevel = logLevel;
    }

    @Override
    protected void handle(int level, String message) {
        if (this.logLevel <= level)
            System.out.println("[ERROR] " + message);

        if (this.nextLogger != null)
            this.nextLogger.handle(level, message);
    }
}
```

_Chain 을 하는 LoggerHandler 클래스_
```java
public class LoggerHandler {
    private Logger logger;

    public LoggerHandler() {
        Logger infoLogger = new InfoLogger(Logger.INFO);
        Logger debugLogger = new DebugLogger(Logger.DEBUG);
        Logger errorLogger = new ErrorLogger(Logger.ERROR);

        infoLogger.setNextLogger(debugLogger);
        debugLogger.setNextLogger(errorLogger);

        logger = infoLogger;
    }

    public Logger getLogger() {
        return logger;
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        Logger handler = new LoggerHandler().getLogger();

        handler.handle(Logger.INFO, "Info Message.");
        // [INFO] Info Message.

        handler.handle(Logger.DEBUG, "Debug Message.");
        // [INFO] Debug Message.
        // [DEBUG] Debug Message.

        handler.handle(Logger.ERROR, "Error Message.");
        // [INFO] Error Message.
        // [DEBUG] Error Message.
        // [ERROR] Error Message.
    }
}
```

<br><br>

* 장점
    * 요청자와 처리자 간의 결합이 느슨해진다.
    * 하나의 클래스가 하나의 역할을 한다. (SOLID 중, SRP)
    * 코드를 변경하지 않고 새로운 처리자를 추가할 수 있다. (SOLID 중, OCP)

* 단점
    * 복잡도가 올라가 디버깅이 힘들어진다.