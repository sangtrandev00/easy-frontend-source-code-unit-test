(() => {
  const ulElement = document.getElementById('todoList');
  if (ulElement) {
    console.log('children elements', ulElement.children);
    console.log('children nodes', ulElement.childNodes);
  }
})();
