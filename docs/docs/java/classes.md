# Classes

## Classes

One of the key features of Java is its use of classes and objects to represent data and behavior. Java's use of classes and objects is a fundamental aspect of its object-oriented programming paradigm. One of the key features of Java is its use of classes and objects to represent data and behavior. In Java, everything is associated with classes and objects, which encapsulate attributes and methods that define their characteristics and actions.  

```java
public class Motor {
  public int power;
}
```

 The Motor class contains three fields: name, acceleration, and velocity. Fields are another term for class attributes.  

## Modifiers

::: tip Syntax:
modifier field_type field_name;
:::

 ### Access Modifiers
 
 #### Classes

| Modifier | Same Class | Same Package | Different Package Subclass | Different Package Non-subclass |
|---|---|---|---|---|
| *Default* | Yes | Yes | No | No |
| public | Yes | Yes | Yes | Yes |

 #### Attributes/Methods/Constructors

| Modifier | Same Class | Same Package | Different Package Subclass | Different Package Non-subclass |
|---|---|---|---|---|
| private | Yes | No | No | No |
| *Default* | Yes | Yes | No | No |
| protected | Yes | Yes | Yes | No |
| public | Yes | Yes | Yes | Yes |

 ### Non-Access Modifiers

 #### Classes

 | Modifier | Description |
|---|---|
| final | The class cannot be inherited by other classes |

#### Attributes & Methods

| Modifier | Description |
|---|---|
| final | Attributes and methods cannot be overridden/modified |
| static | Attributes and methods belongs to the class, rather than an object |

::: tip Note:
Although there are additional modifiers, they are irrelevant for your current purposes.
:::

## Constructors

A constructor in Java is a *special method* that is used to initialize objects. The constructor is called when an object of a class is created. It is to initialize values for object attributes.  

```java
class Motor {
  public double power;

  public Motor(double motorPower) {
    power = motorPower;
  }
}

public class Main {
  public static void main(String[] args) {
    Motor liftMotor = new Motor(0.85);

    System.out.println(liftMotor.power);
  }
}
```

::: tip Output:
0.85
:::

## Inheritance

Inheritance allows a class to inherit attributes and methods from another class:  
- subclass (child)
  - the class that inherits from another class
- superclass (parent)
  - the class being inherited from

::: code-group

```java [Main.java]
public class Main {
    public static void main(String[] args) {
      Jellyfish jellyfish = new Jellyfish();
      Cuttlefish cuttlefish = new Cuttlefish();
      jellyfish.swim();
      jellyfish.sting();
      cuttlefish.swim();
      cuttlefish.ink();
    }
}
```

```java [Animal.java]
public class Animal {
  public void swim() {
    System.out.println("Swimming...");
  }
}
```

```java [Jellyfish.java]
public class Jellyfish extends Animal {
    public void sting() {
      System.out.println("Sting...");
    }
  }
```

```java [Cuttlefish.java]
public class Cuttlefish extends Animal {
    public void ink() {
      System.out.println("Ink...");
    }
  }
```
:::

## Enums

An enum is a `class` serves as a container for a group of unchangeable constants: 

```java
enum DriveMode {
    TANK,
    DRIVE,
    MECANUM,
    FIELDCENTRIC
}
```

You can access enum constants with the dot syntax: 

```java
enum DriveMode {
    TANK,
    DRIVE,
    MECANUM,
    FIELDCENTRIC
}

public class Main {
    public static void main(String[] args) {
        DriveMode driveMode = DriveMode.FIELDCENTRIC;
        switch (driveMode) {
            case TANK:
                System.out.println("Drive mode: " + driveMode);
                break;
            case DRIVE:
                System.out.println("Drive mode: " + driveMode);
                break;
            case MECANUM:
                System.out.println("Drive mode: " + driveMode);
                break;
            case FIELDCENTRIC:
                System.out.println("Drive mode: " + driveMode);
                break;
        }
    }
}
```