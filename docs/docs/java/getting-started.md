# Getting Started

## Installation
I'm assuming you already have Java installed. If not you should do that (ask me for help!).

## Setup
Set up your Java program like this. Place it in a file that is called `A.java`. (You can replace `A` with any other sequence of letters and numbers,
as long as it starts with an uppercase letter.)

```java
public class A {
	public static void main(String[] args) {
		System.out.println("Hello world!");
	}
}
```

If you're using the command line (e.g. VS Code), run the following commands (again replacing `A` if you chose to do so):
```bash
javac A.java
java A
```

You should get the following output:

```bash
Hello world!
```

If not, something went wrong and you should try this again before.

### More Instructions
If we change the content inside of the inner braces to:

```java
public class A {
	public static void main(String[] args) {
		System.out.println("Hello world!");
		System.out.println("I exist now.");
		System.out.println("Cool right?");
	}
}
```

and run the code again, the output should now be:

```
Hello world!
I exist now.
Cool right?
```

This example illustrates the concept of *statements*, each of which represents an instruction for the computer to do.
In our example, there are three statements, each one ending with a semicolon.

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

The output of this program should be:

```
-2
12
2
Helloworld
```

### Expressions vs Values
An *expression* is any combination of symbols inside of code that represents a *value*.
In the example above, `1 + 2` is an *expression*, while the *value* that that expression corresponds to (we say *evaluates* to) is 3.

<div class="q">Q1: In <code>3 - 5</code>, what is the the expression and what is the value?</div>

<div class="q">Q2: In the above code, is <code>1</code> an expression?</div>

### Data Types
Every value has a *data type*, which is what kind of value the value is. Java
has a couple built-in data types, some of which are listed below.

#### Integer Types
Java has 4 integer types, shown below. Each integer type
can only represent [integers](https://en.wikipedia.org/wiki/Integer) within a certain range.
For instance, the data type `byte` can only represent numbers in the range [ [-128, 127] ](https://en.wikipedia.org/wiki/Interval_(mathematics)#Notations_for_intervals).

| Type | Range | Required Memory |
|---|---|---|
| `byte` | [-2^7, 2^7-1] | 1 byte |
| `short` | [-2^15, 2^15-1] | 2 bytes |
| `int` | [-2^31, 2^31-1] | 4 bytes |
| `long` | [-2^63, 2^63-1] | 8 bytes |

Integer literals (e.g. the numbers inside of the code like `1`, `2`, and `3` that don't have decimal points) all evaluate to a value that has a data type of `int`.
The reason there are 4 different data types is because sometimes you only need
a small range, so there is no reason to use the extra memory (and sometimes lower performance) that an integer type with a larger range requires.

#### Floating-Point Types
Floating-point types can represent numbers that are not integers. There are two floating point types:

| Type | Precision | Required Memory |
|---|---|---|
| `float` | ~6 digits | 4 bytes |
| `double` | ~15 digits | 8 bytes |

Floating-point literals are numeric literals that contain a dot, for instance `1.0`. All floating-point literals
evaluate to a value that has the `double` data type.

#### Arithmetic Operators
Java has a bunch of *operators* that can do basic math.

| Operator | What it does |
|---|---|
| `a + b` | adds two numbers |
| `a - b` | subtracts two numbers |
| `a * b` | multiplies two numbers |
| `a / b` | divides two numbers |
| `a % b` | modulo: takes the remainder of a / b |

In the table above, `a` and `b`, which should be replaced with expressions, are known as *operands*.
The rules that determine the data type of the entire expression are [complicated](https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.6)
but the most important parts are: 

 - If any of the operands are `double`, the entire expression is `double`
 - Otherwise if any of the operands are `float`, the entire expression is `float`
 - Otherwise if any of the operands are `long`, the entire expression is `long`
 - Otherwise the data type of the entire expression is probably `int`.

Another thing to note is that if both operands are integer types, the division operator (/) will take the 
floor of the result (i.e. round down). So for example, `24 / 5` evaluates to 4 (an `int`), but `24.0 / 5` evaluates to 4.8 (a `double`).

<div class="q">Q3: What is the data type of the value that <code>1 + 3.0</code> evaluates to?</div>

#### Text :)
The `String` data type represents a bunch of text.
String literals are surrounded by double quotes (") and (obviously) evaluate to a value of type `String`.

The `char` data type represents one specific character.
Character literals are surrounded by single quotes (') and evaluate to a value of type `char`.

You can concatenate `String` values together with the + operator. For example, the expression
`"A!" + "B"` evaluates to the the `String` value A!B.

#### Boolean
`boolean` is a data type that has two possible values: `true` and `false`.

There are a couple of boolean operators:

| Operator | What it does |
|---|---|
| `a || b` | OR: Evaluates to true if a or b is true. |
| `a && b` | AND: Evaluates to true if a and b are both true. |
| `!a` | NOT: Evaluates to true if a is false and false if a is true. |

<div class="q">Q4: What does <code>!((true && false) || false) && true</code> evaluate to?</div>

#### Equality
Java has a bunch of comparison operators used for, you guessed it, comparing values.

| Operator | What it does |
|---|---|
| `a == b` | Equal: Evaluates to true if a = b. |
| `a != b` | Not Equal: Evaluates to true if a does not equal b. |
| `a > c` | Greater Than: Evaluates to true if a > c |
| `a < c` | Less Than: Evaluates to true if a < c |
| `a >= c` | Greater Than or Equal To: Evaluates to true if a > c or a = c |
| `a <= c` | Less Than or Equal To: Evaluates to true if a <> c or a = c |

Please note! Equality operators **should not** be used with `String` values, otherwise you might get some
really weird bugs.

Instead, to compare `String` values you use `a.equals(b)`, where `a` and `b` are both `String` expressions, which evaluates to true if a = b.

<div class="q">Q5: (If you ever see this in real code, run far, far away, but I'm just testing you to make sure you understand all the theory) What is the value that <code>((1 + 2) == 3 && true && "Hello".equals("World")) && (5 / 3 > 1 || 3 / 2.0 == 1)</code> evaluates to? What is the type of that value?</div>

#### Type Coercion
Sometimes you need to convert between different types. In Java, this is done with the following syntax: `(typename)expression`

For instance, `(int)2.7` evaluates to 2, because it converts `2.5`, a double, to an `int`, which can only hold integers. (Floating-point to integer conversions always round down).

<div class="q">Q6: What is the data type of the value that <code>(byte)(1 + 3.5) / (float)5.0</code> evaluates to?</div>
