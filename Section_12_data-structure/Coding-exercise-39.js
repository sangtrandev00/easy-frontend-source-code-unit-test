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
    if (!head) {
      head = newNode;
      return head;
    }

    // Otherwise, assign head to newNode
    newNode.next = head;
    head = newNode;
    return head;
  }

  function some(isValidFn) {
    // your code here

    if (head == null) {
      return false;
    }

    let current = head;

    while (current != null) {
      if (isValidFn(current.data)) {
        return true;
      }
      current = current.next;
    }
    return false;
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
    some,
    getSize,
    printList,
  };
}

const numberList = createLinkedList();

numberList.insertHead(1);
numberList.insertHead(2);
numberList.insertHead(3);
numberList.insertHead(4);
numberList.printList();

console.log('---------print true false ----');
console.log(
  'x % 5 ???',
  numberList.some((x) => x % 5 == 0)
);
console.log(
  'x < 3 ???',
  numberList.some((x) => x < 3)
);
