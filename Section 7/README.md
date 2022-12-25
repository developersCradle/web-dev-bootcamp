## Section 7: The World of CSS Selectos

# What I Learned

- There is many different selectors


- **Universal Selector**, selects all
    - Not very common
```
* {
    color: black;
}
```

- **Element Selector**, selects all spesifed img elements
    - Very common
```
img {
    widyh: 100px;
    height: 200px;
}
```


- **Selector list**, selects both h1 and h2, seperated by comma

<img src="SelectorList.PNG" alt="alt text" width="500"/>

- **ID selector**

- Id usefull to spesify unique element
    - Id selectors should keep minumum as possible, there is better selectors, but these are good nonetheless

<img src="idSelector.PNG" alt="alt text" width="500"/>

- You can me your own color palette

- [Color palettes](https://coolors.co/palettes/trending)

- **Class Selector**

- Class selector uses `.`
    - Affects elemts with class tag
    - todo laita kuva
```
.complete {
    color: white;
}
```

- Descendant Selector

<img src="DecendatnSelector.PNG" alt="alt text" width="500"/>

- Uses space between
- Selects all `<a>` nested inside `<li>` 

```
span a {
    color: red;
}
```

<img src="DecendatnSelectorWorking.PNG" alt="alt text" width="500"/>

- Descendant selectors looks below first level untill it reaches point or the end. In this case finds `<a>` which is not clearly at first descendant
 
```

footer a {
    color: red;
}

```

<img src="AdjacentSelector.PNG" alt="alt text" width="500"/>

- Selects all `<p>` which comes after `<h1>`
    - Need to be in same level

- In HTML

```
<input type="text" placeholder="search" id="search">
<button>Log In</button>
```

```
input + button {
    background-color: pink;
}
```

<img src="AdjacentSelectorInAcation.PNG" alt="alt text" width="500"/>

- Adjacent Selector would work like such

<img src="DirectChild.PNG" alt="alt text" width="500"/>

- We use `>`, li:s which are direct childs of div, will be selected 

```
footer > a {
    color: #457b9d;
}
```
- Below Direct Child in action
    - Looks element `<a>` which has to be direct child of `<footer>`

<img src="DirectChildInAction.PNG" alt="alt text" width="600"/>

1. Only last `<a>` should get affected.

<img src="DirectChildInActionResult.PNG" alt="alt text" width="600"/>

- As you can see last **2.** `<a>`, will get affected not `<a>` in **s1.**


<img src="attributeSelector.PNG" alt="alt text" width="600"/>

- Selects based on attribute 

```

input[type="password"] {
    color: green;
}

```

- Example using Attribute Selector Following element would be selected and made to green

<img src="passordSelectedAtrributeSelector.PNG" alt="alt text" width="600"/>

- [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

- `input[type="password"] ` common usage of AttributeSelctor

<img src="pseudoClasses.PNG" alt="alt text" width="600"/>

- **pseudo-class** Gives extra modifiers to selected element with selectors
    - They start with `:`
    - Some examples below
    - They are states

- `:hover` when element is hovered over
    - Hover is very common

```

button:hover {
    background-color: red;
}

```

- `:active` when element active, cliked example

- In chrome DevTools you can inspect these states and force them on given element

<img src="statesInChrome.PNG" alt="alt text" width="600"/>


- [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)


- `:end-of-type` helps select nth element, example every third one


```

.post:nth-of-type(3n){
    backgroud-color: white;
}

```

- Every third gets selelected

<img src="every3thrd.PNG" alt="alt text" width="600"/>

- First third gets selected, whitout `n`

```

.post:nth-of-type(3){
    backgroud-color: white;
}

```

- Only third gets selected 

<img src="onlythirdGetsSelected.PNG" alt="alt text" width="600"/>

- **Pseudo elements**, modifiers to selectors `::` is used to indicate this one, but most browsers don't care `:` could also work
    - Pseudo elements are things which we are selecting
<img src="pseudoElements.PNG" alt="alt text" width="600"/>

- [PseudoElements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- Example `first-letter` pseudo eloment

```

h2::first-letter {
    font-size 50px;
}

```

<img src="FirstLetterWorking.PNG" alt="alt text" width="600"/>


- todo katso oleelliset tehtävät listaan