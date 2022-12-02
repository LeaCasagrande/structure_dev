let canva = document.getElementById('canvas');
let ctx = canva.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(100,400);

// // Losange
// ctx.moveTo(100,250);
// ctx.lineTo(250,100);

// ctx.lineTo(400,250);

// ctx.lineTo(250,400);

// ctx.lineTo(100,250);

// // Cercle
// ctx.moveTo(700,250);
// ctx.arc(550,250,150,0,2*Math.PI);

// ctx.lineTo(800,250);

// // Rectangle
// ctx.strokeRect(800,100,100,250);

// ctx.strokeStyle= "#4488EE";
// ctx.lineWidth=4;
// ctx.stroke();

// // Lama !!!

//Rectangle
ctx.beginPath();
let lineaire = ctx.createLinearGradient(50,100,550,800);
lineaire.addColorStop(0,'#fcc688');
lineaire.addColorStop(0.5,'#a2ddf5');
lineaire.addColorStop(1,'#f2b8de');
ctx.fillStyle=lineaire;
ctx.fillRect(50,100,500,700);

//Titre
ctx.font= 'bold 30px Verdana, Arial, serif';
ctx.fillStyle= lineaire;
ctx.textAlign= 'center';
ctx.fillText("Bienvenue au Machu Picchu !",300,60);

// Balles
function balle(a,b,c,d,e){
    ctx.beginPath();
    ctx.fillStyle= d;
    ctx.arc(a,b,c,0,2*Math.PI);
    ctx.fill();
    ctx.strokeStyle= e;
    ctx.lineWidth = 1;
    ctx.stroke();
}

balle(400,590,30,'#fcc688','#000000');
balle(400,590,22,'#a2ddf5','#000000');
balle(400,590,10,'#f2b8de','#000000');

//Lama
ctx.beginPath();
ctx.strokeStyle = '#4d4d4d';
ctx.fillStyle = '#dbdbdb';
ctx.lineWidth = 2;
ctx.moveTo(100, 370);
ctx.lineTo(110, 350);
ctx.lineTo(130, 340);
ctx.lineTo(150, 350);
ctx.lineTo(155, 370);
ctx.lineTo(200, 370);
ctx.lineTo(230, 380);
ctx.lineTo(350, 380);
ctx.lineTo(370, 360);
ctx.lineTo(370, 300);
ctx.lineTo(385, 280);
ctx.lineTo(430, 250);
ctx.lineTo(428, 265);
ctx.lineTo(460, 245);
ctx.lineTo(450, 270);
ctx.lineTo(430, 280);
ctx.lineTo(470, 300);
ctx.lineTo(470, 320);
ctx.lineTo(450, 335);
ctx.lineTo(425, 335);
ctx.lineTo(425, 400);
ctx.lineTo(405, 470);
ctx.lineTo(370, 490);

ctx.lineTo(360, 560);
ctx.lineTo(360, 600);
ctx.lineTo(370, 620);
ctx.lineTo(350, 620);
ctx.lineTo(345, 590);
ctx.lineTo(345, 530);
ctx.lineTo(330, 490);

ctx.lineTo(310, 510);
ctx.lineTo(280, 520);
ctx.lineTo(230, 520);
ctx.lineTo(200, 505);
ctx.lineTo(190, 555);
ctx.lineTo(200, 605);
ctx.lineTo(210, 610);
ctx.lineTo(215, 620);
ctx.lineTo(190, 620);
ctx.lineTo(170, 550);
ctx.lineTo(160, 570);
ctx.lineTo(160, 600);
ctx.lineTo(175, 615);
ctx.lineTo(175, 620);
ctx.lineTo(155, 620);
ctx.lineTo(145, 590);
ctx.lineTo(130, 540);
ctx.lineTo(135, 520);
ctx.lineTo(120, 490);
ctx.lineTo(110, 460);
ctx.lineTo(110, 420);
ctx.lineTo(130, 380);
ctx.lineTo(130, 365);
ctx.lineTo(100, 370);

ctx.moveTo(400, 590);
ctx.lineTo(370, 490);

ctx.fill();
ctx.stroke();

// ctx.beginPath();
// ctx.fillStyle = '#dbdbdb';
// ctx.moveTo(350, 610);
// ctx.lineTo(340, 610);
// ctx.lineTo(340, 550);
// ctx.lineTo(320, 500);
// ctx.fill();
// ctx.stroke();


//Oeil
balle(430,300,5,'#828282','#828282');