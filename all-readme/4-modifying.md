# Modifying Attributes & Classes

Let's assume we have a HTML element `<h1 class="hello"></h1>` and we want to assign attributes to it.

```
const myHeading = document.querySelector('h1')

myHeading.setAttribute('id', 'main-heading')

myHeading.removeAttribute('id',)


```

## Getting Attributes of elements

We will be using `getAttribute('class')` to get attribute value of class

```
const myHeading = document.querySelector('h1')

console.log(myHeading.getAttribute('class'));   -> hello
```

## Adding and removing class

We will use `myHeading.classList.add('new-class-name')` to add a new class and to remove the class we will use `myHeading.classList.remove('new-class-name')`

## Checking for class (True / False)

`myHeading.classList.contains('container')` contains will check whether the class is present or not and it will give output according to it.

## Remove Elements

`myHeading.remove()` will remove the complete element
