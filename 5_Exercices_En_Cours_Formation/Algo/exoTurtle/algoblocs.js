/*
//A1
//Initialisation
setPos(300,300);
changeColor(color.red);
faceDown();
setLineWidth(3);
//Réalisation
forward(200);
faceRight();
forward(100);

//A2
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceLeft();
setLineWidth(3);
//Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

//A3
//Initialisation
setPos(300,300);
changeColor(color.red); //color.orange n'existe pas!
faceLeft();
setLineWidth(3);
//Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);

//Les tailles sont ajustées par rapport à Algoblocs pour voir le dessin en entier
//A4
//Initialisation
setPos(200,400);
changeColor(color.green);
faceRight();
setLineWidth(5);
//Réalisation :
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);

//A5
//Initialisation
setPos(300,100);
changeColor(color.fuchsia);
faceRight();
setLineWidth(5);
//Réalisation
arcRight(200,180);
arcRight(100,180);
arcLeft(100,180);
arcLeft(200,180);

//A6
//Initialisation
setPos(300,300);
faceUp();
setLineWidth(5);
changeColor(color.blue);
//Réalisation
forward(50);
up();
forward(50);
down();
forward(100);

//A7
//Initialisation
setPos(250,300);
faceDown();
setLineWidth(5);
changeColor(color.green);
//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);

//A8
//Initialisation
setPos(300,300);
faceUp();
setLineWidth(5);
changeColor(color.fuchsia);
//Réalisation
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

//A9
//Initialisation
setPos(150,450);
faceRight();
setLineWidth(5);
changeColor(color.aqua);
//Réalisation
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180)

//B1
//Inititalisation
setPos(100,100);
faceRight();
setLineWidth(5);
changeColor(color.green);
//Réalisation
for(let i=0 ; i<4 ; i++) {
    faceRight();
    forward(100);
    faceDown();
    forwward(100);
}

//B2
//Init
setPos(50,300);
changeColor(color.red);
setLineWidth(5);
faceUp();
//Réalisation
for(let i=0 ; i<4 ; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}

//B3
//Init
setPos(250,250);
changeColor(color.fuchsia);
setLineWidth(5);
faceRight();
//Réalisation
for(let i=0 ; i<4 ; i++) {
    forward(100);
    right(90);
}

//B4
//Init
setPos(250,300);
changeColor(color.blue);
setLineWidth(5);
faceRight();
//Réalisation
for(let i=0 ; i<3 ; i++) {
    forward(100);
    left(180-60);
}

//B5
//Init
setPos(300,300);
faceUp();
setLineWidth(5);
changeColor(color.yellow);
//Réalisation
forward(100);
changeColor(color.red);
for(let i=0 ; i<3 ; i++) {
    forward(50);
    right(180-60);
}

//B6
//Init
setPos(100,300);
faceRight();
setLineWidth(5);
changeColor(color.red);
//Réalisation
for(let i=0 ; i<2 ; i++) {
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green)
for(let i=0 ; i<3 ; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

//B7
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
changeColor(color.yellow);
//Réalisation
for(let i=0 ; i<3 ; i++){
    forward(100);
    left(180-60);
}
for(let i=0 ; i<4 ; i++){
    forward(100);
    right(90);
}

//B8
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
changeColor(color.yellow);
//Réalisation
for(let i=0 ; i<8 ; i++){
    forward(200);
    right(180-45);
}

//B9
//Initialisation
setPos(150,300);
faceRight();
setLineWidth(5);
changeColor(color.fuchsia);
//Réalisation
forward(100);
up();
forward(100);
down();
for(let i=0 ; i<3 ; i++){
    forward(100);
    right(180-60);
}

//B10
//Init
setPos(50,300);
faceRight();
setLineWidth(5);
changeColor(color.blue);
//Réalisation
for(let i=0 ; i<8 ; i++){
    forward(100);
    right(180-45);
};
up();
forward(200);
changeColor(color.yellow);
down();
for(let i=0 ; i<8 ; i++) {
    forward(200);
    left(180-45);
}
right(90);
up();
forward(100);
down();
changeColor(color.fuchsia);
for(let i=0 ; i<8 ; i++) {
    forward(100);
    right(180-45);
}

//B11
//Init
setPos(200,200);
faceRight();
setLineWidth(5);
changeColor(color.red);
//Réalisation
for(let i=0 ; i<4 ; i++) {
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

//B12
//Init
setPos(350,350);
faceRight();
setLineWidth(5);
changeColor(color.fuchsia);
//Réalisation
for(let i=0 ; i<3 ; i++){
    right(90);
    forward(100);
}
up();
forward(100);
down();
changeColor(color.green);
for(let i=0 ; i<3 ; i++){
    forward(100);
    right(90);
}

//B13
//Init
setPos(200,200);
faceRight();
setLineWidth(5);
changeColor(color.green);
//Réalisation
for(let i=0 ; i<8 ; i++){
    forward(100);
    left(180-45);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

//B14
//Init
setPos(100,100);
faceRight();
setLineWidth(5);
changeColor(color.yellow);
//Réalisation
forward(100);
for(let i=0 ; i<5 ; i++){
    right(180-60);
    forward(100);
    left(180-60);
    forward(100);
}

//B21 Poissons
//Initialisation
setPos(300,150);
faceRight();
setLineWidth(4);
shiftColor(0.5);
//Réalisation
for(let i=0 ; i<6 ; i++){
    forward(100);
    left(180-60);
    forward(50);
    left(180-60);
    forward(100);
    right(180-120);
    forward(50);
    right(180-60);
    forward(50);
    right(180-60);
    up();
    forward(100);
    down();
    shiftColor(0.12);
}

//C1
//Initialisation
setPos(50,300);
faceRight();
setLineWidth(4);
changeColor(color.blue);
//Réalisation
for(let j=0 ; j<4 ; j++){
    for(let i=0 ; i<3 ; i++){
    forward(100);
    right(180-60);
}
forward(100)
}

//C2
//Init
setPos(250,500);
faceUp();
setLineWidth(4);
changeColor(color.fuchsia);
//Réalisation
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}

//C4
//Initialisation
setPos(50,300);
faceRight();
setLineWidth(4);
changeColor(color.red);
//Réalisation
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(50);
        left(180-60);
    }
    changeColor(color.yellow)
    for(let k=0 ; k<4 ; k++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}

//C5
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(4);
shiftColor(0.17);
//Réalisation
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(200);
        left(180-45);
    }
    shiftColor(0.25);
    right(90);
}

//C6
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(4);
changeColor(color.yellow);
//Réalisation
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(100);
        left(180-60);
    }
    forward(100);
}

//C7
//Init
setPos(300,400);
faceRight();
setLineWidth(4);
changeColor(color.red);
//Réalisation
for(let i=0 ; i<8 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
    left(180-135);
}

//C8
//Init
setPos(300,500);
faceUp();
setLineWidth(4);
changeColor(color.green);
//Réalisation
forward(200);
right(180-135);
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<3 ; j++){
        changeColor(color.red)
        forward(100);
        right(180-60);
        changeColor(color.yellow);
    }
    forward(100);
    left(90);
}

//C9
//Init
setPos(400,400);
faceRight();
setLineWidth(4);
changeColor(color.green);
//Réalisation
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<3 ; j++){
        for(let k=0 ; k<4 ; k++){
            right(90);
            forward(50);
        }
        forward(50);
        right(180-60);
    }
    left(180-60);
    forward(200);
}

//Déclaration de la variable
//let lenght;

//Affectation de la valeur 7 à la variable longueur
//lenght = 7;

//Utilisation de la variable
//alert(lenght);

//Incrémenter la variable length de 47
//length = length + 47;
//raccourci de notation : length += 47;

//Décrémenter la variable length de 25
//length = length - 25;
//raccourci -= 25;

//D9
//Init
setPos(300,300);
faceRight();
setLineWidth(4);
changeColor(color.blue);
//Réalisation
let length = 80;
for(let i=0 ; i<6 ;i++){
    forward(length);
    right(120);
    length = length + 80;
}

//D10
//Init
setPos(300,300);
faceRight();
setLineWidth(4);
changeColor(color.yellow);
//Réal
let lengthD10 = 80;
for(let i=0 ; i<10 ; i++){
    forward(lengthD10);
    right(90);
    lengthD10 = lengthD10 + 40;
}

//D11
//Init
setPos(50,300);
faceRight();
setLineWidth(4);
changeColor(color.white);
//Réal
let lengthD11 = 250;
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(lengthD11);
        left(180-60);
    }
    forward(lengthD11);
    lengthD11 = lengthD11 - 50;
}

//D12
//Init
setPos(300,300);
faceRight();
setLineWidth(4);
changeColor(color.aqua);
//Réal
let lengthD12 = 80;
for(let i=0 ; i<6 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(lengthD12);
        left(180-60);
    }
    forward(lengthD12);
    left(180-120);
    lengthD12 = lengthD12 + 40;
}

//D13
//Init
setPos(300,300);
faceRight();
setLineWidth(4);
changeColor(color.fuchsia);
//Réal
let rayon = 50;
for(let i=0 ; i<8 ; i++){
    arcRight(rayon,180);
    up();
    forward(50);
    down();
    rayon = rayon + 25;
}

//D14
//Init
setPos(100,300);
left(180-45);
setLineWidth(4);
changeColor(color.green);
//Réal
let lengthD14;
for(let i=0 ; i<2 ; i++){
    lengthD14 = 25;
    for(let j=0 ; j<4 ; j++){
        forward(lengthD14);
        right(90);
        forward(lengthD14);
        left(90);
        lengthD14 = lengthD14 + 25
    }
    right(90);
    right(90);
}

//D15
//Init
setPos(300,300);
faceDown();
setLineWidth(4);
changeColor(color.red);
//Réal
let lengthD15 = 100;
let angle = 90;
for(let i=0 ; i<10 ; i++){
    forward(lengthD15);
    left(180-angle);
    lengthD15 = lengthD15 + 20;
    angle = angle + 5;
}*/

//D16
//Init
setPos(250,250);
faceDown();
setLineWidth(4);
changeColor(color.green);
//Réal
let rayonD16 = 50;
forward(100);
right(180-60);
forward(50);
faceLeft();
for(let i=0 ; i<3 ; i++){
    forward(50);
    right(90);
}
left(180-60);
forward(50);
faceRight();
up();
forward(50);
down();
for(let i=0 ; i<3 ; i++){
    arcRight(rayonD16, 180);
    rayonD16 = rayonD16 + 25;
    up();
    arcRight(rayonD16, 180);
    down();
    rayonD16 = rayonD16 + 25;
}