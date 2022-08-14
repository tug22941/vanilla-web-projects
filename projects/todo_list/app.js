//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);


//FUNCTIONS
//Function that creates a new to-do list item containing user input
function addToDo(event){
    //prevent form from submiting
    event.preventDefault();

    //create todo div - add class
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create list item -set item value to user input - add class
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //append newTodo inside of todoDiv
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoInput.value);

    //create check-mark button - add class
    const completedButton =  document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    //append completedButton inside of todoDiv  
    todoDiv.appendChild(completedButton);
    //add todo to local storage

    //create trash button - add class
    const trashButton =  document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    //append trash button inside of todoDiv  
    todoDiv.appendChild(trashButton);

    //append new to-do list item to unordered list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
}

function createNewToDo(){
    
}

//Function that deletes a to-do item from the list
function deleteCheck(event){
const item = event.target; //get event targeted element
const todo = item.parentElement; //get event parent element
    //delete todo item
    if(item.classList[0] === 'trash-btn'){
        //add animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        //event listenr that waits for the transition of the animation to end
        todo.addEventListener('transitionend', function(){
            todo.remove(); //remove list element
        })
    }
    //check-mark todo item as completed
    else if (item.classList[0] === 'complete-btn'){
        todo.classList.toggle('completed');
    }
}

//Function that filter the to-do list items
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            //if 'all' is selected, show all items
            case "all":
                todo.style.display = "flex";
            break;
                //if 'completed' is selected show all items with completed class - hide others
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
            break;
                //if 'uncompleted' is selected show all items that do not have completed class - hide others
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
            break;  
        }
    })
}

//Function that saves the list item value into local storage
function saveLocalTodos(todo){
    let todos;
    //check if local storage is empty
    if(localStorage.getItem('todos') === null){
         //initialize todo array
        todos = [];
    }else{ 
        //retrieve todos items from local storage - parse back into an array
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //push new todo items into todo list
    todos.push(todo);
    //return updated todos list into local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Function that retrieves to-do item value from local storage and displays it in list
function getTodos(){
    let todos;
    //check if local storage is empty
    if(localStorage.getItem('todos') === null){
        //initialize todo array
       todos = [];
   }else{ 
       //retrieve todos items from local storage - parse back into an array
       todos = JSON.parse(localStorage.getItem('todos'));
   }

   //recreate a list item for each value retrieved from local storage
   todos.forEach(function(todo){

        //create todo div - add class
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create list item -set item value to user input - add class
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        //append newTodo inside of todoDiv
        todoDiv.appendChild(newTodo);
    
        //create check-mark button - add class
        const completedButton =  document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn');
        //append completedButton inside of todoDiv  
        todoDiv.appendChild(completedButton);
        //add todo to local storage
    
        //create trash button - add class
        const trashButton =  document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        //append trash button inside of todoDiv  
        todoDiv.appendChild(trashButton);
    
        //append new to-do list item to unordered list
        todoList.appendChild(todoDiv);
   })
}

//Function that removes value from local storage
function removeLocalTodos(todo){
    let todos;
    //check if local storage is empty
    if(localStorage.getItem('todos') === null){
        //initialize todo array
       todos = [];
   }else{ 
       //retrieve todos items from local storage - parse back into an array
       todos = JSON.parse(localStorage.getItem('todos'));
   }
   //retrieve the index of selected tooo item, delete todo item by index
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    //return updated todos list into local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

