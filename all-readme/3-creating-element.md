# Creating Element

First we will select list element `ul` then we will create a `li` using `createElement` and `append` it in `myList` element.

To add text in that created element we will use `newListItem.innerText = "new Item"`

Code example 👇

```
const myList = document.querySelector( 'ul') ;
const newListItem = document.createElement( 'li');
myList.append(newListItem)

newListItem.innerText = "new Item"
```

## Selecting Text

let's create an HTML element

```
<h1 class="heading">
    <span>Hello</span>
    Kushagra
<h1/>
```

Now time to select the text using `innerText`, `textContent` and `innerText` and see their outputs

```
const myText = document.getElementById('heading')

console.log(myText.innerText)
// -> Hello Kushagra

console.log(myText.textContent)   // It will show the text in the same way the text is arranged
// -> Hello
      Kushagra

console.log(myText.innerHtml)
// -> <span>Hello</span>
       Kushagra


```
