// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function positionBiggest (tab){
    let boxNumber;
    let currentMax = tab[0];
    for(let i = 0; i < tab.length; i++){
        if(tab[i] >= currentMax){
            currentMax = tab[i];
            boxNumber = i;
        }
    }
    return boxNumber;
}
console.log(positionBiggest([4,7,5,5,6]));
console.log(positionBiggest([84,14,20,-14,0]));

// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function tabSum (tab){
    let sum = 0;
    for(let i=0; i < tab.length; i++){
        sum += tab[i];
    }
    return sum;
}
console.log(tabSum([4,7,5,5,6]));

// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
function tabSumPos (tab){
    let sumPos = 0;
    for(let i=0; i < tab.length; i++){
        if(tab[i]>0){
            sumPos += tab[i];
        }
    }
    return sumPos;
}
console.log(tabSumPos([4,7,-47,5,5,6,-4]));

// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
function tabSumNeg (tab){
    let sumNeg = tabSum(tab) - tabSumPos(tab);
    return sumNeg;
}
console.log(tabSumNeg([4,7,-47,5,5,6,-4]));