// Déclaration d'un tableau "slides" contenant les informations de chaque slide
const slides = [
  {
    image: "slide1.jpg", // Le nom du fichier image
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>", // Le texte à afficher sur le slide
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

// Déclaration d'une variable "cursor" pour suivre la position actuelle du slide
let cursor = 1;

// Boucle sur *chaque* élément "arrow"
arrows.forEach((arrow) => {
  // Ajout d'un event "click" à chaque flèche "arrow"
  arrow.addEventListener("click", () => {
    // Réinitialisation de la classe de l'élément dot actuel
    document.getElementById("dot" + cursor).className = "dot";

    // Si arrow à la classe "arrow_right"
    if (arrow.classList.contains("arrow_right")) {
      // Ce code incrémente cursor de 1, mais si cursor atteint 5, il est réinitialisé à 1 || "? donc" ": sinon"
      cursor = cursor + 1 === 5 ? 1 : cursor + 1;
    } else {
      // Ce code décrémente cursor de 1, mais si cursor atteint 0, il est réinitialisé à 4 || "? donc" ": sinon"
      cursor = cursor - 1 === 0 ? 4 : cursor - 1;
    } // Fin de la condition

    // Ajout de la classe "dot_selected" à l'élément dot correspondant à la position actuelle du slide
    document.getElementById("dot" + cursor).className = "dot dot_selected";

    // cursor - 1 car le tableau commence à l'index 0 pour les images
    document.querySelector(".banner-img").src = `./assets/images/slideshow/${
      slides[cursor - 1].image
    }`;

    // cursor - 1 car le tableau commence à l'index 0 pour les taglines (textes)
    document.getElementById("tagline").innerHTML = slides[cursor - 1].tagLine;
  });
});
