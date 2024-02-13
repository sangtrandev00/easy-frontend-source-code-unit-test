// Gợi ý:
// Dùng Array

function createStack() {
  const stack = [];

  function push(item) {
    stack.push(item);
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
    push,
    pop,
    isEmpty,
    getSize,
    getTop,
  };
}

// Dùng Linked list (single -> stack and double linkedlist -> queue)

function createQueue() {
  const queue = [];

  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
  }

  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }

  function deQueue() {
    return queue.shift();
  }

  function enQueue(item) {
    queue.push(item);
  }

  function getSize() {
    return queue.length;
  }

  return {
    getFront,
    getBack,
    deQueue,
    enQueue,
    getSize,
  };
}

// Câu 2: Dùng linkedlist để implement (stack và queue)

// Câu 3: Dùng 2 stack để implement 1 queue (và ngược lại);

// Câu 4: Duyệt các phần tử trong 1 tree (cây) bằng cách sử dụng stack hoặc queue.

// Kiểm tra xem 1 chuỗi có đóng mở ngoặc ({[]}) hợp lý hay không – dùng stack (Clip dưới)
