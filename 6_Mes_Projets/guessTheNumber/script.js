let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random()*100) + 1;
let nbRep = 0;
let valTest = [];

function play(){
    let userGuess = document.getElementById("guess").value;
    if(userGuess < 1 || userGuess > 100){
        alert("Veuillez entrer un nombre entre 1 et 100");
    }else{
        valTest.push(userGuess);
        nbRep += 1;
        if(userGuess < answer){
            msg1.textContent = "Le nombre à trouver est plus grand.";
            msg2.textContent = "Nombre d'essais : "+nbRep;
            msg3.textContent = "Valeurs testées : "+valTest;
        }else if(userGuess > answer){
            msg1.textContent = "Le nombre à trouver est plus petit.";
            msg2.textContent = "Nombre d'essais : "+nbRep;
            msg3.textContent = "Valeurs testées : "+valTest;
        }else if(userGuess == answer){
            msg1.textContent = "Bravo ! Vous avez trouvé la bonne réponse !";
            msg2.textContent = "Le nombre à trouver était : "+answer+".";
            msg3.textContent = "Vous l'avez deviné en "+nbRep+" coups."
        }
    }
}