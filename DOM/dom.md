# DOM

When you think of the DOM, think of css. In that, you always want to select the element first, then decide the effect you want to apply to the selection.

When you select an element and assign it to a variable, it returns a nodelist or a node object.

Nodelist are array-like objects and can use some array methods. However, nodelist can also be converted into an array.

    {
        console.dir(document); // This returns all the methods and properties we have on the node object we are selecting, in this case the document.
    }

## getElementById()

This returns the element with the specified id.

    {
        const h1 = document.getElementById("title");
        h1.style.color = "red";
    }

## getElementsByTagName()

This returns all elements with the specified tag name. It returns an HTMLCollection which has an array-like structure but cannot run array methods like forEach(), map() etc. length property, indexes, similar to arrays, can be applied to HTML collections. document.querySelectorAll which will be looked at later in this documemt returns a node list (a collection of nodes). Unlike HTML collection, on node lists, we can actually run forEach() method. But to get all array methods to work on node list, it should be turned into an array, and this can be achieved using a spread operator.

    {
        const headings = document.getElementByTagName("h2");
        headings[0].style.color = "red"; // Changes the color of h2 with index of 0 in the HTML collection to red

        const items = document.getElementsByTagName("li"); // returns all elements with tag li in an HTML collection

        // using the spread operator to convert HTML collections to an array
        const betterItems = [...items];

        // Now we can apply any array method to betterItems
    }

## querySelector() & querySelectorAll()

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

## Navigating the DOM

We have learnt how to select elements in the DOM and choose what style to apply to them. We can take this a step further by learning how to traverse the DOM by working with DOM properties such as children, childNodes, firstChild, lastChild.

    {
        <ul id="result">
            <li class="special">apple</li>
            <li>orange</li>
            <li class="special">banana</li>
            <li>pear</li>
            <li class="special">tomato</li>
        </ul>

        const result = document.querySelector("#result");
    }

### childNodes

This returns all childNodes including whitespace which is treated as text node.

    {
        const allChildren = result.childNodes;
        console.log(allChildren); // This will return 11 children because the childNodes property includes white spaces.
    }

### children

This returns all the direct children of the element.

    {
        const children = result.children;
        console.log(children); // This returns all the 5 li
    }

### firstChild vs lastChild

This will return the firstchild and the lastchild, but text(whitespace) instead of the li.

    {
        console.log(result.firstChild);
        console.log(result.lastChild);
    }

### parentElement

This allows us to target parent element when working with the DOM.

    {
        <div class="grand-parent">
            <div class="parent">
                <h2></h2>
            </div>
        </div>
    }


    {
        const heading = document.querySelector("h2");
        console.log(heading.parentElement); // This will return the div with the class of parent

        console.log(heading.parentElement.parentElement); // This will return a div with a class of grand-parent

        // Essentially we can chain parentElement property to keep targeting parent elements in the DOM.
    }

### previousSibling vs nextSibling

    {
        <ul id="result">
            <li class="first">first</li>
            <li>list item 2</li>
            <li>list item 3</li>
            <li id="last">last</li>
        </ul>
    }

nextSibling

    {
        const first = document.querySelector(".first");
        const second = first.nextSibling; // This gives the whitespace (text) and not list item 2

        const actualSecond = first.nextSibling.nextSibling;
        console.log(actualSecond); // This now gives list item 2
    }

previousSibling

    {
        const last = document.querySelector("#last");
        const third = last.previousSibling.previousSibling;
        console.log(third); // This returns the list item 3
    }

### previousElementSibling vs nextElementSibling

With these properties, you dont need to worry about the whitespace. You can just grab the previous element or next element using the properties. Using the example code above

    {
        const first = document.querySelector(".first");
        first.nextElementSibling.style.color = "red";
        const last = document.querySelector("#last");
        last.previousElementSibling.style.color = "blue";
    }

