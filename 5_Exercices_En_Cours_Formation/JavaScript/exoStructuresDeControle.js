let nbEnfant = prompt("Choisir le nombre d'enfants");

for(let i=0 ; i<nbEnfant ; i++){
    let age = prompt("Quel est l'âge de l'enfant ?");
    if ((age>=6) && (age<=7)){
        alert("Poussin");
    }else if((age>=8) && (age<=9)){
        alert("Pupille");
    }else if((age>=10) && (age<=11)){
        alert("Minime");
    }else if((age>=12) && (age<=17)){
        alert("Cadet");
    }else{
        alert("L'âge saisi n'est pas dans la catégorie.")
    }
}