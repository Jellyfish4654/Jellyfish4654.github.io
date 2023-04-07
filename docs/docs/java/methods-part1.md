# Methods Part I

A method is a block of code that runs when it is called to perform a function. People familiar with other languages may recognize similarities to functions, however, methods in programming are more object-oriented. The Math class has many methods built into Java that allows you to perform mathematical functions.

::: tip Note:
I've listed some useful built-in Java methods.
:::
## Math Methods

The Java Math class offers numerous methods to perform mathematical tasks on numbers.

| Method | What it does | Notes |
|---|---|---|
| Math.max(x,y) | Returns the maximum value of x and y | Returns an int if x and y or both integers, otherwise it returns a double |
| Math.min(x,y) | Returns the minimum value of x and y | Returns an int if x and y are both integers, otherwise it returns a double |
| Math.pow(x,y) |  Returns x raised to the power of y | Returns a double |
| Math.abs(x) | Returns the absolute value of x | Returns an int if x is an int, otherwise it returns a double |
| Math.sqrt(x) | Returns the square root of x | Returns a double |
| Math.random() | Returns a pseudorandom number greater than or equal to 0.0 and less than 1.0 | Returns a double |
| Math.round(x) | Returns x rounded to the closest integer | Returns an int |

```java
class Main {
    public static void main(String[] args) {
        int max = 10;
        int min = 1;
        int range = max - min + 1;

        int random = (int) (Math.random() * range) + min;
        System.out.println(random);
    }
}
```

::: tip Output:
Prints a random integer from 1-10.
:::

## String Methods

The String class offers built-in methods for manipulating strings.

| Method | What it does | Notes |
|---|---|---|
| contains() | Checks whether a string contains a sequence of characters | Returns a boolean |
| equals() | Compares two strings. Returns true if the strings are equal, otherwise it returns false. | Returns a boolean |
| indexOf() | Returns the position of the first found occurrence of specified characters in a string | Returns an int |
| length() | Returns the length of a specified string | Returns an int |
| replace() | Searches a string for a specified value, and returns a new string where the specified values are replaced | Returns a String |
| substring() | Returns a new string which is the substring of a specified string | Returns a String |
| toLowerCase() | Converts a string to lower case letters | Returns a String |
| toUpperCase() | Converts a string to upper case letters | Returns a String |