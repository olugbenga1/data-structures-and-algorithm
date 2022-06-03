## Javascript Introduction

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

## Variables and Variable Declaration

Before ES6 `var` was used in declaring variables. With ES6 came `const` and `let`.

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

### What is the difference between let and const?

### Direct Assignment and Assignment by reference

#### Direct Assignment

When you assign a primitive value a variable, any changes you make are made directly to that value.

    {
        const a = 1;
        const b = a; // a = 1, b = 1

        b = 2; // a = 1, b = 2
    }
