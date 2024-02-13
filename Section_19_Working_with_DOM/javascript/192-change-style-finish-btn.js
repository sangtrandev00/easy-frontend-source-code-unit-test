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

    // after click on button
    const currentStatus = todoElement.dataset.status;
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    todoElement.dataset.status = newStatus;
    // new Status chi mang tinh bac cau.
    // < = > todoElement.dataset.status = currentStatus === 'pending' ? 'completed' : 'completed';

    const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-dark';

    divElement.classList.remove('alert-success', 'alert-dark');
    divElement.classList.add(newAlertClass);

    contentBtn = currentStatus === 'pending' ? 'Reset' : 'Finish';
    finishBtn.textContent = contentBtn;
  });

  return todoElement;
}

console.log(createTodoElement({ id: 1, title: 'learn JS' }));

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
  const todoList = [
    {
      id: 1,
      title: 'Learn Javascript',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Learn ReactJs',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Learn NextJS',
      status: 'pending',
    },
    {
      id: 4,
      title: 'Learn ExpressJS',
      status: 'completed',
    },
  ];

  renderTodoList(todoList, 'todoList');
})();
