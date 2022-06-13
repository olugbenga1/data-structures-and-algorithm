# Strings Properties and Methods

There's no need to memorize string methods, but it is important to know how to work with them. Check w3schools.com or mdndocs for all string properties and methods

    {
        let text = "Peter Jordan";
        let result = text.length;
        console.log(result);
    }

Some more examples of string methods

    {
        console.log(text.toLowerCase()); // turns the text into all lowercase
        console.log(text.charAt(0)); // returns the character at the index
        console.log(text.trim()); // gets rid of all the whitespaces
    }

### Chaining string methods

    {
        console.log(text.trim().toLowerCase().startsWith("peter")); // returns a boolean
    }

    {
        console.log(text.includes("eter")); // checks if the string contains "eter". Returns true because it does.
    }

    {
        console.log(text.slice(0, 2)) // creates a new string from the existing one by creating a new part of the string
    }

### Template Literals - ES6+

A special type of string that was introduced in ES6. It uses the backtick character to delineate strings. They also allow interpolation in javascript code. This means a javascript code can be inside a string and the result will be displayed. It can be used in place of string concatenation too.

    {
        let a = "mario";
        let b = "cart";

        let c = `the answer is ${a} + ${b}` // this outputs string "the answer is mario cart"
    }
