function initSearchInput(params) {
  // find search term input.
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;
  // attach change event

  if (params.get('searchTerm')) {
    searchInput.value = params.get('searchTerm');
  }

  searchInput.addEventListener('input', () => {
    console.log(`${searchInput.value}`);
    const searchTerm = searchInput.value;
    // searchTodo(searchTerm);

    handleFilterChange('searchTerm', searchTerm);
  });
}

function getAllTodoElements() {
  return document.querySelectorAll('#todoList > li');
}

function handleFilterChange(filterName, filterValue) {
  // update query params

  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);

  history.pushState({}, '', url);

  const todoElementList = getAllTodoElements();
  for (const todoElement of todoElementList) {
    const needToShow = isMatch(todoElement, searchTerm);
    todoElement.hidden = !needToShow; // hidden == true -> off. hidden == false -> show.
  }
}

function isMatchStatus(liElement, filterStatus) {
  return filterStatus === 'all' || liElement.dataset.status === filterStatus;
}

function isMatchSearch(liElement, searchTerm) {
  if (!liElement) return false;
  if (searchTerm === '') return true;

  const titleElement = liElement.querySelector('.todo__title');
  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

// function isMatch(liElement, searchTerm) {
//   if (!liElement) return false;
//   if (searchTerm === '') return true;

//   const titleElement = liElement.querySelector('.todo__title');
//   return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
// }

function isMatch(liElement, params) {
  return (
    isMatchSearch(liElement, params.get('searchTerm')) &&
    isMatchStatus(liElement, params.get('status'))
  );
}

// function searchTodo(searchTerm) {
//   const todoElementList = getAllTodoElements();
//   for (const todoElement of todoElementList) {
//     const needToShow = isMatch(todoElement, url.searchParams);
//     todoElement.hidden = !needToShow; // hidden == true -> off. hidden == false -> show.
//   }
// }

// function filterTodo(filterStatus) {
//   const todoElementList = getAllTodoElements();

//   for (const todoElement of todoElementList) {
//     const needToShow = filterStatus === 'all' || todoElement.dataset.status === filterStatus;
//     todoElement.hidden = !needToShow; // hidden == true -> off. hidden == false -> show.
//   }
// }

function initFilterStatus(params) {
  // find select

  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  if (params.get('status')) {
    filterStatusSelect.value = params.get('status');
  }
  // attach event change

  filterStatusSelect.addEventListener('change', () => {
    console.log('status change', filterStatusSelect.value);
    const filterStatus = filterStatusSelect.value;
    // filterTodo(filterStatus);
    handleFilterChange('status', filterStatus);
  });
}

// MAIN
(() => {
  // get query params object
  const params = new URLSearchParams(window.location.search);

  initSearchInput(params);
  initFilterStatus(params);
})();
