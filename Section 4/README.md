# Section 4: HTML: Next Steps & Semantics

HTML: Next Steps & Semantics

# What I Learned

- HTML5 represents two concepts
	- New version of HTML5 with new elements, attributes and behaviour
	- Larger set of technologies(3d inside browser etc)
		- Basically new stuff in HTML

<img src="html5Standard.PNG" alt="alt text" width="600"/>

- We never install html, its basically document how it should work -> called HTML standard
	- Browsers implements browsers based on these standards
- How HTML should work [HowHTMLshouldWork](https://html.spec.whatwg.org/)
	- Browser implements version of this
		- Firefox, IE, Chrome etc....

<img src="InlineBlock.PNG" alt="alt text" width="600"/>

- **Block element** takes whole space
- **Inline element** fits in

- Examle below

<img src="blockAndInlineExample.PNG" alt="alt text" width="600"/>

- And how these can be seen from developer tools

<img src="blockInsideDevTools.PNG" alt="alt text" width="800"/>

- As u can see **block**, expands for while grid of space, see blue color

<img src="elementInsideDevTools.PNG" alt="alt text" width="800"/>

- While **inline** fits in with the content

- `<div>` is just generic container or to group things together
	- **Block level** element

- [Div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)

<img src="divInAction.PNG" alt="alt text" width="800"/>

- Using div to group text and picture togeteher
	- Used to make things together inside **block level** element

- Example using code `div`
```
	<div class="warning">
    <img src="/media/examples/leopard.jpg"
         alt="An intimidating leopard.">
    <p>Beware of the leopard</p>
	</div>
```

- [Span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)

- Span is another generic container element, but its **inline element**
	- Therefore, its good if you want to groub some stuff inside something, while keeping the layout the same. Example below

<img src="usingSpan.PNG" alt="alt text" width="600"/>

- Example adding style to these `spans`

- `<hr>` makes line [Hr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

- `<br>` line brake [Br](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
	- Uselfull inside paragraph to go next line

<img src="brInAction.PNG" alt="alt text" width="400"/>

- Linebrakes are ignore usless you put `<br>`

<img src="brInActionVisualisation.PNG" alt="alt text" width="500"/>

- Superscript `<sup>` [Sup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
	- Text elevated from baseline
	- Example `<sup><a href="somesource.com">[2]</a></sup>`
<img src="subDemonstration.PNG" alt="alt text" width="150"/>

- Subscript `<sub>` [Sub](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
	- Text lower from baseline

- HTML Entityes allows use different symbols which are hard to type or are reserved 


<img src="htmlEntityes.PNG" alt="alt text" width="600"/>

- [EntityCodes](https://html.spec.whatwg.org/multipage/named-characters.html)

- Example writing less than symbol
	- `&lt;` OR `&#60;`

- We can use **Entity Name** or **Entity number**

<img src="EntityName.PNG" alt="alt text" width="600"/>

- [Stripe](https://stripe.com/en-fi) (has Markup) **vs** (uses Divs)[Medium](https://medium.com/)

- Semantic markup, meaningful markup. They add meaning to markup
- `<main>` is just like `<div>`
- `<header>` is just like `<div>`
- `<section>` is just like `<div>`
- `<nav>` is just like `<div>`
	- All these behave like `<div>`, but with different names
- Meaningful markup helps automatics bots to identify stuff in website
	- More friendly for other programs
	- Better for screenreaders
		- Acts as hooks