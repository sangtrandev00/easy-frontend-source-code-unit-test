//  This is main function IFEE.

function createTodoElement(todo) {
  if (!todo) return null;
  const li = document.createElement('li');
  li.textContent = todo.title;
  //   li.dataset.id = todo.id;

  return li;
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
  const todoList1 = [
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
  rederTodoList(todoList1, 'todoList1');

  const todoList2 = [
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
  ];

  rederTodoList(todoList2, 'todoList2');
})();
