/* Reid Muchow'a To Do List App */
let toDolist = [];



document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter' ) {
        evt.preventDefault();
        console.log('Enter');
        document.getElementById('js-todo-input').innerHTML;
        
    }
});


