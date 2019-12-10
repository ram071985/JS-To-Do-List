/* Reid Muchow'a To Do List App */
let toDolist = [];



document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    evt.preventDefault();
    if (evt.code === 'Enter' ) {
        console.log('Enter key was Pressed');

        
        document.getElementById('js-todo-input').innerHTML;
        
    }
});

function makeList(array) {
    let newEl = document.createElement('li');
    let newText = document.createTextNode('');
    newEl.appendChild(newText);
}
let text = document.getElementById('js-todo-input').innerHTML;
