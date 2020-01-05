const DataStore = require('electron-store')
const store = new DataStore();

module.exports = {
    getTodos(){
        store.set('todos', [
            {
                id: '1',
                title: 'Buy milk at the store',
                completed: false 
            },
            {
                id: '2',
                title: 'Goto the gym',
                completed: false 
            },
            {
                id: '3',
                title: 'Go for a swim',
                completed: false 
            },
            {
                id: '4',
                title: 'Prepare dinner',
                completed: false 
            }
        ]);

        return store.get('todos') || [];
    }
}