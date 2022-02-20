/**
 * FONCTIONS DU CAROUSEL
 */


/**
 * Permet de passer à l'image suivante sur le slider
 */
let nextPicture = function() {

    // Vérifie si le pointeur est équivalent au dernier index du tableau
    if (pointer === pictures.length - 1) {
        // Si oui, je remet le pointeur à zéro
        pointer = 0;
    }
    else {
        // Incrémentation du pointeur afin de sélectionner une nouvelle image dans le tableau
        pointer++;
    }

    // Sélectionne l'élément IMG de ma page HTML
    let picture = document.querySelector('img');
    picture.src = `${folder}/${pictures[pointer]}`; 
}


/**
 * Permet de revenir à l'image précédente sur le slider
 */
let previousPicture = function() {

    // Vérifie si le pointer est au début du tableau
    if (pointer === 0) {
        // Si oui, on attribue le dernier index du tableau
        pointer = pictures.length - 1;
    }
    else {
        // Si non, on décrémente pour "descendre" dans le tableau
        pointer--;
    }

    let picture = document.querySelector('img');
    picture.src = `${folder}/${pictures[pointer]}`;
}


/**
 * Permet de défiler les images automatiquement
 */
let startCarousel = function() {
    // Exécute une fonction après un temps donné
   
    // Exécute sur un temps régulier et donné, une fonction
    timer = setInterval(nextPicture, 1000);
}


/**
 * Permet d'arrêter le défilement des images
 */
let stopCarousel = function() {
    // "Kill" le minuteur (setInterval)
    clearInterval(timer);
}