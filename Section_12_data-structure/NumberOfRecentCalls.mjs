import { Queue } from './valid-parentheses.mjs';

class RecentCounter {
  constructor() {
    this.queue = new Queue();
  }

  ping(t) {
    const min = t - 3000;
    const max = t;
    this.queue.enqueue(t);
    let i = 0;
    const size = this.queue.getSize();

    while (i < size) {
      if (this.queue.front.data < min) {
        this.queue.dequeue();
      }
      i++;
    }

    return this.queue.getSize();
  }
}

const obj = new RecentCounter();
obj.ping(1);
obj.ping(100);
