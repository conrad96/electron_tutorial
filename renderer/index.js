const {ipcRenderer, app} = require('electron')

ipcRenderer.on('fetch-todos', (event, todos)=>{
    const todosItems = todos.reduce((prevValue, currentValue)=>{
        prevValue += `<li class="list-group-item">${currentValue.title}</li>`;
        return prevValue;
    }, '');
    const todoList = document.getElementById("todoList");
    //render html to DOM
    todoList.innerHTML = todosItems;
});
