const button = document.querySelector('#enter');
const textInput = document.querySelector('#new-todo');
const todolist = document.querySelector('#list');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("button clicked")
})

textInput.addEventListener('input', (event) => {
    todolist.classList.add(event.target.value);
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target.value;
    todolist.appendChild(newListItem);
})

