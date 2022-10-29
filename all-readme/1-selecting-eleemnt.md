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

We will use `document.getElementById("main-heading")` to fetch the heading element and `<h1 id="main-heading">` will be our output.

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

## 3. Selecting element by Tag Name

It is same as selecting the elements by class name but instead of class we will use the `tag` like `document.getElementsByTagName("li")`

## 4. Selecting element by Query Selector

For selecting one element we use `querySelector('div')`.

- we use `.` for class and `#` for id.

## 5. Selecting element by Query Selector All

For selecting all elements we use `querySelectorAll('div')`.
