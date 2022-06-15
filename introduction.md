# Javascript Introduction

Javascript is a high level scripting language that can be interpreted and compiled at run time.

> Don't break the web.

New versions won't do new things that the old version cannot already do. What gets added in the newer versions are better/ cleaner ways to get things done which is also known as `syntactic sugar` as it allows an existing piece of code to be written in a clearer and more succint way.

Because javascript is backwards compatible, it is possible to use transpilers such as Babel to transpile code from a newer version of javascript to an older version to ensure compatibility across older browsers.

## Data Types

There are primitive and non-primitive data types in javascript:

Primitive data types include:

- String
- Number
- Undefined
- Null
- Boolean
- Symbol (ES6)

Non-Primitive data types include:

- Arrays
- Functions
- Object literals

Note that non-primitive data types are all `objects`.

Primitive data types have properties and methods

## Variables and Variable Declaration

Before ES6 `var` was used in declaring variables. var is function scope. With ES6 came `const` and `let`. const and let are block scope

In ES6 `const` and `let` are used in declaring variables. If a data type is declared with `const`, its value cannot be changed but variables declared with let can be reassigned.

If a variable references a non-primitive data type, then using const will not make it immutable. This means the underlying data inside the object can change (known as mutating the object). See example below

    {
        const name = { value: 'Alexa'}; // an object
        name.value = 'Siri'; // Changes the value from Alexa to Siri
    }

However using const prevents you from reassigning an existing variable to another object.

    {
        const name = { value: 'Alexa' }; // declare object
        name = { value: 'Siri' } // attempt to reassign to another object gives a TypeError: Assignment to constant variable
    }

Using const and let in declating variables means they are block scoped, meaning their values only exist in the block they are declared.

A variable is referred to as global when it is declared outside a block. When a variable is declared within a block, it is called a local variable/ local scope.

## What is the difference between let and const?

### let

The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope. It can be declared without initialization. It cannot be accessed without initialization, as it returns an error.

### const

The scope of a const variable is block scope. It cannot be updated or re-declared into the scope. It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization.

> When you console.log in chrome dev tools console, if the result is black, it is a string, if the result is blue, it is a number. You can also check the type of your variable by using `typeof`. We can do `typeof variable` or `typeof value`.

## Direct Assignment and Assignment by reference

### Direct Assignment

When you assign a primitive value a variable, any changes you make are made directly to that value.

    {
        const a = 1;
        const b = a; // a = 1, b = 1

        b = 2; // a = 1, b = 2
    }

### Assignment by Reference

When assigning non-primitive data type value to a variable, it is done by reference so any changes made will affect all references.

    {
        const c = { value: 1 };

        let d = c; // c.value = 1, d.value = 1
        d.value = 2; // c.value = 2, d.value = 2
    }

    {
        let person = {name: "bob"};
        let person2 = person;

        person2.name = "susy";

        console.log(`the name of the first person is ${person.name}`); // person.name here will be "susy"
        console.log(`the name of the second person is ${person2.name}`); // person2.name here too will be "susy" because of the assigning non-primitive data type is done by reference
    }

ES6 gives us a solution to this by using spread operator which we will cover fully in the ES6 folder. But let us see an example

    {
        let person = {name: "bob"};
        let person2 = {...person};

        person2.name = "susy";

        console.log(`the name of the first person is ${person.name}`); // person.name here will be "bob".
        console.log(`the name of the second person is ${person2.name}`); // person2.name will be "susy"
    }

## Methods, Properties, Parameters, Arguments

`Properties` are information about the object or value, while

`Methods` perform an action on the object or value - either to change it or tell us something about it.

`Parameters` are the names of variables present in function definition.

`Arguments` are the real values that are passed to the function and received by them

Technically only objects have methods and properties but javascript overcomes this with primitive data types by creating a wrapper object around it. This all happens in the background, so for all intent and purposes, it looks like primitive data types have methods and properties.

All properties of primitive data types are immutable, meaning they are unable to be changed.

We access properties of string using dot notation or square brackets.

Since a method is an action that a primitive data type or object can perform, we use dot notation followed by parentheses to access methods. This is a good way to differentiate between methods and properties.

    {
        let name = "Alexa";
        name.length; // 5 - property

        name.toUpperCase(); // method

        name.charAt(2); // method

        Few other string methods are indexOf(), lastIndexOf(), concat(), trim(), repeat()
    }

You can convert strings to numbers and numbers back to strings by using the `Number()` method and the `String` or `toString()` methods respectively.

> ES6 added some string methods like includes(), startsWith(), endsWith() etc. You can find more on W3Schools and mdn docs.

Numbers like strings also have methods in javascript

### String Concatenation

It is used to combine string values using quotation marks(""). Template literals also do similar operations using backticks.

    {
        const name = "Gbenga";
        const lastName = "Odedele";

        console.log("Hello there, my full name is " + name + " " + lastName);
    }

    {
        const website = "google";
        const url = "https://www." + website + ".com";
        console.log(url);
    }

### Arithmetic Operations

Javascript can do arithmetic operations

> Addition (+), Subtraction (-), Multiplication (\*), Division (/), Exponentiation, Modulus (%)

### Difference between points++ and ++points

    {
        let points = 5;

        points++; // will return 6, then increase points to 7

        ++points; // will increase points to 8, then return 8
    }

## Type Coercion

Type coercion happens when the operands of an operator are of different types, Javascript then attempts to convert one operand to an equivalent value of the other operand's type. For example, if you try to multiply a string and a number, javascript will attempt to coerce the string to a number.

    {
        '2' * 8; // 16
    }

    This may seem useful but the process is not always logical and consistent and may cause confusion. For example, if you try to add a string and a number together, Javascript will convert the number to a string and concatenate the two strings together:

        {
            '2' + 8; // '28'
        }

    It is very important to be explicit with the types of values you are working with to avoid errors.

    > Javascript is a weakly typed or loosely typed language. This means that you don't need to explicitly specify what data-type a variable is when you declare it. This can lead to unexpected bugs especially when type coercion takes place in the background.

    > Typescript is an open source superset of javascript that is maintained by microsoft. It provides the option to specify types of variables when they are declared.

## Implicit Type Conversion

    {
        const name = "john";
        const lastName = "jordan";

        const value = name - lastName;
        console.log(value); // NaN
    }

    {
        let number3 = "10";
        let number4 = "23";

        const result = number3 - number4;
        console.log(result); // -13 :javascript does the implicit type conversion to be able to do the math operation
    }

    {
        let number3 = "10";
        let number4 = "23";

        const result = number3 + number4;
        console.log(result); // "1023" : we are getting a string now because we are doing a string concatenation in this case. Even if only one of them is a string, javascript will still concatenate the result
    }

## Truthy and Falsy

In javascript, all the values are either truthy or falsy. This means even if the value is not a boolean itself, in a condition it can evaluate to either true or false. It is easier to just know the falsy values because there is less of them and know that every other thing is truthy.

Falsy values include:

- ""
- ''
- ``
- 0
- -0
- NaN
- false
- null
- undefined

## Tenary Operators

We have seen unary operator `typeof`, we have seen binary operator `assignment operator` `let number = 3;`.

Let us see tenary operator which gives us an option to shorten our logic.

the syntax is `condition ? (runs if true) : (runs if false)`
