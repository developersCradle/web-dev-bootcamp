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
        - Select more than one
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