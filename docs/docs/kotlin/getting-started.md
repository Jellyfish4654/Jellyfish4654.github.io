# Getting Started

## What is Kotlin?

Kotlin is a modern and popular programming language that was first introduced in 2016 by JetBrains. Notably, in 2017, Google declared Kotlin the preferred language for Android development over Java.

Kotlin is a statically typed, multi-paradigm programming language that offers several advantages over Java. While Kotlin is 100% compatible with Java, it provides a more concise syntax and advanced language features such as type inference, functional programming patterns, and null safety. One of Kotlin's key strengths is its ability to interoperate with existing Java code, allowing developers to gradually adopt it without discarding their existing codebase.

This guide is created with the assumption that you already understand some basic concepts from Java.

## Installation

The recommended IDE is [IntelliJ](https://www.jetbrains.com/idea/download/) as it is developed by the same people that created Kotlin and Android Studio. Alternatively, VSCode can also be used as a second option.

## Main

::: code-group

```java [Java]
public class Main {
	public static void main(String[] args) {
		System.out.println("Hello world!");
	}
}
```

```kotlin [Kotlin]
fun main() {
  println("Hello World")
}
```
:::

The syntax for defining the main function in Kotlin is simply `fun main()`, as opposed to the verbose `public static void main(String[] args)` syntax used in Java. Additionally, you do not need to complete the statement with a semicolon. 

## Variables

To create a variable, use var or val:

::: code-group

```java [Java]
public class Main {
	public static void main(String[] args) {
		String name = "John Doe";
        final int birthyear = 1969;

        System.out.println(name);
        System.out.println(birthyear);
	}
}
```

```kotlin [Kotlin]
fun main() {
  var name = "John Doe"
  val birthyear = 1969

  println(name)
  println(birthyear)
}
```
:::

- `var` is a mutable variable
  - This means that variables declared with the `var` keyword can be modified
- `val` is an immutable variable
  - This means that variables declared with the `val` keyword cannot be changed, similar to the `final` modifier

### Type Inference

Kotlin's type inference feature automatically assigns the variable type

### Specify Data Types

Syntax to specify data types:  
::: code-group

```java [Java]
public class Main {
    public static void main(String[] args) {
        String teamName = "Jellyfish";
        int teamNumber = 4654;
        String message = String.format("Team %s #%d", teamName, teamNumber);
        System.out.println(message);
    }
}
```

```kotlin [Kotlin]
fun main() {
  var teamName: String
  teamName = "Jellyfish"
  var teamNumber: Int = 4654
  println(teamName + teamNumber)
}
```
:::

### Primitive Data Types

Kotlin's primitive data types are the same as Java's, but capitalized:
| Data Type | Java Equivalent |
|---|---|
| Byte | byte |
| Short | short |
| Int | int |
| Long | long |
| Float | float |
| Double | double |
| Boolean | boolean |
| Char | char |

### String Template

Kotlin's string templates, allowing variables and expressions to be embedded directly into string literals using the syntax ${variable} or ${expression}.

::: code-group

```java [Java]
public class Main {
    public static void main(String[] args) {
        String teamName = "Jellyfish";
        int teamNumber = 4654;
        String message = String.format("Team %s #%d", teamName, teamNumber);
        System.out.println(message);
    }
}
```

```kotlin [Kotlin]
fun main() {
  var teamName = "Jellyfish"
  var teamNumber = 4654
  var message = "Team $teamName #$teamNumber"
  println(message)
}
```
:::