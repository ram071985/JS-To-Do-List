/* Reid Muchow'a To Do List App */





document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter' ) {
        evt.preventDefault();
        let newEl = document.createElement('li');
        let text = evt.target.value;
        let newText = document.createTextNode(text);
        newEl.innerHTML = `<button>delete</button>`;
        newEl.appendChild(newText);
        let position = document.getElementsByTagName('ul')[0];
        position.appendChild(newEl);
        evt.target.value = '';
        

    }

    
        
    
});

documents.getElementsByTagName('ul').addEventListener('click','button', function(e) {
    e.preventDefault();
    let removeEl = document.getElementsByTagName('li');
    let containerEl = removeEl.parentNode;
    containerEl.removeChild(removeEl);

}



});

