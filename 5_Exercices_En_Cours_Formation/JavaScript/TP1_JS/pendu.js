// // Jeu du pendu
// 5 erreurs maximum

let mots = ["antilope","baleine","chameau","dauphin","girafe","lapin","mouton","ouistiti","renard","tigre"];
let motADeviner = mots[Math.floor(Math.random()*mots.length)]; //Tirage au sort du mot à deviner parmi la liste

function pendu(){
    let trouve = false;
    
    // Tableau qui stocke les réponses
    let aRemplir = [];
    for(let i=0 ; i<motADeviner.length ; i++){
        aRemplir.push("_");
    }

    let userLetter; // Lettre saisie par l'utilisateur
    let badLetter = []; // Liste de mauvaises lettres testées par l'utilisateur
    let nbError = 0; // Compteur d'erreurs

    // Mot à deviner converti en tableau
    let motConvertTab = motADeviner.split("");
    console.log(motConvertTab);

    while(aRemplir.includes("_") && nbError<5) {
        userLetter = prompt(aRemplir+"\nVeuillez entrer une lettre.\nVous avez déjà essayé : "+badLetter);

        if(motConvertTab.includes(userLetter)){
            for (let i = 0; i < motConvertTab.length; i++) {
                if (userLetter == motConvertTab[i]) {
                    aRemplir.splice(i, 1, userLetter);
                    alert(aRemplir);
                }
            }
        }else{
            badLetter.push(userLetter);
            nbError++;
            alert("La lettre " + userLetter + " n'est pas dans le mot à trouver.\nNombre d'erreurs : "+nbError);

        }

    }

    if(!aRemplir.includes("_")){
        alert("Félicitations !!")
    }else if(nbError == 5){
        alert("Dommage, vous avez perdu... Retentez votre chance !")
    }

}

pendu();