function createLiElement(toDoItemText) {
  const liElement = document.createElement("li");
  const liTextNode = document.createTextNode(toDoItemText);
  liElement.appendChild(liTextNode);
  liElement.addEventListener("click", function(e) {
    let strike = (e.target.style.textDecoration = "line-through");
    if (liElement.value.length > 0) {
      return strike;
    }
  });

  return liElement;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  const deleteText = "Delete";
  const buttonText = document.createTextNode(deleteText);
  deleteButton.appendChild(buttonText);
  return deleteButton;
}

document
  .getElementById("js-todo-input")
  .addEventListener("keydown", function(evt) {
    if (evt.code === "Enter") {
      evt.preventDefault();
      let toDoItem = evt.target.value;
      localStorageArray.push(toDoItem);
      window.localStorage.setItem("liText", JSON.stringify(localStorageArray));
      let ulElement = document.getElementById("todo-list");
      let liElement = createLiElement(toDoItem);
      ulElement.appendChild(liElement);

      let deleteButton = createDeleteButton();

      deleteButton.addEventListener("click", function(e) {
        let removeEl = e.target;
        let liEl = removeEl.parentNode;
        ulElement.removeChild(liEl);
        for (i = 0; i < localStorageArray.length; i++) {
          if (localStorageArray[i] === toDoItem) {
          localStorageArray.splice([i], 1);
          }
        }
          window.localStorage.setItem("liText", JSON.stringify(localStorageArray));
      });
      liElement.appendChild(deleteButton);
      evt.target.value = "";

    }
    
  });

let localStorageArray = [];

function localStorageDisplay() {
  let getLocalStorage = JSON.parse(window.localStorage.getItem("liText"));
  for (i = 0; i < getLocalStorage.length; i++) {
    let ulElement = document.getElementById("todo-list");
    let liTextNode = getLocalStorage[i];
    let liElement = createLiElement(liTextNode);
   
    ulElement.appendChild(liElement);
    let deleteButton = createDeleteButton();
    
    deleteButton.addEventListener("click", function(e) {
      let removeEl = e.target;
      let liEl = removeEl.parentNode;
      ulElement.removeChild(liEl);
      for (i = 0; i < getLocalStorage.length; i++) {
      if (getLocalStorage[i] === liTextNode) {
      getLocalStorage.splice([i], 1);
      } 
    }
    window.localStorage.setItem("liText", JSON.stringify(getLocalStorage));
    });
    liElement.appendChild(deleteButton);
  }
}
localStorageDisplay();


