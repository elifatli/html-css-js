// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

//load items
loadItems();

//call eventListener
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);

}

//

function loadItems() {

    items = getItemsFromLS();
    items.forEach(function (item) {

        createItem(item);
    });

}

//get items from local storage

function getItemsFromLS(){
    if(localStorage.getItem('item')===null){
        items=[];
    }else{
        items=JSON.parse(localStorage.getItem('item'));
    }
    return items;
}

//set item to Local Storage

function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

//delete item from Local Storage
function deleteItemFromLS(text){
    items=getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
            item.splice(index,1);
        }
    });
    localStorage.setItem('item',JSON.stringify(items));
}

function createItem(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

}

//add new item
function addNewItem(e) {

    if (input.value === '') {

        alert('add new item');
    }

    //create new item
    createItem(input.value);

    //save to Local Storage
    setItemToLS(input.value);

    //clear input
    input.value = '';

    e.preventDefault();

}

//delete an item
function deleteItem(e) {



    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();

            //delete item from Local Storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();

}

//delete all items
function deleteAllItems(e) {

    if (confirm('are you sure?')) {

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();

        // const itemList = taskList.children;
        // for (var i = itemList.length - 1; i >= 0; i--) {
        //     itemList[i].remove();
        // }

        //alternatif
        //taskList.innerHTML='';

        //alternatif 2
        // taskList.childNodes.forEach(function(item){
        //     if(item.nodeType===1){
        //         item.remove();
        //     }

        // });



        //NONONONO
        // for(var i=0; i<itemList.length; i++){
        //     itemList[i].remove();
        // }
    }


    e.preventDefault();

}