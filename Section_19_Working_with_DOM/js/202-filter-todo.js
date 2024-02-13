function getAllTodoElements() {
  return document.querySelectorAll('#todoList > li');
}

function isMatch(liElement, searchTerm) {
  if (!liElement) return false;

  if (searchTerm === '') return true;
  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

function searchTodo(searchTerm) {
  const todoElementList = getAllTodoElements();
  for (const todoElement of todoElementList) {
    console.log(todoElement);
    const needToShow = isMatch(todoElement, searchTerm);
    todoElement.hidden = !needToShow;
  }
}

function filterTodo(filterStatus) {
  const todoElementList = getAllTodoElements();
  for (const todoElement of todoElementList) {
    console.log(todoElement);
    const needToShow = filterStatus === 'all' || todoElement.dataset.status === filterStatus;
    todoElement.hidden = !needToShow;
  }
}

function initSearchInput() {
  // find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  // attach change event
  searchInput.addEventListener('input', () => {
    console.log('change', searchInput.value);

    searchTodo(searchInput.value);
  });
}

function initFilterStatus() {
  // find select

  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  //   attach event change
  filterStatusSelect.addEventListener('change', () => {
    console.log('status change', filterStatusSelect.value);
    filterTodo(filterStatusSelect.value.toLowerCase());
  });
}

function isMatch() {}

(() => {
  initSearchInput();
  initFilterStatus();
})();
