const {app, BrowserWindow} = require('electron');
const path = require('path')
const window = require('./window');
const {getTodos} = require('./DataStore');

function mainWindow(){
    const firstWindow = new window({
        file: path.join(__dirname, 'renderer', 'index.html')                
    });     
    firstWindow.once('show', ()=>{
        firstWindow.webContents.send('fetch-todos', getTodos())
    })    
}

app.on('ready', mainWindow);
app.on('window-all-closed', ()=> {
    app.quit();
});
