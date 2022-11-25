function creaWindow(){
    if(confirm("Voulez-vous ouvrir une nouvelle fenêtre ?")){
        let winSize = "width=700,height=500";
        window.open('https://www.adrar-formation.com/', '', winSize);
    }
}

// creaWindow();

function geoLoc(pos){
    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    let latTokyo = 35.689487;
    let longTokyo = 139.691706;

    let diffLat = (latTokyo - latitude);
    let diffLong = (longTokyo - longitude);

    alert("Différence de latitude avec Tokyo : "+diffLat+"\nDifférence de longitude avec Tokyo : "+diffLong);
    
}

//navigator.geolocation.getCurrentPosition(geoLoc);

let br = "\n";
function loc() {
    let info = [];
    info.push("Nom d'hôte : "+location.hostname);
    info.push(br+"Port : "+location.port);
    info.push(br+"Protocole : "+location.protocol);
    info.push(br+"URL complète : "+location.href);
    alert(info);
    if(confirm("Voulez-vous être redirigé vers l'ADRAR ?")){
        window.open('https://www.adrar-formation.com/');
    }
}

loc();