// Why not delete method ? with linked list
export function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }

  function insertTail(newData) {
    if (head === null) {
      insertHead(newData);
      return;
    }

    const newNode = {
      data: newData,
      next: null,
    };

    let tail = getTail();
    tail.next = newNode;
    tail = newNode;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) {
      return;
    }

    let tail = head;
    while (tail.next != null) {
      tail = tail.next; // Gán tail cho tail kế tiếp.
    }

    return tail;
  }

  function getSize() {
    if (head == null) {
      return 0;
    }

    let current = head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  function findIndexByData(data) {
    if (head == null) {
      return;
    }

    let current = head;
    let i = 0;
    while (current != null) {
      if (data === current.data) {
        return i;
      }

      i++;
      current = current.next;
    }
    return -1;
  }

  function findWithCallBack(callBack) {
    if (head == null) {
      return;
    }

    let current = head;
    let i = 0;
    while (current != null) {
      if (callBack(current.data, i)) {
        return current.data;
      }
      i++;
      current = current.next;
    }
    return undefined;
  }

  function printList() {
    if (head == null) {
      return;
    }

    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallBack,
    insertHead,
    printList,
    insertTail,
    head,
  };
}

const linkedListDataStructure = {
  data: 5,
  next: {
    data: 10,
    next: {
      data: 15,
      next: {
        data: 20,
        next: null,
      },
    },
  },
};

const insertNumber = createLinkedList();

insertNumber.insertHead(5);
insertNumber.insertHead(4);
insertNumber.insertHead(3);
insertNumber.insertHead(2);
insertNumber.insertHead(1);
insertNumber.insertTail(100);
insertNumber.insertTail(200);
insertNumber.insertHead(300);

insertNumber.printList();

console.log('head: ', insertNumber.getHead());
console.log('tail: ', insertNumber.getTail());
console.log('size: ', insertNumber.getSize());
console.log('index: ', insertNumber.findIndexByData(3));
console.log(
  'find: ',
  insertNumber.findWithCallBack((x, idx) => x % 2 === 0)
);
console.log(
  'find: ',
  insertNumber.findWithCallBack((x, idx) => x > 5)
);

// => 3,4,5
