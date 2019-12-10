/* Reid Muchow'a To Do List App */
let toDolist = [];



document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    evt.preventDefault();
    if (evt.code === 'Enter' ); {
        console.log('Enter KEy');
        document.getElementById('todo-item').innerHTML = text;
        
    }
});

function makeUL(array) {
    let list = document.createElement('ul');
}
let text = document.getElementById('js-todo-input').innerHTML;
