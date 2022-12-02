let ms=0;
let s=0;
let min=0;
let h=0;
let spans = document.getElementsByTagName('span');
let boutonStart = document.getElementById('start');
console.log(spans);
console.log(spans[0]);
let time;

function start() {
    time = setInterval(lancerChrono,100);
    boutonStart.disabled = true;
}

function lancerChrono(){
    ms += 10;
    if(ms > 99){
        ms=0;
        s++;
        if(s == 60){
            s=0;
            min++;
            if(min == 60){
                min=0;
                h++;
            }
        }
    }
    spans[0].innerHTML = h+" h";
    spans[1].innerHTML = min+" min";
    spans[2].innerHTML = s+" s";
    spans[3].innerHTML = ms+" ms";
}

function stop(){
    clearInterval(time);
    boutonStart.disabled = false;
}

function reset(){
    clearInterval(time);
    ms=0;
    s=0;
    min=0;
    h=0;
    spans[0].innerHTML = h+" h";
    spans[1].innerHTML = min+" min";
    spans[2].innerHTML = s+" s";
    spans[3].innerHTML = ms+" ms";
    boutonStart.disabled = false;
}