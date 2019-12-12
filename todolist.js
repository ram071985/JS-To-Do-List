/* Reid Muchow'a To Do List App */




document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter' ) {
        evt.preventDefault();
        let newEl = document.createElement('li');
        let text = evt.target.value;
        let newText = document.createTextNode(text);
        newEl.appendChild(newText);
        let position = document.getElementsByTagName('ul')[0];
        position.appendChild(newEl);
    }
});




