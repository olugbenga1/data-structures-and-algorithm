### Objects

Objects in javascript are a collection of properties. Or the properties are also referred to as `keys`, the properties/keys have `values`. if the value of a property is a function, it is referred to as a `method`.

    {
        const person = {
            name: "john",
            lastName: "Doe",
            age: 46,
            education: false,
            married: true,
            siblings: ["toby", "ruth", "vicky"],
            greeting() {
                console.log("hello my name is john doe")
            }
        }

        console.log(person.name);
        console.log(person.siblings[2]);
        person.greeting();
        person.name = "matt"; // changes the value "john" to "matt";
    }

### Math

Standard built-in objects always available in your program.

```
const number = 4.56789;
const result = Math.floor(number);
console.log(result);
```

Some other methods can be called on the Math object such as Math.sqrt(number), Math.floor(number), Math.ceil(number), Math.min(number, number ...), Math.random.

### Date

It is also a global object. It is always available in your javascript program.

    {
        const date = new Date();
        // To get months and days of the week, you need to have some reference like an array of months of the year, an array of days of the week because

        const month = date.getMonth();
        console.log(month); // This will return a number
    }
