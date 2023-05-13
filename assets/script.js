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
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
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
      // Si oui, incrémenter le curseur ou le réinitialiser à 1 s'il atteint la fin
      cursor = cursor + 1 === 5 ? 1 : cursor + 1;
    } else {  // Sinon, décrémenter le curseur ou le réinitialiser à 4 s'il atteint le début
      // Note: 4 est le nombre de slides dans le tableau "slides"
      cursor = cursor - 1 === 0 ? 4 : cursor - 1;
    } // Fin de la condition

    // Mise à jour de la classe de l'élément dot actuel
    document.getElementById("dot" + cursor).className = "dot dot_selected";

    // Mise à jour de l'image du slide en utilisant la propriété "image" de l'objet slide correspondant
    document.querySelector(".banner-img").src = `./assets/images/slideshow/${
      slides[cursor - 1].image
    }`;

    // Mise à jour du texte du slide en utilisant la propriété "tagLine" de l'objet slide correspondant
    document.getElementById("tagline").innerHTML = slides[cursor - 1].tagLine;
  });
});
