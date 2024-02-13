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

  function every(isValidFn) {
    // your code here ...

    if (head == null) {
      return false;
    }

    let current = head;

    while (current != null) {
      if (!isValidFn(current.data)) {
        return false;
      }
      current = current.next;
    }
    return true;
  }
  return {
    getHead,
    insertHead,
    every,
  };
}

const numberList = createLinkedList();
numberList.insertHead(1);
numberList.insertHead(2);
numberList.insertHead(3);
numberList.insertHead(4);

console.log(numberList.every((x) => x > 0));
console.log(numberList.every((x) => x % 2 === 0));
console.log(numberList.every((x) => x > 1));
