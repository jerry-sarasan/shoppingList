const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItems(e){
    e.preventDefault();

    const newItem = itemInput.value;
    // validate the input
    if(newItem === ''){
        alert('Please add an item before submitting');
        return;
    }

    //Create a list item
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(newItem));

    const removeBtn = createButton ('remove-item btn-link text-red');
    listItem.appendChild(removeBtn);

    itemList.appendChild(listItem);
    itemInput.value = '';

}

//Function to create the remove btn 
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button; 
}

//Function to create the red cross icon
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItems)

