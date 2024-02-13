/**
 * @param {string}
 * @return {boolean}
 */

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
    stack,
  };
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  //   is it true ?

  pop() {
    if (this.top === null) {
      return null;
    }

    this.top = this.top.next;
    this.size--;
    return this.top.data;
  }

  getTop() {
    return this.top.data;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let current = this.top;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // enqueue -> add
  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode; // haven't understand. Contrỏ cuối thêm là newnode.
      this.rear = newNode; // Thằng cuối là newNode. Thằng gần cuối được trả lại bình thường, có con trỏ là thằng cuối.
    }
    this.size++;
  }

  // First in first out, dequeue -> remove
  dequeue() {
    if (this.isEmpty() === 0) return null;

    const dequeueNode = this.front;
    this.front = this.front.next; // Get the next is the front
    dequeueNode.next = null; // Clear pointer of dequeueNode.
    this.size--; // Lúc này nếu trường hợp size === 0 luôn thì sao ?
    // {data: 1, next: null} -> Trường hợp sau khi xóa sản còn lại 1 phần và bắt đầu xóa luôn.
    if (this.isEmpty()) {
      this.rear = null; //
    }
    return dequeueNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.front;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('Queue elements:');
queue.print();
console.log('queue: ', queue);