### nodeValue vs textContent

    {
        <h1 id="special">This is special content</h1>
    }

    {
        // nodeValue
        const item = document.getElementById("special");
        const value = item.nodeValue;
        console.log(value); // This will return null
        console.log(item.childNodes); // This will return a nodelist. You can access the text in the nodelist by targeting the index i.e. console.log(item.childNodes[0].nodeValue or we can use item.firstChild.nodeValue)
    }

    {
        // textContent
        const item = document.getElementById("special");
        const easyValue = item.textContent;
        console.log(easyValue); // This returns the text "This is special value". textContent is easier to work with
    }

### getAttribute vs setAttribute

    {
        <ul>
            <li class="first">I have a class of first</li>
            <a href="first.html" id="link">random link</a>
            <li>I have no attributes</li>
        </ul>
    }

    {
        // How to get attributes
        const first = document.querySelector(".first");
        const classValue = first.getAttribute("class");
        console.log(classValue); // returns "first"

        const link = document.getElementById("link");
        const showLink = link.getAttribute("href");
        console.log(showLink); // returns "first.html"

        // How to set attributes
        const last = link.nextElementSibling;
        last.setAttribute("class", "first");
        last.textContent = "I also have a class of first";
        console.log(last);

        const links = document.querySelectorAll(".first");
        console.log(links);
    }

### classList vs className

    {
        <style>
            .colors {
                background: red,
                color: white
            }
            .text {
                font-size: 2rem;
                letter-spacing: 1rem;
            }
        </style>
    }

    {
        <body>
            <h1 id="first" class="colors">I'm first element</h1>
            <h1 id="second">I'm second element</h1>
            <h1 id="third">I'm third element</h1>
        </body>
    }

    {
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const third = document.getElementById("third");

        const classValue = first.className;
        // console.log(classValue);

        second.className = "colors";

        second.className = "text"; // this overides colors, which means text is now the only class in the element.

        second.className = "colors, text";
    }

classList seems like a bit better solution since class name won't overwrite on individual assignment.

    {
        third.classList.add("colors");
        third.classList.add("text"); // This does not overwrite class name "colors". The value of third now has two classes, colors and text.

        // Let's add multiple classes with classList

        third.classList.add("text", "colors", "fonts") // It is different from when using className

        // check if an element has a class in it's class list
        let result = third.classList.contains("colors")

        if (result) {
            console.log("hello world");
        } else {
            console.log("does not contain the class color");
        }

        third.classList.remove("text"); // removes the class "text"

        const classValue = third.classList;
        console.log(classValue);
    }

## createElement("element") vs createTextNode("text content") vs element.appendChild(childElement)

Add Elements dynamically

    {
        <style>
            .red {
                background: red;
                color: white;
            }
            .blue {
                background: blue;
                color: white
            }
        </style>
    }

    {
        <body>
            <div id="result">
                <h1 class="red">I'm the child of result</h1>
            </div>
        </body>
    }

    {
        const result = document.getElementById("#result");

        // create empty element
        const bodyDiv = document.createElement("div")

        // create text node
        const text = document.createTextNode("a simple body div");

        bodyDiv.appendChild(text);
        document.body.appenChild(bodyDiv);

        // create new heading element and add to result div

        const heading = document.createElement("h2");
        const headingText = document.createTextNode("dynamic heading");

        heading.appendChild(headingText);
        document.body.appendChild(heading);
    }

### insertBefore("element", "location")

    {
        const result = document.getElementById("#result");

        // create empty element
        const bodyDiv = document.createElement("div");
        const first = document.querySelector(".red");

        // create text node
        const text = document.createTextNode("a simple body div");

        bodyDiv.appendChild(text);
        document.body.insertBefore(bodyDiv, result);

        // create new heading element and add to result div

        const heading = document.createElement("h2");
        const headingText = document.createTextNode("dynamic heading");
        heading.appendChild(headingText);
        heading.classList.add("blue");
    }

### replaceChild("new", "old")

We will be creating a brand new element to show this and also referencing the code above like `bodyDiv`.

    {
        const smallHeading = document.createElement("h6");
        const smallText = document.createTextNode("I'm a small heading");
        smallHeading.classList.add("red");
        smallHeading.appendChild(smallText);
        document.body.replaceChild(smallHeading, bodyDiv);
    }
