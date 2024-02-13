function createLinkedList() {
  let head = null;

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
    // let tail = getTail(); --> haven't understand yet!!!
    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    tail.next = newNode;
    tail = newNode;
    // return head;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  return {
    insertTail,
    printList,
  };
}

const insertNumber = createLinkedList();

insertNumber.insertTail(12);
insertNumber.insertTail(13);
insertNumber.insertTail(14);

insertNumber.printList();
