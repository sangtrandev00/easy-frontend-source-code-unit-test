import { Queue } from './valid-parentheses.mjs';

// Implement stack using queue (Dùng 2 queue -> để implement stack)
class MyStack {
  constructor() {
    this.queue = new Queue(); // stack
    // this.queue2 = new Queue(); // queue
    this.peak = null;
    this.size = 0;
  }

  // Last in, first out.

  top() {
    if (this.empty()) return null;
    const clonedQueue = this.queue;
    return clonedQueue.rear.data;
  }

  push(data) {
    this.queue.enqueue(data); // stack    this.size++;
    this.peak = this.top();
    this.size++;
  }
  //   Remove top
  pop() {
    if (this.empty() === 0) return null;

    const currentTop = this.top();
    // this.queue.rear = null;
    let i = 0;
    while (i < this.size) {
      const dequeueNode = this.queue.dequeue();
      if (dequeueNode === currentTop) {
        this.peak = this.top();
        this.size--;
        break;
      }
      this.queue.enqueue(dequeueNode);
      i++;
    }

    return currentTop;
  }

  empty() {
    return this.size === 0;
  }
}

const myStack = new MyStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(10);
myStack.pop();
console.log(myStack.empty());
console.log(myStack.top());
console.log(myStack);
