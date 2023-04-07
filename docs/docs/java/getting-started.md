# Getting Started

## Installation

I would recommend using VS Code for the IDE. Alternatively, Eclipse can also be used.

## Setup

Create a Main.java file to set up your Java program.

```java
public class Main {
	public static void main(String[] args) {
		System.out.println("Hello world!");
	}
}
```

::: tip Note
You can name it anything, but for consistency, Main will be used.  
Additionally, to see the output of the code, you must open the terminal.
:::

## Expressions

Java can do math:

```java
public class A {
	public static void main(String[] args) {
		System.out.println(1 + 2 - 5);
		System.out.println(3 * 4);
		System.out.println((4 + 7) / 5);
		System.out.println("Hello" + "world");
	}
}
```

::: tip Output:
-2  
12  
2  
Helloworld
:::

### Expressions vs Values

An expression in code represents a value and can consist of any combination of symbols. For instance, the expression 1 + 2 evaluates to the value of 3.

## Data Types

Each value has a data type, which specifies its kind.

### Integer Types
Java has 4 integer types, shown below. Each integer type
can only represent [integers](https://en.wikipedia.org/wiki/Integer) within a certain range.
For instance, the data type `byte` can only represent numbers in the range [ [-128, 127] ](https://en.wikipedia.org/wiki/Interval_(mathematics)#Notations_for_intervals).

| Type | Range | Required Memory |
|---|---|---|
| byte | [-2^7, 2^7-1] | 1 byte |
| short | [-2^15, 2^15-1] | 2 bytes |
| int | [-2^31, 2^31-1] | 4 bytes |
| long | [-2^63, 2^63-1] | 8 bytes |

Integer literals (e.g. 1, 2, 3 in code) have a data type of int. There are 4 data types because smaller ranges don't require the extra memory and lower performance of larger integer types.

### Floating-Point Types
Floating-point types can represent numbers that are not integers. There are two floating point types:

| Type | Precision | Required Memory |
|---|---|---|
| float | ~6 digits | 4 bytes |
| double | ~15 digits | 8 bytes |

Floating-point stores fractional numbers (e.g., `1.0`).

### Arithmetic Operators

Java has several basic math operators.

| Operator | What it does |
|---|---|
| a + b | adds two numbers |
| a - b | subtracts two numbers |
| a * b | multiplies two numbers |
| a / b | divides two numbers |
| a % b | modulo: takes the remainder of a / b |

In the table above, the placeholders "a" and "b" are known as operands. Their data types determine the data type of the entire expression. The rules are as follows:
- If any operand is double, the entire expression is double.
- If any operand is float but neither operand is double, the entire expression is float.
- If any operand is long but neither operand is double or float, the entire expression is long.
- Otherwise, the data type of the entire expression is likely int.

When both operands are integers, the division operator (/) rounds down to the nearest integer. For instance, 24 / 5 equals 4 (an int), whereas 24.0 / 5 equals 4.8 (a double).

### Text 

In Java, the ``String` data type represents text and is enclosed in double quotes. Meanwhile, the `char` data type represents a single character enclosed in single quotes. 

**String Concatenation** 
`String` values can be concatenated using the + operator. 

```java
class Main {
    public static void main(String[] args) {
        String message = "Hello, welcome to";
        System.out.println(message + " Junior Jellies!");
    }
}
```

::: tip Output:
Hello, welcome to Junior Jellies!
:::

### Boolean

`boolean` is a data type that has two possible values: `true` and `false`.

Logical operators determine the relationship between variables or values.

| Operator | Name | Examples |
|---|---|---|
| && | Logical and | x < y && x < z |
| || | Logical or | x < y \|\| x < z |
| ! | Logical not | !(x < y && x < z) |

### Comparison Operators

Java's comparison operators are used to compare values.

| Operator | Name | Examples |
|---|---|---|
| == | Equal to | x == y |
| != | Not equal | x != y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| < | Less than or equal to | x <= y |

::: warning
Avoid using equality operators with String values to prevent unexpected bugs.  
To compare String values, use a.equals(b), where a and b are String expressions. This evaluates to true if a equals b.
:::

### Type Casting

Type casting is when you assign a value of one primitive data type to another type.  Casting is done by placing the type in parentheses in front of the value.

```java
class Main {
    public static void main(String[] args) {
        double double1 = 9.32;
        int int1 = (int) double1; // Manual casting: double to int
        double double2 = (double) int1;
        System.out.println(double1);
        System.out.println(myInt);
        System.out.println(double2);
    }
}
```

::: tip Output:
9.32  
9  
9.0
:::