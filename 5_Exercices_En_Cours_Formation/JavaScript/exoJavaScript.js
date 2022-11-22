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

// calcul();

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

// Exo Rectangle
// Class Rectangle
// attributs: longueur, largeur
// getters, setters, toString, getPerimetre, getSurface, test de la classe

class Rectangle {
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }
    getLongueur(){
        return this.longueur;
    }
    getLargeur(){
        return this.largeur;
    }
    setLongueur(longueur){
        this.longueur = longueur;
    }
    setLargeur(largeur){
        this.largeur = largeur;
    }
    toString(){
        return ("Longueur :"+this.longueur+"\n"+"Largeur"+this.largeur);
    }
    getPerimetre(){
        return 2*(this.longueur+this.largeur);
    }
    getSurface(){
        return this.longueur*this.largeur;
    }
}

let rect1 = new Rectangle(10,4);
console.log(rect1.getLargeur());

// Valeurs primitives

// String slide 62
function testString(){
    let ch1 = prompt("Veuillez entrer une chaîne de caractères");
    let ch2 = prompt("Veuillez entrer une autre chaîne de caractères");
    return ch1.includes(ch2) || ch2.includes(ch1);
}

// testString();

// String, Number, Math slide 71
function alea(){

    // // Générer un nb décimal entre 100 et 1000
    // let nbAlea = (Math.random()*1000);
    // console.log(nbAlea);
    // // Arrondir ce nb à l'entier le plus proche
    // nbAlea = Math.round(nbAlea);
    // console.log(nbAlea);
    // // Diviser ce nb pour obtenir un nb à une décimale
    // nbAlea = nbAlea/10;
    // console.log(nbAlea);
    // // Négatif ou positif
    // nbAlea = nbAlea * (Math.round(Math.random()) ? 1 : -1)
    // console.log("nbAlea : "+nbAlea)

    // Version condensée
    let nbAlea2 = (Math.round(Math.random()*1000)/10) * (Math.round(Math.random()) ? 1 : -1);
    alert("nbAlea2 : "+nbAlea2);

    let nbUser;
    do{
        nbUser = parseFloat(prompt("Veuillez entrer un nombre."));
        if(nbUser > nbAlea2){
            alert("Le nombre à trouver est plus petit.");
        }else if(nbUser < nbAlea2){
            alert("Le nombre à trouver est plus grand.");
        }else{
            alert("Bravo !")
        }
    }while (nbUser != nbAlea2);
}

//alea();

// Array slide 80
let semaine = ['lun','mra','mer','jeu','ven','sam']
semaine.pop();
console.log(semaine);
semaine.push('dim');
semaine[1]='mar';
document.write(semaine.length);
console.log(semaine[2]);

// Array, Date slide 90
function tirageAuSort(){
    let list = [];
    let nom;
    let boucle = true;

    let date = new Date();
    let dateLocale = date.toLocaleString('fr-FR')

    // while(boucle){
    //     nom = prompt("Veuillez saisir un nom.");
    //     if(nom != 0){
    //         list.push(nom);
    //     }else{
    //         boucle = false;
    //     }
    // }

    while(nom != 0){
        nom = prompt("Veuillez saisir un nom.");
        list.push(nom);
    }

    list.pop();

    alert(list);
    alert("Le tirage au sort du "+dateLocale+" a designé comme grand gagnant : "+list[Math.trunc(Math.random()*list.length)]);

}

tirageAuSort();