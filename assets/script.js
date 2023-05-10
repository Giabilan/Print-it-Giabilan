// Déclaration d'un tableau contenant les informations des slides
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

// Sélectionne la class "arrow" de la page HTML
const arrows = document.querySelectorAll(".arrow");

// Déclaration d'une variable pour stocker l'index du slide courant
let cursor = 1;

// Parcours du tableau des flèches avec une boucle forEach
arrows.forEach((arrow) => {
  // Ajout d'un addEventListener, click sur chaque flèche
  arrow.addEventListener("click", () => {
    // Modification de la classe du point correspondant au slide courant pour le désélectionner
    document.getElementById("dot" + cursor).className = "dot";

    // Condition pour déterminer le sens de la flèche et incrémenter(+) ou décrémenter(-) l'index du slide courant
    if (arrow.classList.contains("arrow_right")) {
      // Si la flèche est à droite, on augmente l'index de 1 ou on le remet à 1 si on dépasse la longueur du tableau
      cursor = cursor + 1 == 5 ? 1 : cursor + 1;
    } else {
      // Si la flèche est à gauche, on diminue l'index de 1 ou on le met à la longueur du tableau si on passe en dessous de 1
      cursor = cursor - 1 == 0 ? 4 : cursor - 1;
    }

    // Modification de la classe du point correspondant au nouveau slide courant pour le sélectionner
    document.getElementById("dot" + cursor).className = "dot dot_selected";

    // Modification de l'attribut src de l'image du banner avec le nom du fichier image du nouveau slide courant
    document.querySelector(".banner-img").src = `./assets/images/slideshow/${
      slides[cursor - 1].image
    }`;

    // Modification du contenu HTML de l'élément avec l'id tagline avec le texte du nouveau slide courant
    document.getElementById("tagline").innerHTML = slides[cursor - 1].tagLine;
  });
});
