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
    // newListItem.appendChild(deleteButton);
})

const createCompleteButton = (toDoItem) => {
    const completeButton = document.createElement("button");
    completeButton.innerText = "Completed";
    completeButton.addEventListener('click', (event) => {
        markAsCompleted(toDoItem);
    })
        return completeButton;

    }

const createDeleteButton = (toDoItem) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', (event) => {
        toDoItem.remove();
        });

    return deleteButton;
}