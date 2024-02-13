// insert before position
'use strict';
function createLinkedList() {
  let head = null;

  function insertBeforePosition(data, position) {
    // your code here
    const newNode = {
      data: data,
      next: null,
    };

    if (position <= 0 || head == null) {
      insertHead(data);
      return head;
    } else if (position >= getSize()) {
      insertTail(data);
    } else {
      let pre = head;
      for (let k = 0; k < position - 1; k++) {
        pre = pre.next;
      }
      let foundIndex = pre.next;
      //   const newNode2 = {
      //     data: data,
      //     next: null,
      //   };

      newNode.next = foundIndex;
      pre.next = newNode;
    }

    return head;
  }

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

  function insertTail(data) {
    // your code here ...

    const newNode = {
      data: data,
      next: null,
    };

    // let tail = head;

    if (head == null) {
      head = newNode;
      return;
    }
    // let tail = getTail();
    // let tail = head;
    // while (tail.next != null) {
    //   tail = tail.next;
    // }
    let tail = getTail();
    tail.next = newNode;
    tail = newNode;
    return head;
  }

  function getSize() {
    if (head == null) {
      return 0;
    }
    let count = 0;

    let current = head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  function getTail() {
    if (head == null) {
      return;
    }

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
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
    insertBeforePosition,
    printList,
  };
}

const insertNumber = createLinkedList();

insertNumber.insertBeforePosition(4, 0);
insertNumber.insertBeforePosition(3, 0);
insertNumber.insertBeforePosition(2, 0);
insertNumber.insertBeforePosition(1, 0);
insertNumber.printList();
console.log('------------after insert 99 into position 2 index --- ');
insertNumber.insertBeforePosition(99, 2);
insertNumber.printList();
// insert after

console.log('--------insert tail-----');
console.log(insertNumber.insertTail(32));
insertNumber.printList();
