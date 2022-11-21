function exo2() {

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
            alert("L'âge saisi ne correspond à aucune catégorie.");
        }
    }

}

function exo3(){

    function getChild(){
        let nbEnfant = prompt("Choisir le nombre d'enfants");
        return nbEnfant;
    }
    
    function getCategorie(nbEnfant){
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
                alert("L'âge saisi ne correspond à aucune catégorie.");
            }
        }
    }

    nbEnfant= getChild();
    getCategorie(nbEnfant);

}

//Exo 3-b

function calcul() {
    function somme(n1,n2){
        let sum = n1+n2;
        return sum;
    }

    function multiplication(n1,n2){
        let produit = n1*n2;
        return produit;
    }

    function moyenne(n1,n2){
        let moy = (n1+n2)/2;
        return moy;
    }

    function nombre(){
        let n1 = parseInt(prompt("Saisir la valeur"));
        return n1;
    }

    function modulo(n1,n2){
        let mod = n1%n2;
        console.log(mod);
        return mod;
    }

    n1 = nombre();
    n2 = nombre();

    let tab = [];

    tab.push("La somme de "+n1+" et "+n2+" vaut "+somme(n1,n2));
    tab.push("\n"+"Le produit de "+n1+" et "+n2+" vaut "+multiplication(n1,n2));
    tab.push("\n"+"La moyenne de "+n1+" et "+n2+" vaut "+moyenne(n1,n2));
    tab.push("\n"+"Le modulo de "+n1+" et "+n2+" vaut "+modulo(n1,n2))
    alert(tab);

    // console.log("La somme vaut "+somme(n1,n2));
    // console.log("Le produit vaut "+multiplication(n1,n2));
    // console.log("La moyenne vaut "+moyenne(n1,n2));
    // modulo(n1,n2);
}

calcul();

// POO

class Complexe {
    constructor(reel, imaginaire){
        this.reel = reel;
        this.imaginaire = imaginaire;
    }
    toString(){
        return this.reel +" + "+ this.imaginaire+"*i";
    }

    // Setters
    setReel(reel){
        this.reel = reel;
    }
    setImaginaire(imaginaire){
        this.imaginaire = imaginaire;
    }

    // Getters
    getReel(){
        return this.reel;
    }
    getImaginaire(){
        return this.imaginaire;
    }
}

let z1 = new Complexe(10,2);
console.log(z1.getReel());

let z2 = new Complexe(26,4);
console.log(z2.getReel());