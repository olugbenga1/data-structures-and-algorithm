## DOM

When you think of the DOM, think of css. In that, you always want to select the element first, then decide the effect you want to apply to the selection.

When you select an element and assign it to a variable, it returns a nodelist or a node object.

Nodelist are array-like objects and can use some array methods. However, nodelist can also be converted into an array.

    {
        console.dir(document); // This returns all the methods and properties we have on the node object we are selecting, in this case the document.
    }

### getElementById()

This returns the element with the specified id.

    {
        const h1 = document.getElementById("title");
        h1.style.color = "red";
    }

### getElementsByTagName()

This returns all elements with the specified tag name. It returns an HTMLCollection which has an array-like structure but cannot run array methods like forEach(), map() etc. length property, indexes, similar to arrays, can be applied to HTML collections. document.querySelectorAll which will be looked at later in this documemt returns a node list (a collection of nodes). Unlike HTML collection, on node lists, we can actually run forEach() method. But to get all array methods to work on node list, it should be turned into an array, and this can be achieved using a spread operator.

    {
        const headings = document.getElementByTagName("h2");
        headings[0].style.color = "red"; // Changes the color of h2 with index of 0 in the HTML collection to red

        const items = document.getElementsByTagName("li"); // returns all elements with tag li in an HTML collection

        // using the spread operator to convert HTML collections to an array
        const betterItems = [...items];

        // Now we can apply any array method to betterItems
    }

### querySelector() & querySelectorAll()

When you use querySelector, you select one single element, while when you use querySelectorAll, you select all and get a nodelist. We can run forEach() on the nodelist.

    {
        <ul id="result">
            <li class="special">apple</li>
            <li>orange</li>
            <li class="special">banana</li>
            <li>pear</li>
            <li class="special">tomato</li>
        </ul>
    }

    {
        const result = document.querySelector("#result");
        result.style.backgroundColor = "blue";

        const item = document.querySelector(".special");
        console.log(item); // returns the first child of the li

        const lastItem = document.querySelector("li:last-child");
        console.log(lastItem);

        const list = document.querySelectorAll(".special");

        // let us run for each on our nodelist. We couldnt do this when we use getElementsByClassname;

        list.forEach(function(item) {
            console.log(item);
            item.style.color = "yellow";
        })
    }

    What's cool about querySelectorAll is that we can right away use forEach().
