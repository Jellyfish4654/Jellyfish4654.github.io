# Getting Started

## What is Kotlin?

Kotlin is a modern and popular programming language that was first introduced in 2016 by JetBrains. Notably, in 2017, Google declared Kotlin the preferred language for Android development over Java.

Kotlin is a statically typed, multi-paradigm programming language that offers several advantages over Java. While Kotlin is 100% compatible with Java, it provides a more concise syntax and advanced language features such as type inference, functional programming patterns, and null safety. One of Kotlin's key strengths is its ability to interoperate with existing Java code, allowing developers to gradually adopt it without discarding their existing codebase.

This guide is created with the assumption that you already understand some basic concepts from Java.

## Installation

The recommended IDE is [IntelliJ](https://www.jetbrains.com/idea/download/) as it is developed by the same people that created Kotlin and Android Studio. Alternatively, VSCode can also be used as a second option.

## Main

::: code-group

```kotlin [Kotlin]
fun main() {
  println("Hello World")
}
```

```java [Java]
public class Main {
	public static void main(String[] args) {
		System.out.println("Hello world!");
	}
}
```

:::

The syntax for defining the main function in Kotlin is simply `fun main()`, as opposed to the verbose `public static void main(String[] args)` syntax used in Java. Additionally, you do not need to complete the statement with a semicolon. 

## Variables

To create a variable, use var or val:

::: code-group

```kotlin [Kotlin]
fun main() {
  var name = "John Doe"
  val birthyear = 1969

  println(name)
  println(birthyear)
}
```

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

:::

- `var` is a mutable variable
  - This means that variables declared with the `var` keyword can be modified
- `val` is an immutable variable
  - This means that variables declared with the `val` keyword cannot be changed, similar to the `final` modifier

## Type Inference

Kotlin's type inference feature automatically assigns the variable type

## Specify Data Types

Syntax to specify data types:  
::: code-group

```kotlin [Kotlin]
fun main() {
  var teamName: String
  teamName = "Jellyfish"
  var teamNumber: Int = 4654
  println(teamName + teamNumber)
}
```

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

:::

## Primitive Data Types

Kotlin's primitive data types are similar to Java's, but they are capitalized:
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

Unlike Java, Char types cannot be treated as numbers.

## String Template

Kotlin's string templates, allowing variables and expressions to be embedded directly into string literals using the syntax ${variable} or ${expression}.

::: code-group

```kotlin [Kotlin]
fun main() {
  var teamName = "Jellyfish"
  var teamNumber = 4654
  var message = "Team $teamName #$teamNumber"
  println(message)
}
```

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

:::

## User Input

Use the readLine function to read the user’s input:

::: code-group

```kotlin [Kotlin]
fun main() {
    System.out.println("Enter your team name")
    var teamName = readLine()
    System.out.println("Enter your team number")
    var teamNumber = readLine()
    var message = "Team $teamName #$teamNumber"
    println(message)
}
```

```java [Java]
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter your team name");
        String teamName = in.nextLine();
        System.out.println("Enter your team number");
        int teamNumber = in.nextInt();
        String message = String.format("Team %s #%d", teamName, teamNumber);
        System.out.println(message);
    }
}
```

:::

::: tip Output:
Enter your team name
Jellyfish // User input
Enter your team number
4654 // User input
Team Jellyfish #4654
:::