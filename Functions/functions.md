# Functions

Functions allow us to write all our code in one place and later reuse them throughout our application. Functions reduce redundancy.

{
function hello() {
console.log("Hello it is Olugbenga");
} // function declaration

        hello(); // function invocation

}

## Function arguments and parameters

    {
        function greet(name) {
            console.log("Hello there" + name);
        } // passed in argument name

        greet("Tobi"); // passed in parameter "Tobi"
    }

### Functions return

You can evaluate a function with a return statement. Whatever you write after return will be null

    {
        function calculate(value) {
            return value * 2.54;
            every other code after the return statement will be ignored
        }
    }

If you are going to return a value, you need to store it in a variable.

### Function Expression

Aside the way we discussed above for setting up a function, we can also use function expression where we first create a variable and assign a function to the variable.

> function declaration

    {
        function addValues(num1, num2) {
            return num1 + num2;
        }

        const firstValue = addValues(3, 4);
        const secondValue = addValues(12, 34);

        const values = [firstValue, secondValue];
    }

> function expression

    {
        const add = function (num1, num2) {
            return num1 + num2;
        } // In function expressions, you can choose to add the name "addValues" when declaring your function or not.

        const thirdValue = add(5, 6)
    }

## Callback Functions, Higher Order Functions

Functions are first class objects. They can be stored in a variable (expression), passed as an argument to another function, return from the function (closure).

We have these kinds of functions:

- Callback Functions: Passed to another function as an argument and executed inside that function as a result. This callback function is typically passed into a higher order function.

- Higher Order Functions: This is when a function accepts another function as an argument or returns another function as a result. This function typically receives a callback function.

### Callback Functions

This allows us to pass in functions as argument into another function, making us write more complex logic.

    {
        function morning(name) {
            return `Good morning ${name.toUpperCase()}`;
        }

        function greet(name, cb) {
            const myName = "john";
            console.log(`${cb(name)}, my name is ${myName}`);
        }

        greet("bob", morning)
    }
