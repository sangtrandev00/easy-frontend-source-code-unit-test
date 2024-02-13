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

// MAIN
(() => {
  initSearchInput();
})();
