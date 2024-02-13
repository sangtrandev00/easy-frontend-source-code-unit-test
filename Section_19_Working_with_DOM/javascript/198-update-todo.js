// copy is match

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

// ---> This is update todo section <----- //

function createTodoElement(todo, params) {
  if (!todo) return;

  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);

  const todoTitleElement = todoElement.querySelector('.todo__title');
  // easy to error => remember cloned node is todoElement.
  if (!todoTitleElement) return;

  // set id & data-status for todoElement;
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;
  todoElement.hidden = isMatch(todoElement, params);

  todoTitleElement.textContent = todo.title;

  // attach event to button;

  const removeBtn = todoElement.querySelector('.remove');
  if (!removeBtn) return;
  removeBtn.addEventListener('click', () => {
    console.log('remove click btn');
    // get current data and remove that. to localStorage.
    // where to get todo List.
    // where is the remove todo id.
    const todoList = getTodoList();
    // console.log({ todoList, removeId: todo.id });  --> demo to watch on console.log
    // create new todo list
    const newTodoList = todoList.filter((x) => x.id !== todo.id);

    // save to local storage after create new TodoList.
    localStorage.setItem('todo_list', JSON.stringify(newTodoList));

    // remove from DOM.
    todoElement.remove();
  });

  //   finish btn
  const finishBtn = todoElement.querySelector('button.mark-as-done');
  const divElement = todoElement.querySelector('div.todo');

  // first status when no click at all.
  if (!divElement) return;
  const alertClass = todo.status === 'pending' ? 'alert-dark' : 'alert-success';
  divElement.classList.remove('alert-dark');
  divElement.classList.add(alertClass);
  let contentBtn = todo.status === 'pending' ? 'Finish' : 'Reset';
  finishBtn.textContent = contentBtn;

  if (!finishBtn) return;
  finishBtn.addEventListener('click', () => {
    console.log('mark as done click');
    const currentStatus = todoElement.dataset.status;
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    // get current todoList
    const todoList = getTodoList();
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index >= 0) {
      // update data-status of currentTodo ( on liElement)
      todoList[index].status = newStatus;
      localStorage.setItem('todo_list', JSON.stringify(todoList));
    }

    // save to local Storage.

    // after click on button

    // new Status chi mang tinh bac cau.
    // < = > todoElement.dataset.status = currentStatus === 'pending' ? 'completed' : 'completed';
    // why this below don't save to local storage.

    // update status
    todoElement.dataset.status = newStatus;

    // update alert class accordingly

    const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-dark';

    divElement.classList.remove('alert-success', 'alert-dark');
    divElement.classList.add(newAlertClass);

    contentBtn = currentStatus === 'pending' ? 'Reset' : 'Finish';
    finishBtn.textContent = contentBtn;
  });

  //   add click event for edit button.
  const editBtn = todoElement.querySelector('button.edit');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      // TODO: lastest todo data - get from local storage.
      const todoList = getTodoList();
      const lastestTodo = todoList.find((x) => x.id === todo.id);

      if (!lastestTodo) return;
      // find todo

      //   populate data to todo form;
      populateTodoForm(lastestTodo);
      // update status for lastest todo.
      //   const completedCheck = document.getElementById('todoCheckCompletedId');
      //   const pendingCheck = document.getElementById('todoCheckPendingId');

      //   const newCheckStatus = completedCheck.checked ? 'completed' : 'pending';

      //   updateStatusElement(lastestTodo, todoElement, divElement, newCheckStatus, finishBtn);
    });
  }

  return todoElement;
}

// function

function populateTodoForm(todo) {
  // query todo form.
  // dataset.id = todo.id;

  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;

  todoForm.dataset.id = todo.id;
  // set value for form controls
  // set todoText

  const todoInput = document.getElementById('todoText');
  if (!todoInput) return;
  todoInput.value = todo.title;
}

function updateStatusElement(todo, todoElement, divElement, newCheckStatus, finishBtn) {
  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;

  todoForm.dataset.id = todo.id;

  const currentStatus = todoElement.dataset.status;
  const newStatus = newCheckStatus;
  // get current todoList
  const todoList = getTodoList();
  const index = todoList.findIndex((x) => x.id === todo.id);
  if (index >= 0) {
    // update data-status of currentTodo ( on liElement)
    todoList[index].status = newStatus;
    localStorage.setItem('todo_list', JSON.stringify(todoList));
  }

  todoElement.dataset.status = newStatus;

  // update alert class accordingly

  const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-dark';

  divElement.classList.remove('alert-success', 'alert-dark');
  divElement.classList.add(newAlertClass);

  contentBtn = currentStatus === 'pending' ? 'Reset' : 'Finish';
  finishBtn.textContent = contentBtn;
}

