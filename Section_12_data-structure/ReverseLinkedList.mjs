import { createLinkedList } from './linkedlist-js.mjs';

class Node {
  constructor() {
    this.head = null;
    this.next = null;
  }
}

// class LinkedList  {
//     constructor() {
//         this.size = 0;
//         this.head = null;
//     }

//     insertHead(data) {

//     }

//     insertTail(data) {

//     }

// }

// console.log('linkedList', linkedList);
var reverseList = function (head) {
  const linkedList = createLinkedList();
  let current = head;
  while (current != null) {
    linkedList.insertHead(current.data);
    current = current.next;
  }

  return linkedList.getHead();
};

const newLinkedList = createLinkedList();
newLinkedList.insertHead(5);
newLinkedList.insertHead(4);
newLinkedList.insertHead(3);
newLinkedList.insertHead(2);
newLinkedList.insertHead(1);
console.log('new: ', newLinkedList.getHead());
console.log('reverse: ', reverseList(newLinkedList.getHead()));
