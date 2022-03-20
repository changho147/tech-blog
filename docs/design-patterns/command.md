# Command

## 다이어그램

![command](@src/command_diagram.png)

## 설명

요청을 보내는 쪽과 요청을 처리하는 쪽의 결합을 느슨하게 하기 위한 패턴

## Command 구현

![command](@src/command_diagram_2.png)

_Diagram 중, Command 에 속하는 Command 클래스_
```java
public interface Command {
    void execute();
}
```

_Diagram 중, Concrete Command 에 속하는 PlayerOnCommand, PlayerOffCommand 클래스_
```java
public class PlayerOnCommand implements Command {
    private final MusicPlayer musicPlayer;

    public PlayerOnCommand(MusicPlayer musicPlayer) {
        this.musicPlayer = musicPlayer;
    }

    @Override
    public void execute() {
        musicPlayer.on();
    }
}

public class PlayerOffCommand implements Command {
    private final MusicPlayer musicPlayer;

    public PlayerOffCommand(MusicPlayer musicPlayer) {
        this.musicPlayer = musicPlayer;
    }

    @Override
    public void execute() {
        musicPlayer.off();
    }
}
```

_Diagram 중, Receiver 에 속하는 MusicPlayer 클래스_
```java
public class MusicPlayer {

    public void on() {
        System.out.println("Music On");
    }

    public void off() {
        System.out.println("Music Off");
    }
}
```

_Diagram 중, Invoker 에 속하는 PlayerController 클래스_
```java
public class PlayerController {
    Command command;

    public PlayerController(Command command) {
        this.command = command;
    }

    public void pressed() {
        command.execute();
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        MusicPlayer musicPlayer = new MusicPlayer();

        PlayerController musicOnController = new PlayerController(new PlayerOnCommand(musicPlayer));
        musicOnController.pressed(); // Music On

        PlayerController musicOffController = new PlayerController(new PlayerOffCommand(musicPlayer));
        musicOffController.pressed(); // Music Off
    }
}
```

<br><br>

* 장점
    * 기존코드를 변경하지 않고 새로운 기능을 추가할 수 있다. (SOLID 중, OCP)
    * Receiver 의 코드가 변경되어도 Invoker 의 코드는 변경되지 않는다.

* 단점
    * Command 패턴을 쓰지 않을때보다 복잡도가 올라간다.