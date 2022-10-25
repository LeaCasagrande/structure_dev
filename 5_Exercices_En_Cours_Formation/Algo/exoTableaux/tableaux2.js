// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast (tab) {
    let last = tab.length -1;
    console.log(tab[last]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLast (tab) {
    let last = tab.length - 1;
    return tab[last];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minimum(t) {
    let currentMin = t[0];
    for(let i = 1 ; i < t.length ; i++) {
        if(t[i] < currentMin) {
            currentMin = t[i];
        }
    }
    return currentMin;
}
console.log(minimum([14,20,-14,0]));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maximum(t) {
    let currentMax = t[0];
    for(let i = 1 ; i < t.length ; i++) {
        if(t[i] > currentMax) {
            currentMax = t[i];
        }
    }
    return currentMax;
}
console.log(maximum([14,20,-14,0]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function nbOccurrence(t,n) {
    let count = 0;
    for(let i = 0 ; i < t.length ; i++) {
        if(t[i] == n){
            count++;
        }
    }
    return count;
}
console.log(nbOccurrence([14,20,-14,14,75,58,14,0],14));
console.log(nbOccurrence([14,20,-14,14,75,58,14,0],89));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function nbExist(t,n) {
    for(let i = 0 ; i < t.length ; i++) {
        if(t[i] == n){
            return true;
        }
    }
    return false;
}
console.log(nbExist([14,20,-14,14,75,58,14,0],20));
console.log(nbExist([14,20,-14,14,75,58,14,0],89));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab1 = [];
for(let i=1 ; i<7778 ; i++){
    tab1.push(i);
}
console.log(tab1);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab2 = [];
for(let i=10 ; i<77780 ; i+=10){
    tab2.push(i);
}
console.log(tab2);
// ou
let tab3 = [];
for(let i=0; i<tab1.length; i++){
    tab3[i] = tab1[i] *10;
}
console.log(tab3);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab4 = [];
for(let i=0; i<tab1.length; i++){
    tab4[i] = tab2[i] /2;
}
console.log(tab4);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
function deleteBelow50 (tab){
    while(tab[tab.length-1] < 50){
        tab.pop();
    }
    return tab;
}
console.log(deleteBelow50([1,45,88,54,23,-100,12]));