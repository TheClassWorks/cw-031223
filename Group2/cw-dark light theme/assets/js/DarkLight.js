let themeBox = document.querySelector(".themeBox");
let htmlElem = document.querySelector("html");

if (localStorage.getItem("theme") == "dark") {
    htmlElem.setAttribute("data-bs-theme", "dark");
    themeBox.classList.remove("bi-moon");
    themeBox.classList.add("bi-brightness-high");
    localStorage.setItem("theme", "dark");
}
else{
    localStorage.setItem("theme", "light");
}


themeBox.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "light") {
    htmlElem.setAttribute("data-bs-theme", "dark");
    themeBox.classList.remove("bi-moon");
    themeBox.classList.add("bi-brightness-high");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElem.setAttribute("data-bs-theme", "light");
    themeBox.classList.add("bi-moon");
    themeBox.classList.remove("bi-brightness-high");
    localStorage.setItem("theme", "light");
  }
});

// localStorage.setItem("fname", "mansoori");

// console.log(localStorage.getItem("fname"));
