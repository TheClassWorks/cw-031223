// console.log("innerWidth", window.innerWidth);
// console.log("innerHeight", window.innerHeight);
// console.log("--------------");
// console.log("outerWidth", window.outerWidth);
// console.log("outerHeight", window.outerHeight);
// console.log("---------");
// let box = document.querySelector("body");
// console.log("clientWidth", box.clientWidth);
// console.log("clientHeight", box.clientHeight);
// console.log("-----------------");
// console.log("scrollY", window.scrollY);

let box = document.querySelector("body");
let scroll = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  let percent = Math.round((window.scrollY / (box.clientHeight - window.innerHeight))*100);
  console.log(percent);

  scroll.style.width = percent + "%";
});
