# Methods Part II

A method is a named sequence of instructions that can be invoked from other parts of the code. Creating methods is useful to facilitate code reuse and reduce redundancy.

## Creating Methods

```java
public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}
```

- `static` means that the method belongs to the Main class and not an object of the Main class.
- `void` means that this method does not have a return value.
- To call a method, simply write its name followed by `();`

## Method Parameters

Methods receive information as parameters which act as variables within the method. To specify parameters, they are listed inside the parentheses following the method name. Multiple parameters can be added by separating them with commas.

```java
public class Main {
  static void multMethod(int a, int b) {
    System.out.println(a * b)
  }

  public static void main(String[] args) {
    multMethod(32, 74);
  }
}
```

::: tip Output:
2368
:::

## Return Values

To make a method return a value, use a primitive data type (e.g., int, char, etc.) instead of void and include the return keyword inside the method.

```java
public class Main {
  static int multMethod(int a, int b) {
    return a * b;
  }

  public static void main(String[] args) {
    System.out.println(multMethod(32, 74));
  }
}
```

::: tip Output:
2368
:::

## Method Overloading

Multiple methods can have the same name with different parameters.

```java
public class Main {
  static int multMethod(int a, int b) {
    return a * b;
  }
  static double multMethod(double a, double b) {
    return a * b;
  }
  public static void main(String[] args) {
    System.out.println("Int: " + multMethod(32, 74));
    System.out.println("Double: " + multMethod(21.5, 5.5));
  }
}
```

::: tip Output:
Int: 2368  
Double: 118.25
:::