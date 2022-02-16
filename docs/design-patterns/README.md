# Design Patterns

처음 개발공부를 할 때, 학습하려고 했던 **GoF의 디자인패턴** 내용을 하나하나씩 공부하고 정리를 하려고 합니다.
<br>

## 디자인 패턴(Design Pattern)?
소프트웨어 개발 방법에서 사용되는 디자인 패턴은 프로그램 개발에서 자주 나타나는 과제를 해결하기 위한 방법 중 하나로, 과거의 소프트웨어 개발 과정에서 발견된 설계의 노하우를 축적하여 이름을 붙여, 이후에 재이용하기 좋은 형태로 특정의 규약을 묶어서 정리한 것

_참고. [Wikipedia](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)_

## Creation Pattern
객체를 생성하는 것과 관련된 패턴
<br>
객체의 생성과 변경이 전체 시스템에 미치는 영향을 최소화하도록 만들어주어 유연성을 높일 수 있음

+ [Singleton Pattern](singleton)
+ [Factory Method Pattern](factory-method)


## Structural Pattern
자료구조나 인터페이스 구조 등 프로그램의 구조를 설계하는 데 많이 활용될 수 있는 패턴
<br>
복잡한 형태의 구조를 갖는 시스템을 개발하기 쉽게 만들어주는 패턴
<br>
새로운 기능을 가진 복합 객체를 효과적으로 작성할 수 있음


## Behavioral Pattern
객체들 간의 행위나 알고리즘 등과 관련된 패턴
<br>
반복적으로 사용되는 객체들의 상호작용을 패턴화한 것으로, 클래스나 객체들이 상호작용하는 방법과 책임을 분산하는 방법을 정의
