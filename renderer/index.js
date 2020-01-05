const {ipcRenderer, app} = require('electron')

ipcRenderer.on('fetch-todos', (event, todos)=>{
    const todosItems = todos.reduce((prevValue, currentValue)=>{
        //checked status        
        isChecked = (currentValue.completed)? 'checked' : ''
        prevValue += `<li class="list-group-item">
        <input type="checkbox" id="${currentValue.id}" class="finish-todo" `+isChecked+` /> 
        ${currentValue.title}</li>`;
        return prevValue;
    }, '');
    const todoList = document.getElementById("todoList");
    //render html to DOM
    todoList.innerHTML = todosItems;
    //checkbox event listener
    const finishTodo = event =>{
        ipcRenderer.send('update-todo', event.target.id);
    }
    document.querySelectorAll(".finish-todo").forEach(element=>{
        element.addEventListener('click', finishTodo)
    });
});
