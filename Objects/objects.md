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
