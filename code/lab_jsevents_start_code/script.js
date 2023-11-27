const button = document.querySelector('#enter');
const textInput = document.querySelector('#list');

button.addEventListener('click', () => {
    console.log("button clicked")
})

textInput.addEventListener('change', (event) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target.value;
})

