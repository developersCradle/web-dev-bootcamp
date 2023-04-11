## Section 9: Other Assorted Useful CSS Properties

# What I Learned

- Alpha channel range from ` 1 to 0 `
    - See throught for color
    - `rgba(0, 209, 112, 0.5)`

```
#rgba {
    width: 50%;
    height: 50%;
    background-color rgba(255,255,255,0.7); // Only background color get affected
}
```

<img src="rgba.PNG" alt="alt text" width="200"/>

- As you can see only `background-color` get affected,text itself is not

- Opacity is **property** which you give for element
    - Affect all elements inside given element, unlike **Alpha channel**

```
#opacity{
    width: 50%;
    height: 50%;
    background-color: yellow;
    opacity: 0.3; //Opacity is property
}
```

- [Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)

<img src="opacity.PNG" alt="alt text" width="200"/>

- Opacity affects **whole** element

- **Postion** tells  how `top`, `right`, `bottom`, `left` propertyes dictates

- [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)


- Static is default `position: static;`

- Example, `top`,`right`,`bottom`,`left` are not affected is **static** is in place

```
#static #middle {
    postion: static;
    top: 100px;
}
```

<img src="static.PNG" alt="alt text" width="200"/>

- Middle one is static one, **nothing changes**
    - For example ` top: 100px ` has not effect if element is **static**

- `position:relative` set position relative where it would be, gets affected by `top`,`right`,`bottom`,`left`

```
#relative #middle {
    postion: relative;
    top: 50px;
    left: 50px;
}
```

- Following would push element down from **top: 50px** and push from **left:50px**


<img src="relative.PNG" alt="alt text" width="200"/>

- Element moves down and right 


- `position:absolute` element is removed from normal document flow


```
#absolute #middle {
    postion: absolute;
}
```

<img src="absoluteInProgress.PNG" alt="alt text" width="200"/>

- 1. With **Absolute** element is hidden behind the middle element 
    - Removes completly from document flow
```
#absolute #middle {
    postion: absolute;
    top: 50px;
    left: 50px;
}
```

<img src="absoluteInProgress2.PNG" alt="alt text" width="200"/>

- It is positioned relative to its closest positioned ancestor, it is placed initial containing block
    - Basicly means `<body>`
    - Positioned means, if element is anything other than **static** 

- If in otherhand we positon parent element as `relative`, `absolute` behaves litle bit differently

```
#absolute {
    position : relative; 
}
```

```
#absolute #middle {
    position: absolute;
    top: 1px;
    left: 1px;
}

```

<img src="relativeAbsolutePosition.PNG" alt="alt text" width="200"/>

- As long parent element is positioned, `absolute` behaves relative to parent

- Last one will be `fixed`

```
#fixed #middle {
    postion: fixed;
    top: 0;
    left: 0;
}
```

<img src="Fixed.PNG" alt="alt text" width="200"/>

- It will go all way to of element, it will stay there and its removed from document flow


- You could make navigation bar using fixed values to stay on top

<img src="navBarWithFixed.PNG" alt="alt text" width="500"/>


