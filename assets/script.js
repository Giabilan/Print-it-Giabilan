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
    tagLine: "Grand choix de coulesurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection de tous les éléments avec la classe "arrow"
const arrows = document.querySelectorAll(".arrow");

// Déclaration d'une variable "cursor" pour suivre la position actuelle du slide, i,itialisé à 1 
let cursor = 1; 

// Boucle sur *chaque* élément "arrow"
arrows.forEach(function (arrow) {
  // Ajout d'un event "click" à chaque flèche "arrow"
  arrow.addEventListener("click", function () {
    // Réinitialisation de la classe de l'élément dot actuel
    document.getElementById("dot" + cursor).className = "dot";

    // Si arrow à la classe "arrow_right"
    if (arrow.classList.contains("arrow_right")) {
      // Incrémentation de cursor de 1
      cursor = cursor + 1;
      // Si cursor atteint 5, il est réinitialisé à 1
      if (cursor === 5) { 
        cursor = 1; // Première image
      } 
    } else { // Sinon arrow à la classe "arrow_left"
      // Décrémentation de cursor de 1
      cursor = cursor - 1;
      // Si cursor atteint 0, il est réinitialisé à 4
      if (cursor === 0) {  
        cursor = 4; // Dernière image
      }
    } 

    // Ajout de la classe "dot_selected" à l'élément dot correspondant à la position actuelle du slide
    document.getElementById("dot" + cursor).className = "dot dot_selected";

    // cursor - 1 car le tableau commence à l'index 0 pour les images
    let currentImage = slides[cursor - 1].image;
    document.querySelector(".banner-img").src = `./assets/images/slideshow/${currentImage}`;

    // cursor - 1 car le tableau commence à l'index 0 pour les taglines (textes)
    let currentTagline = slides[cursor - 1].tagLine;
    document.getElementById("tagline").innerHTML = currentTagline;
  }); 
});
