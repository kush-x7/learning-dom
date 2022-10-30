const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert(1);
});

button.addEventListener("mouseover", () => {
  alert(1);
});

// Creatinga modal

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

revealBtn.addEventListener("click", () => {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
});