// get data from local Storage
function getTodoList() {
  // change to Object

  try {
    const todoList = JSON.parse(localStorage.getItem('todo_list') || []); // ecmascript ? --> Dấu || [] có ý nghĩa gì ?
    return todoList;
  } catch {
    return [];
  }
}

// more edit about params. ---> dangerous.

function renderTodoList(todoList, ulElementId, params) {
  // check argument
  if (!Array.isArray(todoList) || todoList.length === 0) {
    return;
  }

  const ulElement = document.getElementById(ulElementId);

  //   why can 't use forEach.

  for (const todo of todoList) {
    const liElement = createTodoElement(todo, params);
    ulElement.appendChild(liElement);
  }
}

function handleTodoFormSubmit(event) {
  event.preventDefault();

  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;
  console.log('form submit');
  // get form values
  const todoInput = document.getElementById('todoText');
  if (!todoInput) {
    alert('todo input not found!');
    return;
  }
  const todoText = todoInput.value;

  // const newCheckedStatus = ;
  const todoCompletedCheck = document.getElementById('todoCheckCompletedId');
  const todoPendingCheck = document.getElementById('todoCheckPendingId');
  let newStatusChecked;
  if (todoCompletedCheck.checked && todoPendingCheck.checked) return;
  if (todoCompletedCheck.checked) newStatusChecked = 'completed';
  if (todoPendingCheck.checked) newStatusChecked = 'pending';
  console.log(newStatusChecked);
  //   determine add or edit mode ?
  const isEdit = Boolean(todoForm.dataset.id);
  if (isEdit) {
    // <--- this is edit mode --->
    //   find current todo;
    // update content
    // save to local storage
    // apply DOM changes

    // step 1: find
    const todoList = getTodoList();
    const index = todoList.findIndex((x) => x.id.toString() === todoForm.dataset.id);
    if (index < 0) return;

    // step 1 - : find to update

    // step 2: update content
    todoList[index].title = todoText;

    // CONTINUE
    // todoList[index].dataset.status = newStatusChecked; // check status
    // step 2: update status --

    // step 3: save to local storage.
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    // step 3: save-- to local storage update status.

    // step 4: Apply dom changes.
    // - find element having id == todoForm.dataset.id

    const liElement = document.querySelector(`ul#todoList > li[data-id ="${todoForm.dataset.id}"]`);

    if (liElement) {
      const titleElement = liElement.querySelector('.todo__title');
      if (titleElement) {
        titleElement.textContent = todoText;
      }
    }
  } else {
    // <---  mode add todoElement  --->

    //   create an new object todo --> good method.
    const newTodo = {
      id: Date.now(),
      title: todoText,
      status: 'pending',
    };

    // validate form values ( skip this one);
    // save to local storage
    const todoList = getTodoList();
    todoList.push(newTodo);
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    // apply DOM change.

    const newLiElement = createTodoElement(newTodo);
    const ulElement = document.getElementById('todoList');
    ulElement.appendChild(newLiElement);
  }

  //reset form (id && form) --
  delete todoForm.dataset.id; // delete data id from todoForm ?
  todoForm.reset();
}

// main
(() => {
  //   const todoList = [
  //     {
  //       id: 1,
  //       title: 'Learn Javascript',
  //       status: 'pending',
  //     },
  //     {
  //       id: 2,
  //       title: 'Learn ReactJs',
  //       status: 'completed',
  //     },
  //     {
  //       id: 3,
  //       title: 'Learn NextJS',
  //       status: 'pending',
  //     },
  //     {
  //       id: 4,
  //       title: 'Learn ExpressJS',
  //       status: 'completed',
  //     },
  //   ];
  const params = new URLSearchParams(window.location.search);

  const todoList = getTodoList();

  renderTodoList(todoList, 'todoList', params);

  //   register submit event for todo form

  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }

  //   having a bugg here ! ---- havent' finished yet!!!

  // const todoCompletedCheck = document.getElementById('todoCheckCompletedId');
  // const todoPendingCheck = document.getElementById('todoCheckPendingId');
  // let newStatusChecked;
  // if (todoCompletedCheck.checked && todoPendingCheck.checked) return;
  // if (todoCompletedCheck.checked) newStatusChecked = 'completed';
  // if (todoPendingCheck.checked) newStatusChecked = 'pending';
  // console.log(newStatusChecked);
})();
