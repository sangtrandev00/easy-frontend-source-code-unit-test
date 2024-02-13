//  This is main function IFEE.

function createTodoElement(todo) {
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return;
  // clone the li element
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;

  // find and update title
  const todoTitleElement = todoElement.querySelector('.todo__title');
  if (todoTitleElement) todoTitleElement.textContent = todo.title;
  // TODO: attach events to buttons
  const divElement = todoElement.querySelector('div.todo');
  if (divElement) {
    const alertClass = todo.status === 'completed' ? 'alert-success' : 'alert-secondary';
    divElement.classList.remove('alert-secondary');
    divElement.classList.add(alertClass);
  }

  const finishBtn = todoElement.querySelector('button.mark-as-done');

  //   when no click first ------------

  function todoListStatus() {
    const currentStatus = todoElement.dataset.status;
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    todoElement.dataset.status = newStatus;

    // change style if  if click on mark as done button

    const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-secondary';
    divElement.classList.remove('alert-success', 'alert-secondary');
    divElement.classList.add(newAlertClass);

    const newBtnContent = currentStatus === 'pending' ? 'Finish' : 'Reset';
    finishBtn.innerText = newBtnContent;

    // newBtnColor = currentStatus === 'pending' ? 'btn-dark' : 'btn-success';
    // finishBtn.classList.remove('btn-dark', 'btn-success');
    // finishBtn.classList.add(newBtnColor);
  }
  todoListStatus();

  if (finishBtn) {
    // when already clicked -----------
    finishBtn.addEventListener('click', () => {
      console.log('mark as done click');
      todoListStatus();
    });
  }

  const removeBtn = todoElement.querySelector('button.remove');

  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      console.log('remove click');
      todoElement.remove();
    });
  }

  //   render todo status

  return todoElement;
}

function rederTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) {
    return;
  }

  const ulElement = document.getElementById(ulElementId);
  if (ulElement) {
    for (const todo of todoList) {
      const liElement = createTodoElement(todo);

      ulElement.appendChild(liElement);
    }
  }
}

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
      title: 'Learn NextJs',
      status: 'pending',
    },

    {
      id: 4,
      title: 'Learn PHP',
      status: 'pending',
    },

    {
      id: 5,
      title: 'Learn MY SQL',
      status: 'pending',
    },
  ];

  rederTodoList(todoList, 'todoList');
})();
