# Interpreter

## 다이어그램

![interpreter](@src/interpreter_diagram.png)

## 설명

자주 등장하는 문제를 간단한 언어나 표현으로 정의하고 재사용하는 패턴

## Interpreter 구현

![interpreter](@src/interpreter_diagram_2.png)

_Diagram 중, Expression 에 속하는 PostfixExpression 클래스_
```java
public interface PostfixExpression {
    int interpret(Map<Character, Integer> context);
}
```

_Diagram 중, TerminalExpression 에 속하는 VariableExpression 클래스_
```java
public class VariableExpression implements PostfixExpression {
    private final Character variable;

    public VariableExpression(Character variable) {
        this.variable = variable;
    }

    @Override
    public int interpret(Map<Character, Integer> context) {
        return context.get(variable);
    }
}
```

_Diagram 중, NonTerminalExpression 에 속하는 PlusExpression, MinusExpression 클래스_
```java
public class PlusExpression implements PostfixExpression {
    PostfixExpression left, right;

    public PlusExpression(PostfixExpression left, PostfixExpression right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public int interpret(Map<Character, Integer> context) {
        return left.interpret(context) + right.interpret(context);
    }
}

public class MinusExpression implements PostfixExpression {
    PostfixExpression left, right;

    public MinusExpression(PostfixExpression left, PostfixExpression right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public int interpret(Map<Character, Integer> context) {
        return left.interpret(context) - right.interpret(context);
    }
}
```

_expression 을 해석하는 PostfixParser 클래스_
```java
public class PostfixParser {
    public static PostfixExpression parser(String expression) {
        Stack<PostfixExpression> stack = new Stack<>();
        for (char c : expression.toCharArray()) {
            stack.push(getExpression(c, stack));
        }

        return stack.pop();
    }

    private static PostfixExpression getExpression(char c, Stack<PostfixExpression> stack) {
        switch (c) {
            case '+':
                return new PlusExpression(stack.pop(), stack.pop());
            case '-':
                PostfixExpression right = stack.pop();
                PostfixExpression left = stack.pop();

                return new MinusExpression(left, right);
            default:
                return new VariableExpression(c);
        }
    }
}
```

<br><br>

```java
public class App {
    public static void main(String[] args) {
        PostfixExpression expression = PostfixParser.parser("xyz-+");
        System.out.println(expression.interpret(Map.of('x', 5, 'y', 3, 'z', 1))); // 7
    }
}
```

<br><br>

* 장점
    * 기존코드를 변경하지 않고 새로운 기능을 추가할 수 있다. (SOLID 중, OCP)

* 단점
    * 표현식이 많아질수록 복잡도가 크게 증가한다.