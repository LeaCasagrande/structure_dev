// // // Exo Accéder aux éléments
// En JS:
// Modifiez vos éléments tels que :
// • Le titre H1 ait pour valeur : "Bienvenue sur mon super site !"
// • le premier paragraphe devienne un titre H2 affichant "J'adore le développement"
// • Le paragraphe d'id "firstP" affiche : "Le HTML, le CSS ..."
// • Le paragraphe de class "p" affiche : affiche : "Et maintenant le JS !"
// • le title affiche : "dev"

document.querySelector('h1').textContent = "Bienvenue sur mon super site !";

document.querySelector('p').innerHTML = "J'adore le dév";

document.getElementById('firstP').textContent = "Le HTML, le CSS...";

let eltClassP = document.getElementsByClassName('p');
for(valeur of eltClassP){
    valeur.textContent = "Et maintenant le JS !";
}

document.title = "dev";