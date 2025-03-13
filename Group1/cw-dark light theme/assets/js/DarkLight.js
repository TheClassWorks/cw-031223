// localStorage.setItem("fname", "mansoori");
let themeBox = document.querySelector(".themeBox");
let htmlElem = document.getElementById("htmlelem");

if (localStorage.getItem("theme")=="dark") {
    themeBox.classList.remove("bi-moon");
    themeBox.classList.add("bi-brightness-high");
    htmlElem.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
}
else{
    themeBox.classList.add("bi-moon");
    themeBox.classList.remove("bi-brightness-high");
    htmlElem.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
}


themeBox.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "light") {
    themeBox.classList.remove("bi-moon");
    themeBox.classList.add("bi-brightness-high");
    htmlElem.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    themeBox.classList.add("bi-moon");
    themeBox.classList.remove("bi-brightness-high");
    htmlElem.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
