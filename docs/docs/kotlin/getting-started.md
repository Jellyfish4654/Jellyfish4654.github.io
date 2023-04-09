# Getting Started

## What is Kotlin?

Kotlin is a modern and popular programming language that was first introduced in 2016 by JetBrains. Notably, in 2017, Google declared Kotlin the preferred language for Android development over Java.

Kotlin is a statically typed, multi-paradigm programming language that offers several advantages over Java. While Kotlin is 100% compatible with Java, it provides a more concise syntax and advanced language features such as type inference, functional programming patterns, and null safety. One of Kotlin's key strengths is its ability to interoperate with existing Java code, allowing developers to gradually adopt it without discarding their existing codebase.

This guide is created with the assumption that you already understand some basic concepts from Java.

## Main

::: code-group

```java [Java]
public class Main {
	public static void main(String[] args) {
		System.out.println("Hello world!");
	}
}
```

```kt [Kotlin]
fun main() {
  println("Hello World")
}
```
:::

The syntax for defining the main function in Kotlin is simply `fun main()`, as opposed to the verbose `public static void main(String[] args)` syntax used in Java. Additionally, you do not need to complete the statement with a semicolon. 

## Variables

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

```kt [Kotlin]
fun main() {
    var name = "John Doe"
    val birthyear = 1969

    println(name)
    println(birthyear)
}
```
:::