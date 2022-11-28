// Créer une nouvelle tâche

let nbTasks = 1;

function addItem(){
    let list = document.getElementById('list');
    let taskItem = document.createElement('div');
    let textTask = document.getElementById('add').value;
    taskItem.innerHTML = "<span>"+textTask+"</span>";
    taskItem.innerHTML += "<button onclick=removeItem(this)>X</button>";
    taskItem.setAttribute('id','task'+nbTasks);
    taskItem.setAttribute('class','todo');
    
    list.appendChild(taskItem);

    nbTasks += 1;
}

// Supprimer une tâche

function removeItem(e){
    e.target.parentNode.remove();
}