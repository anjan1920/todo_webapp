//'DOMContentLoaded' It ensures the entire HTML is loaded before your JS runs
//his prevents errors like getElementById(...) returning null.
//If we place our <script> at the end of the <body>, then we don’t need DOMContentLoaded at all.

document.addEventListener('DOMContentLoaded',()=>{
    console.log("Hello js is linked ")
    //grab the element 
    //grab the input & add task & todo list 

    const todoInput = document.getElementById("todo-input");
    const addTask_btn =document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    //store the tasks
    //when ever the page load first time the tasks_array find for local storage
    //if any task found it get the json string and convert back to json 
    //else it just empty array

    let tasks_arr = JSON.parse(localStorage.getItem('tasks')) || [];
    

    //now if the local storage have the tasks 
    //run a loop on that array and display the task using dom
    tasks_arr.forEach(element => {
        renderTask(element)
        
    });



    //adding a new task
    addTask_btn.addEventListener('click',()=>{
        console.log('Task add btn clicked');
        
        //grab the input text
        taskText = todoInput.value.trim();
        if(taskText === "") {
            console.log("Empty input");
            return
        }
        //if task is not empty
        //add the task with id
        //now every time we get this obj while adding a task by click btn
        const newTask = {
            id:Date.now(),
            text:taskText,
            completed:false

        }

        //push the task in tasks 
        tasks_arr.push(newTask)
        saveTasks();
        //push to dom
        renderTask(newTask)

        todoInput.value = "";//clear the task input 
        

        console.log(tasks_arr);
        


    });


    //now adding the task from array to local storage

    function saveTasks(){
        //localStorage is a Web Storage API provided by the browser
        //Data persists even after refreshing or closing the tab
        
        localStorage.setItem('tasks',JSON.stringify(tasks_arr))// ..setItem() takes value as key value where value must be string
        //JSON.stringify() to convert array/object -->  string
        //Using  JSON.parse() to convert string --> back to array:

    }

    //render the task using dom 

   function renderTask(task) {
    console.log(task);

    // Create <li>
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id); //give a id as task id
    //inject the tailwind css class
    li.className = "flex justify-between items-center gap-5 bg-gray-600 h-10 w-100 text-center text-white  border p-4 m-2";
    //inside list 
    // Create task text element
    const span = document.createElement('span');
    span.textContent = task.text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "bg-red-500 rounded-sm w-20 hover:bg-red-400";

    // Add delete function (optional)
    deleteBtn.addEventListener('click', () => {
        li.remove();
        //remove from array
        for (let i = 0; i < tasks_arr.length; i++) {
            if (tasks_arr[i].id === task.id) {
                tasks_arr.splice(i, 1);  //splice remove one item at specific index
                break; // stop loop after removing
            }
        }
        saveTasks(); //  update localStorage
    });


    // Append text and button to <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add <li> to <ul>
    todoList.appendChild(li);
}

})