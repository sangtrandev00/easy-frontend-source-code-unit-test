function initSearchInput() {
  // find search term input.
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;
  // attach change event

  searchInput.addEventListener('input', () => {
    console.log(`${searchInput.value}`);
    const searchTerm = searchInput.value;
    searchTodo(searchTerm);
  });
}

function getAllTodoElements() {
  return document.querySelectorAll('#todoList > li');
}

function isMatch(liElement, searchTerm) {
  if (!liElement) return false;
  if (searchTerm === '') return true;

  const titleElement = liElement.querySelector('.todo__title');
  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

function searchTodo(searchTerm) {
  const todoElementList = getAllTodoElements();
  for (const todoElement of todoElementList) {
    const needToShow = isMatch(todoElement, searchTerm);
    todoElement.hidden = !needToShow; // hidden == true -> off. hidden == false -> show.
  }
}

function filterTodo(filterStatus) {
  const todoElementList = getAllTodoElements();

  for (const todoElement of todoElementList) {
    const needToShow = filterStatus === 'all' || todoElement.dataset.status === filterStatus;
    //   what does it mean from this code.
    // ECMA script how much ?
    todoElement.hidden = !needToShow; // hidden == true -> off. hidden == false -> show.
  }
}

function initFilterStatus() {
  // find select

  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  // attach event change

  filterStatusSelect.addEventListener('change', () => {
    console.log('status change', filterStatusSelect.value);
    const filterStatus = filterStatusSelect.value;
    filterTodo(filterStatus);
  });
}

// MAIN
(() => {
  initSearchInput();
  initFilterStatus();
})();
