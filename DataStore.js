const DataStore = require('electron-store')
const store = new DataStore();

module.exports = {
    getTodos(){
        store.set('todos', [
            {
                id: '1',
                title: 'Learning Electron',
                completed: false 
            }
        ]);
        return store.get('todos') || [];
    }
}