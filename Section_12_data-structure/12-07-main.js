function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function insertHead(data) {
    const newNode = {
      data,
      next: null,
    };

    // in case linked list is empty, use it as head
    if (head == null) {
      head = newNode;
      return head;
    }

    // Otherwise, assign head to newNode
    newNode.next = head;
    head = newNode;
    return head;
  }

  function removeHead() {
    if (head != null) {
      head = head.next;
    }

    return head;
  }

  function removeTail() {
    if (head == null) {
      return;
    }

    if (head.next == null) {
      head = null;
    }

    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    return head;
  }

  function removeAtPosition(position) {
    if (position <= 0) {
      return removeHead();
    }
    let i = 0;
    let prev = head;
    let curr = head;
    while (i < position && prev.next != null) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = curr.next;
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
    insertHead,
    getSize,
    printList,
    removeHead,
    removeTail,
    removeAtPosition,
  };
}

const numberList = createLinkedList();

numberList.insertHead(1);
numberList.insertHead(2);
numberList.insertHead(3);
numberList.insertHead(4);
numberList.printList();

// console.log('---------print true false ----');
// console.log(
//   'x % 5 ???',
//   numberList.some((x) => x % 5 == 0)
// );
// console.log(
//   'x < 3 ???',
//   numberList.some((x) => x < 3)
// );

console.log('-----remove items in data structure ---');

numberList.removeAtPosition(1);
numberList.removeHead();
numberList.removeTail();
numberList.printList();
