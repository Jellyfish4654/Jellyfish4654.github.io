# Loops

## While Loops

A `while` loop repeatedly executes a set of statements until a given condition becomes `false`.

```java
while (condition) {
    // body, continues to be executed until condition false
}
```

```java
int i = 0;
while (i <= 10) {
  System.out.println(i);
  i++;
}
```

::: details Output:
0  
1  
2  
3  
4  
5  
6  
7  
8  
9  
10
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/while.PNG" style="width:50%;height:50%;"> 

## Break Statement

A `break` statement causes the program to exit the while loop early.

```java
break;
```

```java
int i = 0;
while (i < 10) {
  System.out.println(i);
  i++;
  if (i == 4) {
    break;
  }
}
```

::: tip Output:
0  
1  
2  
3  
4
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/break.PNG" style="width:50%;height:50%;"> 

## Continue Statement

A `continue` statement causes the computer to jump to the beginning of the while loop.

```java
break;
```

```java
int i = 0;
while (i < 6) {
  if (i == 2) {
    i++;
    continue;
  }
  System.out.println(i);
  i++;
}
```

::: tip Output:
0  
1  
3  
4  
5
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/continue.PNG" style="width:50%;height:50%;"> 

## Do/While Loops

The do/while loop is a variant of the while loop that executes the code block *once* before checking the condition, repeating as long as it remains true.

```java
do {
    // body, execeuted until condition is false
} while (condition);
```

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i <= 10);
```

::: details Output:
0  
1  
2  
3  
4  
5  
6  
7  
8  
9  
10
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/docs/do-while.PNG" style="width:50%;height:50%;"> 

## For Loops

Use a `for loop` instead of a `while loop` when you know the exact number of times the code needs to be executed.

```java
for (initialization; condition; postcondition) {
	// body
}
```

```java
for (int i = 0; i <= 10; i++) {
  System.out.println(i);
}
```

::: details Output:
0  
1  
2  
3  
4  
5  
6  
7  
8  
9  
10
:::

<img src="https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/docs/for.PNG" style="width:50%;height:50%;"> 