let Data = [
  { id: 0, src: "assets/img/header-1.jpg" },
  { id: 1, src: "assets/img/header-2.jpg" },
  { id: 2, src: "assets/img/header-3.jpg" },
  { id: 3, src: "assets/img/header-4.jpg" },
];

let ax = document.querySelector(".slider-img");
let nextBtn = document.querySelector(".slider-forward-btn");

// console.log(Data[1]);
let clr = setInterval(nextpic, 3000);
nextBtn.addEventListener("click", nextpic);

let index = 0;
function nextpic() {
  index++;
  if (index == 4) {
    index = 0;
  }
  //   console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  clearInterval(clr);
  clr = setInterval(nextpic, 3000);
}
