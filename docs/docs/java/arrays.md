# Arrays

## Arrays

Arrays are a fundamental data structure in Java that enable you to store multiple values of the same data type in a single variable. This provides a more efficient and organized approach to managing data than declaring separate variables for each value.

To create an array in Java, you can use the following syntax:  
`data_type[] array_name = new data_type[array_length];`

You can also initialize an array with values using the following syntax:  
`data_type[] array_name = {value1, value2, ..., valueN};`

Each element in the array is identified by its index, which starts at 0 and increments by 1 for each subsequent element. The index is used for assigning values to the array elements and accessing them.  

To determine the size of an array, you can access the length property of the array using the following syntax:  
`myArray.length`

Full Example:

```java
class Main{
    public static void main(String[] args) {
        int[] myArray = new int[10];
        myArray[0] = 5;
        // index             0  1  2  3  4
        int[] numberArray = {1, 2, 3, 4, 5};
        System.out.println(myArray[0]);
        System.out.println(numberArray[0]);
        System.out.println("Length: "+numberArray.length);
    }
}
```

::: tip Output:
5  
1  
Length: 5
:::

```java
class Main {
    public static void main(String[] args) {
        String[] textArray = { "I", "love", "Junior", "Jellies!" };

        int i = 0;
        while (i < 4) {
            System.out.println(textArray[i] + " ");
            i++;
        }
    }
}
```

::: tip Output:
I  
love  
Junior  
Jellies!  
:::

## Multidimensional Arrays

Multidimensional arrays are arrays of arrays, commonly used for storing data in a tabular format such as a table with rows and columns.

```java
class Main {
    public static void main(String[] args) {
        int[][] myNumbers = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}};
        System.out.println(myNumbers[1][3]);
    }
}
```

::: tip Output:
9
:::

```java
class Main {
    public static void main(String[] args) {
        int[][] array = new int[4][4];
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                array[i][j] = i + j;
            }
        }
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

::: tip Output:
0 1 2 3 
1 2 3 4 
2 3 4 5 
3 4 5 6 
:::

## For-Each loop

The `for-each` loop exclusively iterates through elements in an array.

```java
for (type variableName : arrayName) {
  // code block to be executed
}
```

```java
class Main {
    public static void main(String[] args) {
        String[] txt = { "a", "b", "c", "d", "e" };
        for (String i : txt) {
            System.out.println(i);
        }
    }
}
```

::: tip Output:
a  
b  
c  
d  
e
:::