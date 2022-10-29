# Traverse the DOM

This is the HTML in which we will be learning traversal

```
<div class="container">
      <h1 id="main-heading" class="hello">Favourite Movie Jungle</h1>
      <ul>
        <li class="li-items">The Matrix</li>
        <li class="li-items">The Matrix</li>
        <li class="li-items">The Matrix</li>
        <li class="li-items">The Matrix</li>
        <li class="li-items">The Matrix</li>
      </ul>
</div>

```

## 1. Parent Traversal

While Doing parent Traversal do remember to use `parentNode` instead of `parentElement` because if We select `HTMl documentElement` and check its parentNode then we will get `document` but in parentElement we will fet `null`

```
let myList = document.querySelector("ul");

// console.log(myList.parentNode);
// console.log(myList.parentElement);
```

## 2. Child Traversal

While Doing child traversal do remember to use `children` instead of `childNode` because child node will give output in which we will get text between each element.
Also use `firstChildElement` and `lastChildElement`

## 2. Sibling Node Traversal

```
let ul = document.querySelector('ul');

console.log(ul.previousElementSibling); -> it will show main-heading element
console.log(ul.nextElementSibling); -> it will show null

```
