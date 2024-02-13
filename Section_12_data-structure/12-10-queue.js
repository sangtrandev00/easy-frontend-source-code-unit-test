function createQueue() {
  const queue = [];

  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
  }

  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }

  function getSize() {
    return queue.length;
  }

  function isEmpty() {
    return queue.length === 0;
  }

  function enQueue(data) {
    queue.push(data);
  }

  function deQueue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    isEmpty,
    enQueue,
    deQueue,
    queue,
  };
}

const queue = createQueue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

console.log('queue after add 1 2 3 is -> ', queue.queue);

console.log('front of queue is ->', queue.getFront());
console.log('Back of queue is ->', queue.getBack());

queue.deQueue();
console.log('queue after deQueue is: -> ', queue.queue);
