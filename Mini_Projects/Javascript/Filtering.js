const addForm = document.getElementById('addForm');
const itemsList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
addForm.addEventListener('submit', addItem);

//Removing event
itemsList.addEventListener('click', removeItem);

//Filtereng element
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  //get input value
  let newItem = document.getElementById('item').value;

  //creating a new li
  const li = document.createElement('li');

  //add class
  li.className = 'li';

  //add text node with input value
  const newTextNode = document.createTextNode(newItem);

  //append to li
  li.appendChild(newTextNode);

  //create delete button li
  const deleteBtn = document.createElement('button');

  //add class
  deleteBtn.className = 'cross';

  //add text node with input value
  const deleteTextNode = document.createTextNode('X');

  //add deletebtn
  deleteBtn.appendChild(deleteTextNode);

  //append button
  li.appendChild(deleteBtn);

  //append li to list
  itemsList.appendChild(li);

  //set input value to empty
  document.getElementById('item').value = '';
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains('cross')) {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemsList.removeChild(li);
    }
  }
}

//Filter Item
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemsList.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    const itemName = item.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
