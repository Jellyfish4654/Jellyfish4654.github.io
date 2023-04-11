# Conditional Statements 

## The if Statement

An `if` statement executes its body, if a given boolean expression, called the condition, is `true`.

```java
if (condition) {
    // body
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/docs/if-statement.PNG" style="width:50%;height:50%;"> 

## The else Statement

An `else` statement is executed if the condition of the associated if statement is `false`.

```java
if (condition) {
	// if body
} else {
	// else body
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/docs/else-statement.PNG" style="width:50%;height:50%;"> 

## The else if Statement

The body of an `else if` clause is executed if the condition of the associated `if` statement is `false` and the condition of the `else if` clause is `true`.

```java
if (condition1) {
	// if body, executed if condition1 false
} else if (condition2) {
	// else if body, executed if condition1 false and condition2 true
}
```

<img src="https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/docs/else-if-statement.PNG" style="width:50%;height:50%;"> 

`else if` clauses can be chained. At the end of the chain, an optional `else` clause can be present.

```java
if (condition1) {
	// executed if condition1 is true
} else if (condition2) {
	// executed if condition1 is false and condition2 is true
} else if (condition3) {
	// executed if condition1 and condition2 are false and condition3 is true
} else {
	// executed if condition1, condition2, and condition3 are false
}
```

## The Ternary Operator

The ternary operator is a compact form of if-else statements. It can be used to replace simple if-else statements.

::: code-group

```java [Ternary Operator]
class Main {
    public static void main(String[] args) {
        Boolean multBoolean = true;
        double mult = 1;
        mult = multBoolean ? 0.5 : 1;
    }
}
```

```java [If-Else]
class Main {
    public static void main(String[] args) {
        Boolean multBoolean = true;
        double mult = 1;
        if (multBoolean) {
            mult = 0.5;
        } else {
            mult = 1;
        }
    }
}
```

:::

## The Switch Statement

Switch statements allow you to execute a code block based on the value of a specific expression. However, they can only be used with primitive types. Instead of writing many `if/else if statements`, you should use the switch statement.

```java
switch (value) {
case 1:
    // executed if value is 1
    break;
case 2:
case 3:
    // executed if value is 2 or 3
    break;
default:
    // executed otherwise
}
```