(() => {
  const liElementList = document.querySelectorAll('#todoList > li');
  for (const liElement of liElementList) {
    console.log(liElement);
  }
})();
