# Section 24: Introducing The World Of The DOM

Introducing The World Of The DOM
# What I Learned
- DOM is JS way of looking webpage
    - Bunch of objects which you can acces via JS
<img src="dom.JPG" alt="alt text" width="600"/>
- Js object has relationships
- `Document` is most parent
    - Object like `window`
- To see this in console 
    - `console.dir(document);`
<img src="document.JPG" alt="alt text" width="600"/>
    - Created automatically by browser based on content of page
<img src="domCreation.JPG" alt="alt text" width="600"/>
- Dom has many ways to manipulate site
- `Element` is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit
- Selection methods from DOM
    - These three main one **old ways** of selecting
    - **getElemetById**
        - Exist on `document`
        - `document.getElementById('banner');`
        - DOM Object is returned, not html
<img src="banner.JPG" alt="alt text" width="600"/>
    - **getElementsByTagName** & **getElementsByClassName**
        - **Selects more than one**
        - returns `HTMLcollection`
            - Looks like array, **not array**
            - Array methods does not work, example `.map()` won't work
            - Iterable collection
<img src="getElementsByTagNameInAction.JPG" alt="alt text" width="600"/>
- Iterable collection, we still can loop trough it
```
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img);
}
```
<img src="querySelectors.JPG" alt="alt text" width="600"/>

- More newer way manipulating DOM
    - Many tools in one
        - Selecting by:
        - **Returns first found match**
            - Class `document.querySelector('.square');`
            - Id `document.querySelector('.square');`
            - Element `document.querySelector('h1');`
- Selecting type `<a> `and with atrribute `Java`
<img src="typeAndAtrribute.JPG" alt="alt text" width="600"/>
- `querySelectorAll` same as above, byt returns many matches
- One usage of `querySelectorAll`, with descendant selector  from CSS
```
const links = document.querySelectorAll('p a');//Select paragraph which have anchor tags

for (let link of links) {
    console.log(link.href)
}
```

- Dom object manipulation propertyes/methods. **Most important ones**
<img src="domObjecMethods.PNG" alt="alt text" width="600"/>

- `Inner text` is text between opening and closing tag
- `document.querySelector('p').innerText`
    - Gets text inside `<p>this text will be selected</p>`
- `textContent` almost like same as `innerText` with some differences
- `textContent` gives uss everything
- `innerHTML` gives uss html content, we could add `document.querySelector('p').innerText = '<b>This is bold</b>'`. Will be treated as HTML and would be shown as bold
- `id="banner"` and `class="toctitle"` are attributes
- manipulating attribute
    - `document.querySelector('#banner').id = 'newId';
- We can also access atrribute throught `getAttribute()`
- Setting attributes can be
- <img src="settingAttribute.JPG" alt="alt text" width="600"/>
- (manipulating style trought JS) Selecting and manipulating DOM element style can be tricky. `h1.style` not the same as applied `css style`
    - Apply css style, wont be shown in DOM element
- Example of manipulating style trought DOM element
    -`h1.style.fontSize = '3m';`
    - Assigned values needs to be **strings**
- Changes all links to diffrent color trought js `style` 
```
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
}
```