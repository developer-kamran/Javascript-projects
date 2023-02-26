const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function addEventListeners() {
  const dragListItems = document.querySelectorAll('.draggable-list li');
  const draggables = document.querySelectorAll('.draggable');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });
  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });

  function dragStart() {
    // console.log('Event:','dragStart')
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }
  function dragEnter() {
    // console.log('Event:','dragEnter')
    this.classList.add('over');
  }
  function dragLeave() {
    // console.log('Event:','dragLeave')
    this.classList.remove('over');
  }
  function dragOver(e) {
    // console.log('Event:','dragOver')
    e.preventDefault();
  }
  function dragDrop() {
    // console.log('Event:','dragDrop')
    const dragEndIndex = +this.getAttribute('data-index');
    swapItem(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
  }

  //Swap Item
  function swapItem(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }
}

check.addEventListener('click', () => {
  listItems.forEach((listItem, king) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();
    if (personName !== richestPeople[king]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
});
