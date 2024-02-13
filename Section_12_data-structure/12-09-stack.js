function createStack() {
  const stack = [];

  function push(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  return {
    getTop,
    pop,
    getSize,
    isEmpty,
    push,
    stack,
  };
}

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.getTop());
console.log('is empty: ', stack.isEmpty());
console.log('get size: ', stack.getSize());

console.log('delte 1 item: -> ', stack.pop());
console.log('stack after delte ->', stack.stack);
