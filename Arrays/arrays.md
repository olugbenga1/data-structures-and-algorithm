# Arrays

Arrays offer us an easy way to store list of items in javascript. We can also access them and perform various operations on them with great ease.

Arrays are stored in [] and are 0 index based.

    {
        const friends = ["john", "peter", "uzo", 53, undefined, null];

        console.log(friends[1]); // "peter"

        friends[3] = "anna"; // changes the value 53 to "anna"
    }

## Array Properties and Methods

    {
        let names = ["john", "toby", "anna", "barry", "bobo"]
    }

### length

    {
        console.log(names.length); // outputs 5
        console.log(names[names.length - 1]); // outputs "bobo" the last name in the array
    }

### concat

    {
        const lastNames = ["pepper", "onion", "banana"];
        const allNames = names.concat(lastNames);
        console.log(allNames); // returns a new concatenated array
    }

### reverse

    {
        console.log(allNames.reverse()); // returns the reverse of the concatenated array
    }

## Alter items from the beginning of an array

### unshift

> Adds to the beginning of the array

    {
        allNames.unshift("susy");
        console.log(allNames); // adds susy to the beginning of the array
    }

### shift

> Removes items from the beginning of the array. In this case you don't need to pass any parameter.

    {
        allNames.shift();
    }

## Alter items at the end of an array

### push

> Adds items to the end of an array

    {
        allNames.push("susy");
        console.log(allNames);
    }

### pop

> Removes items from the end of an array. You do not need to pass an argument in this case

    {
        allNames.pop();
        console.log(allNames);
    }

---

### Splice

> We can grab specific items out of the array. It mutates the original array.

    {
        const specificNames = allNames(2, 1); // the arguments mean starting index is 2, and we are going to get 1 item out of it.
        console.log(specicNames); // returns item in index 2
        console.log(allNames); // returns allNames array without index 2 item.
    }

---

## Arrays and For loop

    {
        const names = ["anna", ""susy, "bob"];
        const lastName = "baker";
    }

Let us create a new array with each name combined with the last name

    {
        let newArray = [];
    }

    {
        //for loop
        for(let i = 0; i < names.length; i++) {
            console.log(i);
            console.log(names[i]);
            const fullName = `${names[i]} ${lastName}`;
            newArray.push(fullName);
        }
    }

## More Array Methods

Now that we have some fundamental understanding of higher order functions and callback function(check functions.md for reference), we will put them to use when implementing 4 of these array methods forEach, map, filter, find, reduce. These methods help us iterate over arrays in javascript with no for loop required. They basically accept callback function as an argument, call callback against each item of an array and reference item in callback parameter.

### forEach

One thing to note about this method is that it does not return a new array. Some other array methods do, but forEach does not.
forEach iterates through every element in an array.

There are two methods for passing the callback function in an array method.

- First Method

  {

```
  const people = [{name: "bob", age: 20, position: "developer"}, {name: "peter", age: 25, position: "designer"}, {name: "susy", age: 30, position: "the boss"}];
```

        function showPerson(person) {
            console.log(person.position); // Will return the position of each of the persons. i.e. developer, designer, the boss
        }

        people.forEach(showPerson)

}

- Second Method

  ```
  people.forEach(function(item) {
  console.log(item.position.toUpperCase);
  });
  ```

  > Note that you do not invoke the function

### map

map unlike forEach() returns a new array. map does not chamge size of the original array. map uses values from original array when making a new one. We will be setting our function to a variable because we know map will return a new array.

```
  const people = [{name: "bob", age: 20, position: "developer"}, {name: "peter", age: 25, position: "designer"}, {name: "susy", age: 30, position: "the boss"}];
```

    {
        const ages = people.map(function(person) {
            return person.age;
        })

        console.log(ages); // return an array [20, 25, 30]
    }

In this next example, we are going to return a new array of objects with the names in uppercase and the ages + 20:

    {
        const newPeople = people.map(function(person) {
            return {
                firstname: person.name.toUpperCase(),
                age: person.age + 20
            }
        })
    }
