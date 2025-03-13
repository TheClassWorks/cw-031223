// console.log("innerWidth:" + window.innerWidth);
// console.log("innerHeight" + window.innerHeight);
// console.log("----------------");
// console.log("outerWidth:" + window.outerWidth);
// console.log("outerHeight" + window.outerHeight);
// console.log("----------------");
// let box = document.querySelector("body");
// console.log("clientWidth", box.clientWidth);
// console.log("clientHeight", box.clientHeight);
// console.log("------------------");
// console.log("scrollY", window.scrollY);





let body = document.querySelector("body");
let percent = Math.round((window.scrollY / (body.clientHeight - window.innerHeight)) * 100);
console.log(percent);

let scroll = document.getElementById("scroll");
scroll.style.width = percent + "%";
