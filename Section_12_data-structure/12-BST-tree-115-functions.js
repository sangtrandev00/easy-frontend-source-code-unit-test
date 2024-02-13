// Một số bài toán hay gặp

// Duyệt các phần tử của cây (Dùng DFS/BFS)
// Kiểm tra 1 cây có phải là cây nhị phân, cây cân bằng hay không? Viết code cân bằng cây
// Tạo 1 array từ cây. Biến 1 array đã sort thành binary search tree
//leetcode.com/tag/tree

 function createBinarySearchTree(initKeyList) {
  
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };
    // base case
    if (node == null) return newNode;

    if (node.key === key) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }
    return node;
  }

  function findMin(node) {
    if (node == null) return null;
    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }
    return minNode;
  }

  function findMax(node) {
    if (node == null) return null;
    let maxNode = node;
    while (maxNode.right != null) {
      maxNode = maxNode.right;
    }
    return maxNode;
  }

  //   Search key in node list (find node)
  function search(node, key) {
    if (node == null) return null;
    if (key > node.key) return search(node.right, key); // Search chạy bên phải
    if (key < node.key) return search(node.left, key); // Search chạy bên trái
    return node;
  }

  //   Implement max nodes khá phức tạp --> Phải debug và chạy cơm để dễ hiểu hơn.
  function getMaxNodesCount(node) {
    if (node == null) return 0;
    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  function isBalanceTree(node) {
    if (node == null) return false;
    // if min height !== maxHeight -> ballance tree.
  }

  function getHeight() {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  }

  function printNodesAtLevel(node, level) {
    if (node == null) return;

    if (level === 0) {
      console.log(node.key);
      return;
    }

    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }

  // breadth first traversal
  function bfs() {
    const height = getHeight();
    for (let i = 0; i <= height; i++) {
      printNodesAtLevel(root, i);
    }
  }

  function getMaximumLevel() {

  }

  // DFS (deepth first traversal)  -> 3 types of traversal.
  function printInOrder(node) {
    if (node == null) return;
    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  }

  function printPreOrder(node) {
    if (node === null) return;

    console.log(node.key); // root

    printPreOrder(node.left);
    printPreOrder(node.right);

    return node;
  }

  function printPostOrder(node) {
    if (node === null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
  }

  // Xem lại để hiểu và giải thích cho nhà tuyển dụng!!!
  function remove(node, key) {
    if (node == null) return null;
    // find until we get at the node to be deleted
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }
    // key === node.key
    // no child
    if (node.left == null && node.right == null) return null;
    // one child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // two children
    const minNode = findMin(node.right); // Tại sao phải find Min ở đây nhỉ ? mà lại truyền node.right ở đây!
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }

  return {
    root,
    insert,
    findMin,
    findMax,
    search,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
    getMaxNodesCount,
    remove
  };

}

const binarySearchTree = createBinarySearchTree([-10,-3,0,5,9]);
console.log(binarySearchTree.root);
// console.log("Max node: ", binarySearchTree.getMaxNodesCount(binarySearchTree.root));

// console.log('search: ', binarySearchTree.search(binarySearchTree.root, 7));
// console.log('find min: ', binarySearchTree.findMin(binarySearchTree.root));
// console.log('height: ', binarySearchTree.getHeight());
// // binarySearchTree.printInOrder(binarySearchTree.root);
// // binarySearchTree.printPreOrder(binarySearchTree.root);
// console.log('post order: ');
// binarySearchTree.printPostOrder(binarySearchTree.root);
binarySearchTree.bfs()

// console.log(binarySearchTree.printPreOrder(binarySearchTree.root));