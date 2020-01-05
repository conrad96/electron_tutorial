const {ipcRenderer} = require('electron')

ipcRenderer.on('fetch-todos', (event, todos)=>{
    console.log(todos);
})