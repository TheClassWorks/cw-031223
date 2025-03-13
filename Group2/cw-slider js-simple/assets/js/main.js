let Data = [
  { id: 0, src: "assets/img/header-1.jpg" },
  { id: 1, src: "assets/img/header-2.jpg" },
  { id: 2, src: "assets/img/header-3.jpg" },
  { id: 3, src: "assets/img/header-4.jpg" },
];

let ax = document.querySelector(".slider-img");
let nextBtn = document.querySelector(".slider-forward-btn");
let prevBtn = document.querySelector(".slider-back-btn");

// console.log(Data[0]);

let clr = setInterval(nextpic, 3000);
nextBtn.addEventListener("click", nextpic);
prevBtn.addEventListener("click", prevpic);

let index = 0;
function nextpic() {
  index++;
  if (index > 3) {
    index = 0;
  }
  //   console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  clearInterval(clr);
  clr = setInterval(nextpic, 3000);
}

function prevpic() {
  index--;
  if (index < 0) {
    index = 3;
  }
  //   console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  clr = setInterval(nextpic, 3000);
}
