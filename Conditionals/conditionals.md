### If Statement

    {
        if (true) {
            console.log("hello world");
        }
    }

    {
        const value = 2 > 1; // type of value is still a boolean in this case

        if (value) {
            console.log("value is true")
        }
    }

#### If/Else, Else If

    {
        const value2 = 1 > 2;
        if (value2) {
            console.log("Hello world");
        } else {
            console.log("Hello people");
        }
    }


    {
        const num1 = 6;
        const num2 = 6;
        const result = num1 >= num2;

        if (num1 > num2) {
            console.log("first number is bigger than second");
        } else if (result) {
            console.log("first number is equal to second number")
        } else {
            console.log("second number is bigger than first")
        }
    }

### Equality

    {
        const num1 = 6;
        const num2 = "6";

        const value = num1 == num2;
        const value2 = num1 === num2;

        console.log(value); // true
        console.log(value2); // false
    }

    {
        const num3 = 7;
        const num4 = 10;

        const value3 = num3 != num4;
        const value4 = num3 !== num4;

        console.log(value3); // true
        console.log(value4); // true
    }

> `!=`, `==` only checks for the value, while `!==`, `===` checks for the type and the value

### Logical Operators

> (|| - OR), (&& - AND), !

    {
        const name = "peter";
        const age = 24;

        if (name === "bob" || age === 24) {
            console.log("hello there user");
        } else {
            console.log("wrong values")
        }
    }

### Switch Statement

> dice values : 1 - 6

#### if statement example

{
const dice = 1;

        if (dice === 1) {
            console.log("you got one");
        }
        if (dice === 2) {
            console.log("you got two");
        }
        if (dice < 1 || dice > 6) {
            console.log("you did not roll the dice")
        }
    }

#### else if statement example

    {
        const dice = 1;

        if (dice === 1) {
            console.log("you got one");
        }
        else if (dice === 2) {
            console.log("you got two");
        }
        else (dice < 1 || dice > 6) {
            console.log("you did not roll the dice")
        }
    }

#### switch statement

    {
        switch(dice) {
            case 1:
                console.log("you got one");
            case 2:
                console.log("you got two");
            case 3:
                console.log("you got three");
                break;
            default:
                console.log("you did not roll the dice");
        }
    }
