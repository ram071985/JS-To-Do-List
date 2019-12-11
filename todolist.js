/* Reid Muchow'a To Do List App */
let toDolist = [];
let grabText = document.getElementById('js-todo-input').innerHTML;
let newEl = document.createElement('li');
let newText = document.createTextNode(grabText);


document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter' ) {
       
        evt.preventDefault();
        console.log('enter')
        document.getElementById('js-todo-input').innerHTML;
        newEl.appendChild(newText)

    }
});




