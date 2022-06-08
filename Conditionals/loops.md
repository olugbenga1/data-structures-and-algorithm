### Loops

This will repeatedly run a block of code while condition is true

#### While Loop

    {
        let amount = 10;

        while (amount > 0) {
            console.log("I have " + amount + " dollars and I'm going to the mall")
            amount --;
        }
    }

#### Do While Loop

This repeatedly runs a block of code while condition is true. Code block first, condition second. Runs code atleast once

    {
        let money = 0;

        do {
            console.log("You have " + money + " dollars");
            money++;
        } while (money < 10);
    }

#### For Loop

It repeatedly runs a block of code while conditions is true

    {
        let i;
        for (i = 0; i < 10; i++) {
            console.log("and the number is : " + i)
        }
    }

    {
        for (let number = 11; number >= 0; number --) {
            console.log("and the number is :" + number);
        }
    }
