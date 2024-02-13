// Leet code remove recursive function
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

var removeElements = function (head, val) {
  if (head === null) {
    return null;
  }

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

const newLinkedList = createLinkedList();

newLinkedList.insertTail(1);
newLinkedList.insertTail(2);
newLinkedList.insertTail(3);
newLinkedList.insertTail(4);
newLinkedList.insertTail(6);
newLinkedList.insertTail(7);
newLinkedList.insertTail(6);

console.log(removeElements(newLinkedList.getHead(), 6));
