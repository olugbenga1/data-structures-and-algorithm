# Null and Undefined

They both represent "no value". null values are set by the developer. Javascript sets the value of undefined.

## undefined

Javascript can not find a value for this.

    {
        let number;
        console.log(number); // This will be undefined as Javascript can not find a value for the variable number
    }

You can find values to be undefined where there is:

- variable without value
- missing function arguments
- missing object properties

## null

Developer sets the value.

    {
        let number = 20 + null; // This is more like 20 + 0, it will still result to 20;
    }
