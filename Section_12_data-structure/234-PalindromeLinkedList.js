
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
}

var isPalindrome = function(head) {


    // Use recursive function to do that
    

};
