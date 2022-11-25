let h1 = document.createElement('h1');
h1.textContent = "Je suis le titre H1";
document.body.prepend(h1);

let div = document.createElement('div');
h1.after(div);

let h2 = document.createElement('h2');
h2.textContent = "Je suis un titre H2";
div.prepend(h2);

let para1 = document.createElement('p');
para1.textContent = "Je suis le 1er paragraphe";
h2.after(para1);

let para2 = document.createElement('p');
para2.textContent = "Je suis le 1er paragraphe";
para1.after(para2);

let list = document.createElement('ul');
para2.after(list);

// let item1 = document.createElement('li');
// item1.textContent = "Item 1";
// list.prepend(item1);

// let item2 = document.createElement('li');
// item2.textContent = "Item 2";
// item1.after(item2);

for(i=1 ; i<6 ; i++){
    let item = document.createElement('li');
    item.innerHTML = "Item "+i;
    list.appendChild(item);
}