console.log("innerwidth", window.innerWidth);
console.log("innerheight", window.innerHeight);
console.log("-------------");
console.log("outerwidth", window.outerWidth);
console.log("outerheight", window.outerHeight);
console.log("-------------");
let bodyElem = document.querySelector("body");
console.log("clientwidth", bodyElem.clientWidth);
console.log("clientheight", bodyElem.clientHeight);
console.log("---------------");
console.log("scrollY", window.scrollY);

let scroll = document.getElementById("scroll");

let percent = Math.round((window.scrollY / (bodyElem.clientHeight - window.innerHeight)) * 100);
console.log(percent);

scroll.style.width = percent+ "%";
