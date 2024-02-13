//
function createTodoElement(todo) {
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
    // update alert class accordingly

    todoElement.dataset.status = newStatus; // why need to have this one.

    const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-dark';

    divElement.classList.remove('alert-success', 'alert-dark');
    divElement.classList.add(newAlertClass);

    contentBtn = currentStatus === 'pending' ? 'Reset' : 'Finish';
    finishBtn.textContent = contentBtn;
  });

  return todoElement;
}

// get data from local Storage
function getTodoList() {
  // change to Object

  try {
    const todoList = JSON.parse(localStorage.getItem('todo_list')) || []; // ecmascript ?
    return todoList;
  } catch {
    return [];
  }
}

function renderTodoList(todoList, ulElementId) {
  // check argument
  if (!Array.isArray(todoList) || todoList.length === 0) {
    return;
  }

  const ulElement = document.getElementById(ulElementId);

  //   why can 't use forEach.

  for (const todo of todoList) {
    const liElement = createTodoElement(todo);
    ulElement.appendChild(liElement);
  }
}

// main
(() => {
  // const todoList = [
  //   {
  //     id: 1,
  //     title: 'Learn Javascript',
  //     status: 'pending',
  //   },
  //   {
  //     id: 2,
  //     title: 'Learn ReactJs',
  //     status: 'completed',
  //   },
  //   {
  //     id: 3,
  //     title: 'Learn NextJS',
  //     status: 'pending',
  //   },
  //   {
  //     id: 4,
  //     title: 'Learn ExpressJS',
  //     status: 'completed',
  //   },
  // ];

  const todoList = getTodoList();

  renderTodoList(todoList, 'todoList');
})();
