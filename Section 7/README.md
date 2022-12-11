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
