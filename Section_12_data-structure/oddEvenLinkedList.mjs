// import { createLinkedList } from './linkedlist-js.mjs';

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

var oddEvenList = function (head) {
  const linkedList = createLinkedList();

  let oddCurrent = head;
  let evenCurrent = head;

  let i = 1;
  let j = 1;
  while (oddCurrent !== null) {
    if (i % 2 !== 0) {
      linkedList.insertTail(oddCurrent.val);
    }
    oddCurrent = oddCurrent.next;
    i++;
  }

  while (evenCurrent !== null) {
    if (j % 2 === 0) {
      linkedList.insertTail(evenCurrent.val);
    }
    evenCurrent = evenCurrent.next;
    j++;
  }

  return linkedList.getHead();
};

const newLinkedList = createLinkedList();
newLinkedList.insertTail(1);
newLinkedList.insertTail(2);
newLinkedList.insertTail(3);
newLinkedList.insertTail(4);
newLinkedList.insertTail(5);

const result = oddEvenList(newLinkedList.getHead());

console.log('result: ', result);
