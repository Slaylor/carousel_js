/**
 * CAROUSEL
 */

// Tableau contenant les images du slider
const pictures = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// Nom du dossier contenant les images du slider

const folder = 'images';

// Pointeur contenant l'index de l'image en cours
let pointer = 0;

// Contiendra le setInterval()
let timer;

// Applique un écouteur d'évènement sur le flèche de droite

let arrowRight = document.querySelector('#next');
arrowRight.addEventListener('click', nextPicture);

// Applique un écouteur d'évènement sur le flèche de gauche
let arrowLeft = document.querySelector('#previous');
arrowLeft.addEventListener('click', previousPicture);

// Applique un écouteur d'évènement sur le slide
let slide = document.querySelector('#slide');
slide.addEventListener('mouseover', stopCarousel);
slide.addEventListener('mouseout', startCarousel);

// Démarrer le carousel
startCarousel();