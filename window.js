const {BrowserWindow} = require('electron');
//default properties
const defaultOptions = {
    width: 600,
    height: 400,
    show: false     
}
const nodeIntegration = {  
    webPreferences: { 
        nodeIntegration: true
    }
};

class window extends BrowserWindow{
    constructor({
        file, 
        ...options
    }){
        super(
            { ...defaultOptions, 
              ...options, 
              ...nodeIntegration            
            });        

        this.loadFile(file)
        this.on('ready-to-show', (event)=> {
            this.webContents.openDevTools();
            this.show();
        })
    }
}

module.exports = window