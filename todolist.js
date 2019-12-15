/* Reid Muchow'a To Do List App */





document.getElementById('js-todo-input').addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter' ) {
        evt.preventDefault();

        /* List Creator */
        let newEl = document.createElement('li');
        let text = evt.target.value;
        let newText = document.createTextNode(text);
        newEl.appendChild(newText);
        let position = document.getElementsByTagName('ul')[0];
        position.appendChild(newEl);

        /* Button Creator */
        let deleteButton = document.createElement('button');
        let deleteText = 'Delete';
        let buttonText = document.createTextNode(deleteText);
        deleteButton.appendChild(buttonText);
        let posDelete = document.getElementsByTagName('ul')[0];
        posDelete.appendChild(newEl);

        /* form submission value */
        evt.target.value = '';

        /* Delete Button Click Functionality */
        deleteButton.addEventListener('click', function(del) {
          let removeEl = document.getElementsByTagName('li')[0];
          let containerEl = removeEl.parentNode;
          containerEl.removeChild(removeEl);


        })
        
    }

 
    

  })


    
        
    






