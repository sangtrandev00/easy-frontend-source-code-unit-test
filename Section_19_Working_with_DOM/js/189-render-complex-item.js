//  This is main function IFEE.

function createTodoElement(todo) {
  if (!todo) return null;
  // find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  //   cloned template
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  // todoElement.dataset.id = todo.id;

  //   update where needed
  const todoTitleElement = todoElement.querySelector('.todo__title');

  if (!todoTitleElement) return null;

  todoTitleElement.textContent = todo.title;

  // attach event

  return todoElement;

  //   todoElement.
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
    },
    {
      id: 2,
      title: 'Learn ReactJs',
    },
    {
      id: 3,
      title: 'Learn NextJs',
    },

    {
      id: 4,
      title: 'Learn PHP',
    },

    {
      id: 5,
      title: 'Learn MY SQL',
    },
  ];

  rederTodoList(todoList, 'todoList');
})();
