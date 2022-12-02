function modif(range){
    let titre = document.getElementById('p1');
    //let range = document.getElementsByTagName('input');
    if(range.getAttribute('name') == 'color'){
        titre.style.backgroundColor = "hsl("+range.value+", 18%, 47%)";
    }else if(range.getAttribute('name') == 'padding'){
        titre.style.padding = range.value+"px";
    }else if(range.getAttribute('name') == 'height'){
        titre.style.height = range.value+"px";
    }else if(range.getAttribute('name') == 'width'){
        titre.style.width = range.value+"px";
    }else if(range.getAttribute('name') == 'radius'){
        titre.style.borderRadius = range.value+"px";
    }else if(range.getAttribute('name') == 'radius'){
        titre.style.borderRadius = range.value+"px";
    }else if(range.getAttribute('name') == 'rotation'){
        titre.style.transform = "rotate("+range.value+"deg)"
    }
}

// Compteur cookies
let compteur;
document.cookie = "nom=jean; max-age=86400";
document.cookie = "prenom=pierre; max-age=86400";

let cookies = document.cookie;
console.log("cookies : " + cookies);

if (document.cookie.includes("nbVisites")) {

    let cookiesSplit = cookies.split("; ");
    console.log(cookiesSplit);
    console.log(cookiesSplit[1]);

    let tab2 = [];
    for (let i = 0; i < cookiesSplit.length; i++) {
        let split2 = cookiesSplit[i].split("=");
        // console.log("key : " + split2[0]);
        // console.log("value : " + split2[1]);

        tab2.push(split2[0]);
        tab2.push(split2[1]);
    }

    console.log(tab2);

    for (let i = 0; i < tab2.length; i++) {
        if (tab2[i] == "nbVisites") {
            compteur = tab2[i+1];
            console.log("compteur : "+compteur);
        }
    }
    
    document.cookie = "nbVisites="+(parseInt(compteur) + 1)+"; max-age=86400";

    
}else{
    document.cookie = "nbVisites=1; max-age=86400";
}

// // Correction
// // Création d'un cookie
// function setCookie(name,value,days) {
//     let expires = "";
//     if (days) {
//         let date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }

// // Récupération d'un cookie
// function getCookie(name) {
//     let nameEQ = name + "=";
//     let ca = document.cookie.split(';');
//     for(let i=0;i < ca.length;i++) {
//         let c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
// if(document.cookie.includes("nbVisite")){
//      let nbVisite=getCookie("nbVisite"); // Récupère le cookie 
// }else{
//       setCookie("nbVisite","0",30); // Créé le cookie 
// }