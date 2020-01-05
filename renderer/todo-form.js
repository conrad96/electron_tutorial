const {ipcRenderer} = require('electron');

const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const todoTitle = event.target[0].value; //first element input field
    
    ipcRenderer.send('save-todo', {
        title: todoTitle,
        id: Date.now().toString(),
        completed: false
    });

    todoForm.reset();

})