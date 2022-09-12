const addBtn = document.querySelector(".addBtn");
const closeBtn = document.getElementsByClassName("close");
const input = document.getElementById("todoInput");

// add styling for checked to-do when clicked
const ul = document.querySelector('ul');
ul.addEventListener('click', function(event){
    if(event.target.className === 'todoItem'){
        event.target.classList.toggle('checked');
    }
}, false)

// Create new To-do function
function newTodoItem() {
    // create list item
    const li = document.createElement("li");
    li.className = "todoItem"
    // add value in input as list item text
    const inputValue = document.getElementById("todoInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    // if no input, alert
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        // else, append li to unordered list
      document.getElementById("todoUl").appendChild(li);
    }
    // reset input value to blank
    document.getElementById("todoInput").value = "";
    
    // create span and xmark
    let span = document.createElement("span");
    let xmark = document.createTextNode("\u00D7");
    // add styling for span
    span.className = "close";
    // append xmark
    span.appendChild(xmark);
    // append span to li
    li.appendChild(span);
  
    // change display to none when xmark is clicked on
    for (let i = 0; i < closeBtn.length; i++){
        closeBtn[i].addEventListener('click', function() {
            let hide = this.parentElement;
            hide.style.display = "none";
        });
    }
  }

addBtn.addEventListener('click', newTodoItem)

// trigger click event when "Enter" key is pressed
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      addBtn.click();
    }
  });