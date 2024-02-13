function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      val: newData,
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
      val: newData,
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
      if (data === current.val) {
        return i;
      }

      i++;
      current = current.next;
    }
    return -1;
  }

  function printList() {
    if (head == null) {
      return;
    }

    let current = head;
    while (current != null) {
      console.log(current.val);
      current = current.next;
    }
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    insertHead,
    printList,
    insertTail,
  };
}

var deleteMiddle = function (head) {
  const linkedList = createLinkedList();
  let current = head;
  let size = 0;

  console.log('current: ', current);

  while (current !== null) {
    linkedList.insertTail(current.val);

    current = current.next;
  }

  const sizeOfLinkedList = linkedList.getSize();
  const middleIdx = Math.ceil(sizeOfLinkedList / 2);
  console.log('size: ', sizeOfLinkedList);
  console.log('idx: ', middleIdx);
  // Lặp qua hết 1/2 mảng -> đến phần tử target để delete.
  let after;
  let del;
  for (let i = 0; i <= middleIdx; i++) {
    console.log('current', current);

    if (i === middleIdx) {
      del = current.next;
      after = del.next;
      break;
    } else {
      current = current.next;
    }
  }

  //   Previous -> next là after (skip luôn thằng giữa là del)
  current.next = after;

  //   current lúc này là target
  //   Delete current
  delete del;

  console.log('tail: ', linkedList.getTail());

  return linkedList.getHead();
};

const newLinkedList = createLinkedList();
newLinkedList.insertTail(1);
newLinkedList.insertTail(2);
newLinkedList.insertTail(3);
newLinkedList.insertTail(4);
newLinkedList.insertTail(5);

console.log(newLinkedList.getHead());
console.log(deleteMiddle(newLinkedList.getHead()));
