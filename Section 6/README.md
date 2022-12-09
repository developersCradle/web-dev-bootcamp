## Section 6: CSS: The Very Basics

# What I Learned

<img src="css.PNG" alt="alt text" width="400"/>

- [SelectorsExample](https://codepen.io/TurkAysenur/pen/JjGKKrP)

- Css is written as rules

- Example selector below

<img src="selectorExample.PNG" alt="alt text" width="500"/>

- 1. Input which type is text
        - `<input type="text">`
- 2. Other selector specifier


<img src="manyCssPropertyes.PNG" alt="alt text" width="500"/>

- There is so many css styles **no need to remember** them all!
    - Just learn where to find and research

- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

- We can use **style** inside each element

`<button style="background-color: palegreen">I AM BUTTON</button>`

- Or beter way add external css

<img src="linkingCssToCode.JPG" alt="alt text" width="400"/>


- Css has different color systems
    - RGB
    - Hexadecimal
    - HSL(not popupular)

<img src="RGB.PNG" alt="alt text" width="500"/>

- Recomended to use color picker
    - If comppany has **color palette** use those 

- [Color Names](https://htmlcolorcodes.com/color-names/)
- [Color Picker](https://htmlcolorcodes.com/color-picker/)

<img src="hex.PNG" alt="alt text" width="500"/>

- We are using hexadecimal, because is more compact system than  

<img src="hexChannels.PNG" alt="alt text" width="500"/>

<img src="semiColons.PNG" alt="alt text" width="500"/>

- Remember semicolons, no error in browser!

- Different common text properties. **Good to know**

<img src="CssTextPropertyes.PNG" alt="alt text" width="400"/>


- First property is `text-align`
    - Sets horizontal alligemnt on **element**
        - Not **page itself**
            - But, within given **element**
    - [Text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
    - Example below

```
h1 {
        text-align: center;
    }
```

<img src="centerAlligment.PNG" alt="alt text"  width="900"/>

- `<h1>` takes whole block, so wihth `text-align: center` text will be **centered!**
- `font-weight:`
    - Can be set number or keywords
- [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- `text-decoration: underline`
    - Underlines text
    - Can be more complicated than this
        - Blue underline `text-decoration: blue underline`
        - This can be used when wana stride trought or remove underline
            - `text-decoration: none`

- `line-height` height of each line of text

<img src="lineHeight.JPG" alt="alt text"  width="400"/>

- Controll spaces between letters `letter-spacing` 

<img src="LetterSpasing.JPG" alt="alt text"  width="300"/>

- Font size property controlls size of font
    - Many type to input value
    - [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- Some example to input font-size

```
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;
```
- There is different types to input units

<img src="inputType.JPG" alt="alt text"  width="900"/>

- **Absolute** because unit size does not change regardless of its parent

<img src="pixelsAbsoluteUnit.JPG" alt="alt text"  width="900"/>

- **Px** should not be used in responsive websites
    - There is better units than Pixels
        - We will learn more of them later 
- Font Family, changing font 
- Browsers have some build-in fonts
- Easy way to change font `font-family: Verdana`
- [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [cssFont](https://www.cssfontstack.com/)
        