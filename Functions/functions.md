### Functions

Functions allow us to write all our code in one place and later reuse them throughout our application. Functions reduce redundancy.

    {
        function hello() {
            console.log("Hello it is Olugbenga");
        } // function declaration

        hello(); // function invocation
    }

#### Function arguments and parameters

    {
        function greet(name) {
            console.log("Hello there" + name);
        } // passed in argument name

        greet("Tobi"); // passed in parameter "Tobi"
    }

#### Functions return

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
