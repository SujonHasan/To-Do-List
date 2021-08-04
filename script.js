// select element and assign then to  variable

let new_task = document.querySelector('#new-task');

let form = document.querySelector('form');

let todoUl = document.querySelector('.items');
// todoUl.className = 'list-group';

let completeUl = document.querySelector('.complete-list ul');


// create function

let createtask = function(task)
{
    let listitem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    listitem.className = 'list-group-item';
    checkbox.type ='checkbox';
    checkbox.className = 'checkbox'
    label.innerText = task;

    listitem.appendChild(checkbox);
    listitem.appendChild(label);

    return listitem;

}

let addTask = function(event)
{
    event.preventDefault();

    if(new_task.value != "")
    {
        let listitem = createtask(new_task.value);

        todoUl.appendChild(listitem);

        new_task.value = "";

        // binding the new task and incomplete task

        Bindincompletetask(listitem, completeTask);
    }

}

let Bindincompletetask = function(listitem, checkboxclick)
{
    let checkbox = listitem.querySelector('input[type = "checkbox"]');

    checkbox.onchange = checkboxclick;
}

let completeTask = function()
{
    let listitem = this.parentNode;
    let button = document.createElement('button');
    button.className = 'btn';

    button.innerText = 'Delete';
    listitem.appendChild(button);

    let checkbox = listitem.querySelector('input[type = "checkbox"]');
    checkbox.remove();

    listitem.appendChild(button);

    completeUl.appendChild(listitem);
    
    // binding the complete task and delete task

    Bindcompletetask(listitem, deletetask);

}

let deletetask = function()
{
    let listitem = this.parentNode;
    let Ul = listitem.parentNode;

    Ul.removeChild(listitem);

}



let Bindcompletetask = function(listitem, deleteonclick)
{
    let deletebutton = listitem.querySelector('.btn');

    deletebutton.onclick = deleteonclick;

}

form.addEventListener('submit', addTask);