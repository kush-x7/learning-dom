# Event Listeners

- For click event listeners we use `addEventListener("click", ()=>{})`
- For mouseover event listeners we use `addEventListener("mouseover", ()=>{})`

```
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert(1);
});

button.addEventListener("mouseover", () => {
  alert(1);
});
```

## Creating Modal

First we will `select the element` than when we `click on the button` and check the `hiddenContent` that whether it `contain hidden class or not` and we will `remove` if it contain hidden class and `add` if not contain hidden class.

```
const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

revealBtn.addEventListener("click", () => {
if (hiddenContent.classList.contains("hidden")) {
hiddenContent.classList.remove("hidden");
} else {
hiddenContent.classList.add("hidden");
}
});
```
