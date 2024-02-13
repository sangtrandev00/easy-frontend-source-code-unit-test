function createTodoElement(todo) {
  if (!todo) return;

  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);

  const todoTitleElement = todoElement.querySelector('.todo__title');
  // easy to error => remember cloned node is todoElement.
  if (!todoTitleElement) return;

  todoElement.dataset.id = todo.id;
  todoTitleElement.textContent = todo.title;

  // attach event to button;

  todoElement.dataset.status = todo.status;

  const currentStatus = todoElement.dataset.status;
  const alertClass = currentStatus === 'pending' ? 'alert-secondary' : 'alert-success';
  const divElement = todoElement.querySelector('div.todo');
  if (!divElement) return;
  divElement.classList.remove('alert-secondary');
  divElement.classList.add(alertClass);

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
      status: 'pending',
    },
  ];

  renderTodoList(todoList, 'todoList');
})();
