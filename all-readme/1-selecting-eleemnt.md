# Selecting Element In The DOM

This is the HTML structure which we will be following while doing DOM manipulation.

Code example 👇

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

## 1. Selecting element by Id

Code example 👇

```
const heading = document.getElementById("main-heading");
console.log(heading);
```

**output** 👉 `<h1 id="main-heading">`

## 2. Selecting element by Class

For selecting a single class we will use ``

The `getElementsByClassName()` method returns a collection of elements with a specified class name(s).

The `getElementsByClassName()` method returns an HTMLCollection.

The `getElementsByClassName()` property is read-only.

Code example 👇

```
const listItems = document.getElementsByClassName("li-items");
console.log(listItems);
```

**output** 👇

```
HTMLCollection { 0: li.li-items, 1: li.li-items, 2: li.li-items, 3: li.li-items, 4: li.li-items, length: 5 }
​
0: <li class="li-items">
1: <li class="li-items">​
2: <li class="li-items">​
3: <li class="li-items">​
4: <li class="li-items">
```

## 3. Selecting element by Class
