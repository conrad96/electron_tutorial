const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path')
const window = require('./window');
const {getTodos, addTodo} = require('./DataStore');
let firstWindow;

function mainWindow(){
    firstWindow = new window({
        file: path.join(__dirname, 'renderer', 'index.html')                
    });     
    firstWindow.once('show', ()=>{
        firstWindow.webContents.send('fetch-todos', getTodos())
    })
    //build menu
    let menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'Add Todo',
                    click: ()=>{
                        const addTodoWin = new window({
                            file: path.join(__dirname, 'renderer', 'todo-form.html'),
                            width: 500, 
                            height: 250,
                            parent: firstWindow
                        })
                    }
                }
            ]
        }
    ]) 
    Menu.setApplicationMenu(menu);   
}

app.on('ready', mainWindow);
app.on('window-all-closed', ()=> {
    app.quit();
});
//ipc 
ipcMain.on('save-todo', (event, todo)=> {
    addTodo(todo)
    firstWindow.send('fetch-todos', getTodos());
});