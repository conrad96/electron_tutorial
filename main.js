const {app, BrowserWindow} = require('electron');
const path = require('path')

function mainWindow(){

}

app.on('ready', mainWindow);
app.on('window-all-closed', ()=> {
    app.quit();
});
