function Node(data) {
  this.data = data;
  this.prev = this.next = null;
}

const createNode = (data) => {
  return new Node(data);
};

const appendNode = (head, newNode) => {
  if (!head.next) {
    head.next = newNode;
    newNode.prev = head;
  } else {
    let tailNode = head;
    while (1) {
      if (tailNode.next) {
        tailNode = tailNode.next;
      } else {
        tailNode.next = newNode;
        newNode.prev = tailNode;
        break;
      }
    }
  }
};

const getNodeAt = (head, index) => {
  while (index !== 0) {
    head = head.next;
    index--;
  }

  return head;
};

const removeNode = (head, remove) => {
  while (head) {
    if (head === remove) {
      head.prev.next = head.next;
      head.next.prev = head.prev;
      break;
    } else {
      head = head.next;
    }
  }
};

const insertNode = (current, newNode) => {
  newNode.next = current.next;
  newNode.prev = current;

  if (current.next != null) {
    current.next.prev = newNode;
  }
  current.next = newNode;
};

function main() {
  const head = createNode(null);
  const nodeArray = ["first", "second", "third", "forth", "fifth"].map(
    (value) => {
      return createNode(value);
    }
  );

  for (const node of nodeArray) {
    appendNode(head, node);
  }

  console.log(getNodeAt(head, 2));

  removeNode(head, nodeArray[2]);

  console.log(head);

  insertNode(nodeArray[1], nodeArray[2]);

  console.log(head);
}

main();
