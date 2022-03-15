# Facade

## 다이어그램

![facade](@src/facade_diagram.png)

## 설명

서브시스템들을 더 쉽게 사용할 수 있게 단순화된 상위 수준의 인터페이스를 정의하는 패턴

## Facade 구현

![facade](@src/facade_diagram_2.png)

_Diagram 중, SubSystem 에 속하는 MessageSender, Message 클래스_
```java
public class MessageSender {
    private String from;
    private String to;

    public MessageSender(String from, String to) {
        this.from = from;
        this.to = to;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public void send(Message message) {
        System.out.printf("Send Messages From %s. To %s.%n", this.from, this.to);
        System.out.printf("Message Title %s. Contents %s", message.getTitle(), message.getContents());
    }
}

public class Message {
    private String title;
    private String contents;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }
}
```

_Diagram 중, Facade 에 속하는 MessageFacade 클래스_
```java
public class MessageFacade {
    public void sendMessage(String from, String to, String title, String contents) {
        MessageSender messageSender = new MessageSender(from, to);

        Message message = new Message();
        message.setTitle(title);
        message.setContents(contents);

        messageSender.send(message);
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        MessageFacade messageFacade = new MessageFacade();
        messageFacade.sendMessage("me", "you", "Hi", "This is Contents");
        // Send Messages From me. To you.
        // Message Title Hi. Contents This is Contents.
    }
}
```

<br><br>

* 장점
    * 서브시스템의 대한 의존성을 한곳으로 모을 수 있다.
    * 특정기능을 구현하는 서브시스템들의 복잡성이 증가할 때, 이를 해소할 수 있다.

* 단점
    * 퍼사드 클래스가 서브시스템에 대한 모든 의존성을 가지게 된다.