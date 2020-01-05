const {app, BrowserWindow} = require('electron');
const path = require('path')
const window = require('./window');

function mainWindow(){
    const firstWindow = new window({
        file: 'index.html'
    })        
}

app.on('ready', mainWindow);
app.on('window-all-closed', ()=> {
    app.quit();
});
