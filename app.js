// selector
const todolist = document.querySelector(`.todolist`);
const inputlabel = document.querySelector(`.todo-input`);
const submitbutton = document.getElementById("todo-button");
const filteroption = document.querySelector(".filter-todo");
// event
    submitbutton.addEventListener("click",additem);
    todolist.addEventListener('click',deletecheck);
    filteroption.addEventListener('click',filtertodo);
// function 
function additem(e){
    
    // Prevent Refresh page
    e.preventDefault();
   
    // Create tododiv 
    
    const tododiv = document.createElement(`div`);
    tododiv.classList.add(`todo`);
    
    // Create li
    const newtodo = document.createElement(`li`);
    newtodo.classList.add(`todoitem`);
   
    // get value from user input 
   
    newtodo.innerText = inputlabel.value;
   
    // clear 
   
    inputlabel.value= "";
    tododiv.appendChild(newtodo); // appendchild to div 
    
    // Create checked button 
   
    const buttonchecked = document.createElement(`button`);
    buttonchecked.innerHTML = '<i class="fas fa-check"></i>'
    buttonchecked.classList.add('Check-button');
    tododiv.appendChild(buttonchecked);
    
    // Create delete button
    
    const deletebutton= document.createElement(`button`);
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>'
    deletebutton.classList.add('delete-button');
    tododiv.appendChild(deletebutton);
    todolist.appendChild(tododiv);
    
    
}

function deletecheck(e){
    const item= e.target;
    // delete todo
    if (item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add('remove');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // check mark 
    if (item.classList[0] === "Check-button"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}


function filtertodo(e) {
    const todos = todolist
}
