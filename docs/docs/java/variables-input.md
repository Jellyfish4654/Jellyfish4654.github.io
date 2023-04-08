# Variables & Input 

## Variables

`Variables` are containers for storing data types. Variable names can only include underscores (_), uppercase and lowercase letters, and digits (0-9), and must not begin with a digit.

**Syntax Convention:**
Variable names should be camelCase
- Capitalize each word except for the first word
- Data type variableName = value;
- Ex. `theseAreExamples`, `iPhone`, `juniorJelliesJava`

When naming variables, it's recommended to use descriptive names that are easy to read and understand. However, it's important to strike a balance and avoid making names excessively long or complex, which could make them difficult to type and slow down the coding process.
The only exception to this convention is for loop counter variables such as `i`, `j`, `k`, etc.

To create a variable, use a variable declaration in the following format:

```java
data_type variable_name;
``` 

For example, the statements "String word;" and "int age;" create two variables named "word" and "age", respectively, with contents that are Strings and ints.  
To change a variable's contents, use assignment with the format:

```java
variable_name = expression;
``` 

For instance, "word = 'hello world!'" and "age = (5 + 3 + 2) / 7;" would update the contents of "word" and "age".  
You can declare and assign a variable in one statement using the following format:

```java
data_type variable_name = expression;
``` 

```java
// Combines the declaration and assignment of the variable greeting
String greeting = "Hello";
``` 
### Final

A final variable cannot be reassigned or changed after its initial assignment. To declare a final variable, use the keyword "final" before the variable name in the declaration statement.

## Input & Output

In a terminal-based program, three files are pre-opened: stdout (output), stderr (output for errors), and stdin (input). Typically, stdout is used for normal output, while stderr is used for error logging. Although they appear identical in the terminal, their distinction can be useful for shell piping.

To write to stdout, use `System.out.println(*Expression*)`, which writes "Expression" to the stdout file.  
To write to stderr, use `System.err.println(*Expression*)`.

::: tip Note:
Knowing about stdout, stderr, and stdin files can be interesting, but not essential.
:::

### Scanner data type

The Scanner class is used to get user input. We need to import the Scanner class to use it.

```java
import java.util.Scanner;
```

To read input from stdin, use this expression to create a Scanner object:

```java
new Scanner(System.in)
```

**Input Types**

| Method  |  What it does |
|---|---|
| nextLine() |  Reads a String value from the user |
| nextInt() |  Reads an int value from the user |
| nextDouble |  Reads a double value from the user |

```java
import java.util.Scanner; // Import the Scanner class

class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in); // Create a Scanner object
        System.out.println("Enter an integer");
        int input = in.nextInt(); // Read user input
        System.out.println("The user inputed " + input); // Output user input
    }
}
```

::: tip Output:
Asks the user to input an integer outputs an integer
:::
