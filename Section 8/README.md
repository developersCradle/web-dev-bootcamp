## Section 8: The CSS Box Model

# What I Learned

- Box model, means in css everything is box 
    - Even things which don't look like box are box, ie twitter icon

<img src="everythingIsAbox.PNG" alt="alt text" width="300"/>


- Content box is elemnt itself

<img src="boxModel.PNG" alt="alt text" width="600"/>

- Need to understand every of them to understand The Box Model

- **Width** and **Height**

<img src="widthAndHeight.PNG" alt="alt text" width="400"/>

- **Width** and **Height** controlls innercontent area

<img src="ContentBox.PNG" alt="alt text" width="400"/>

- Blue are is content box
- Setting width for content box

```

div {
    width: 200px;
}

```

<img src="ContentBoxSmaller.PNG" alt="alt text" width="600"/>

- Content box is width 200px now

<img src="border.PNG" alt="alt text" width="600"/>

- Border around element

- Most important ones border properties to understand are following

<img src="borderPropertyes.PNG" alt="alt text" width="500"/>

- Pixels are pretty common unit for defining border

```

#one {
    background-color: red;
    border-width: 5px;
    border-color: black;
    border-style: solid;
}

```
- We need all these three to show border

<img src="BorderApplied.PNG" alt="alt text" width="500"/>

- `box-sizing: border-box` makes element and border take pixels what it is was defined at beginning, in this case ``width: 200px``

- **Border** property is just shorthand shortcut to set border stuff show before
    - This is pattern where one propert set many others
        - This is common in css propertyes
- [Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)


```

#three {
    border-width: 4px;
    border-color: black;
    border-style: solid;
}

```

- Changes to with shortcut pattern to  such

```

#three{
    border: 4px solid black;
}

```
- This is more pattern to set css propertyes

- `border-radius` is to controll corners
    - [Border Radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) 
    - People using this to make different shapes in css