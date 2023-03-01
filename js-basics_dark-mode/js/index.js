console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggletMode = document.querySelector('[data-js="toggle-button"]');
darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
lightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggletMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
