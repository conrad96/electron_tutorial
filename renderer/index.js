const {ipcRenderer, app} = require('electron')

ipcRenderer.on('fetch-todos', (event, todos)=>{
    const todosItems = todos.reduce((prevValue, currentValue)=>{
        prevValue += `<li class="list-group-item">
        <input type="checkbox" id="${currentValue.id}" class="finish-todo" /> 
        ${currentValue.title}</li>`;
        return prevValue;
    }, '');
    const todoList = document.getElementById("todoList");
    //render html to DOM
    todoList.innerHTML = todosItems;
});
