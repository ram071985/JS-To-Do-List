/* Reid Muchow'a To Do List App */

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
  window.localStorage.setItem("liElement", JSON.stringify(evt.target.value));
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

      let ulElement = document.getElementById("todo-list");


      let liElement = createLiElement(evt.target.value);
      ulElement.appendChild(liElement);

   
      let deleteButton = createDeleteButton();

      deleteButton.addEventListener("click", function(e) {
        let removeEl = e.target;
        let liEl = removeEl.parentNode;
        ulElement.removeChild(liEl);
      });
      liElement.appendChild(deleteButton);

   
      evt.target.value = "";

      // store new todo item in local storage
      // check to see if there is any new exiting array in local storage
      // if not, create a new array and add an item to it
      // if so, add new item to array
      // update local storage with new array
  
    }
  });

//retrieve the to do list from local storage
//should have array in local storage
//loop through each item in array, and display items on page
