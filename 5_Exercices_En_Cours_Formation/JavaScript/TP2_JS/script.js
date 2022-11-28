// Modifications du style

function modif(range){
    let titre = document.getElementById('p1');
    //let range = document.getElementsByTagName('input');
    if(range.getAttribute('name') == 'color'){
        titre.style.backgroundColor = "rgb("+range.value+","+range.value+","+range.value+")";
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

let count = 0;
function compteur (){
    count +=1;
    return count;
}
compteur();

console.log(document.cookie = "nbVisites : "+count);