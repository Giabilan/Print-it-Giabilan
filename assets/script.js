const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let banner__img = document.getElementsByClassName("banner__img");

let etape = 0;

let nbr__img = banner__img.length;

let precedent = document.querySelector(".arrow_left");
let suivant = document.querySelector(".arrow_right");

function enleverActiveImages() {
  for (let i = 0; i < nbr__img; i++) {
    banner__img[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr__img) {
    etape = 0;
  }
  enleverActiveImages();
  banner__img[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr__img -1;
  }
  enleverActiveImages();
  banner__img[etape].classList.add("active");
});
