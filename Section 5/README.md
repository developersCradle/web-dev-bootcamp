# Section Section 5: HTML: Forms & Tables

Section 5: HTML: Forms & Tables

# What I learned 

<img src="tablesInOldDays.JPG" alt="alt text" width="500"/>

- In old days tables were used likes such, for layout of website
	- [Using tables to arrange webiste](http://www.dolekemp96.org/main.htm)
	- [Using tables to arrange webiste](https://www.spacejamanewlegacy.net/)
- Should not use nowdays for layouts
- Like such 
	- [Using tables to arrange data](https://en.wikipedia.org/wiki/List_of_largest_cities#List)
- [Largest organisms table](https://en.wikipedia.org/wiki/Largest_organisms#Heaviest_living_bird_species)
- td `tabel data or table data`, presents single cell
	- [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
- We need to groub our td insde `<tr>`

```
    <tr>
        <th scope="row">Khiresh Odo</th>
        <td>7</td>
        <td>7,223</td>
    </tr>
```


<img src="tablesModernDefination.JPG" alt="alt text" width="500"/>

- 1. `<thead>` should be used for this defination for header
- 2. `<tbody>` should be used for this body defination

```
    <table>
        <thead>
            <tr>
                <th rowspan="2">Animal</th>
                <th colspan="2">Average Mass</th>
                <th rowspan="2">Flighted</th>
            </tr>
            <tr>
                <th>kg</th>
                <th>lb</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ostrich</td>
                <td>104</td>
                <td>230</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Somali Ostrich</td>
                <td>90</td>
                <td>200</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Wild Turkey</td>
                <td>13.5</td>
                <td>29.8</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>
</body>
```

- To manipulate how much tables takes place, you could use tablespan tablerow

```
           <tr>
                <th rowspan="2">Animal</th>
                <th colspan="2">Average Mass</th>
                <th rowspan="2">Flighted</th>
            </tr>
```
- Forms are collected inside container, callled form element

<img src="formElement.JPG" alt="alt text" width="500"/>


- Spesifying form actions
	- `action` where to send data

<img src="formActions.JPG" alt="alt text" width="400"/>

- Below demostaring after submitting form, goes to spesifed url
	- Action is making HTTP reuqust to spsiefid URL, **you coud type this one out** and go there manually
	
<img src="formsActionInAction.JPG" alt="alt text" width="500"/>


