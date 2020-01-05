const DataStore = require('electron-store')
const store = new DataStore();

module.exports = {
    getTodos(){
        store.set('todos', [
            
        ]);

        return store.get('todos') || [];
    },
    addTodo(newTodo){
        const todos = [...store.get('todos'), newTodo];
        store.set('todos', todos);
    }
}