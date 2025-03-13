let themeBox = document.querySelector(".themeBox");
let htmlElem = document.querySelector("html");

if (localStorage.getItem("theme") == "dark") {
  htmlElem.setAttribute("data-bs-theme", "dark");
  themeBox.classList.add("bi-moon");
  themeBox.classList.remove("bi-brightness-high");
} else {
  localStorage.setItem("theme", "light");
}

// themeBox.addEventListener("click", () => {
//   if (localStorage.getItem("theme") == "dark") {
//     htmlElem.setAttribute("data-bs-theme", "light");
//     themeBox.classList.remove("bi-moon");
//     themeBox.classList.add("bi-brightness-high");
//     localStorage.setItem("theme", "light");
//   } else {
//     htmlElem.setAttribute("data-bs-theme", "dark");
//     themeBox.classList.add("bi-moon");
//     themeBox.classList.remove("bi-brightness-high");
//     localStorage.setItem("theme", "dark");
//   }
// });

themeBox.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "dark") lightMode();
  else darkMode();
});
// localStorage.setItem("fname", "mansoori");
// console.log(localStorage.getItem("fname"));
function lightMode() {
  htmlElem.setAttribute("data-bs-theme", "light");
  themeBox.classList.remove("bi-moon");
  themeBox.classList.add("bi-brightness-high");
  localStorage.setItem("theme", "light");
}
function darkMode() {
  htmlElem.setAttribute("data-bs-theme", "dark");
  themeBox.classList.add("bi-moon");
  themeBox.classList.remove("bi-brightness-high");
  localStorage.setItem("theme", "dark");
}
