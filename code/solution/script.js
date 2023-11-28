// 1. add a new item to the to-do list

const form = document.querySelector('#todo-form');

const createNewToDo = (event) => {
	// console.log(event);

	const newListItem = document.createElement('li');
	newListItem.innerText = event.target['new-todo'].value;

	// create delete button, append to li
	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Delete';
	deleteButton.className = "delete-button";
	deleteButton.addEventListener('click', () => {
		handleDelete(newListItem)
	})
	newListItem.appendChild(deleteButton);

	// add check box, append to li
	const checkbox = document.createElement('input')
	checkbox.type = "checkbox"
	checkbox.addEventListener('change', () => {
		handleCheckbox(newListItem)
	})
	newListItem.appendChild(checkbox)

	// add li to ul
	const list = document.querySelector('#list');
	list.appendChild(newListItem);
}

//  better practice to add the listener to the form (rather than the button)
form.addEventListener('submit', (event) => {
	event.preventDefault();
	createNewToDo(event)
});

// 2. a working delete button
//  parentNode accounts for the item moving between 'todo' and 'done' lists
const handleDelete = (toDo) => {
	toDo.parentNode.removeChild(toDo);
}

// 3. show date
const dateButton = document.querySelector('#show-date');
dateButton.addEventListener('click', () => {
	const dateDisplay = document.querySelector('#date-today');
	dateDisplay.innerHTML = Date();
})

// 4. Check off items
const handleCheckbox = (toDo) => {
	const list = document.querySelector('#list');
	const doneList = document.querySelector('#done-items')
	console.log(toDo.parentNode.id);

	if (toDo.parentNode.id === 'list') {
		// remove from list
		list.removeChild(toDo);
		// add to 'done' list
		doneList.appendChild(toDo)
	} else {
		// remove from done list
		doneList.removeChild(toDo);
		// add to list
		list.appendChild(toDo)
	}

}


