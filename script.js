const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');



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

    resetUI();

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

//Function to remove items from the list 
function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if (confirm('Are you sure to delete?')){
            e.target.parentElement.parentElement.remove();
    
            resetUI();
        }
    }
}

// Function for clear all the items
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    resetUI();
}

// Function to clear the filter and clear all button when no list is there.
function resetUI(){
    // imported here so that it not only works when page loads but works
    // whenver the function is called
    const items = itemList.querySelectorAll('li');

    if (items.length != 0){
        filter.style.display = 'block';
        clearBtn.style.display = 'block';
    } else {
        filter.style.display = 'none';
        clearBtn.style.display = 'none';
    }

}

// Event Listeners
itemForm.addEventListener('submit', addItems)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)

resetUI();
