function Node(data) {
  this.data = data;
  this.prev = this.next = null;
}

const createNode = (data) => {
  return new Node(data);
};

//head의 tail node에 바로 추가하면된다. 환형 linked list가 좋은 이유이다.
const appendNode = (head, newNode) => {
  if (!head.next) {
    head.next = newNode;
    head.prev = newNode;
    newNode.next = head;
    newNode.prev = head;
  } else {
    let lastNode = head.prev;
    lastNode.next = newNode;
    newNode.prev = lastNode;
    newNode.next = head;
    head.prev = newNode;
  }
};

const removeNode = (remove) => {
  const prevNode = remove.prev;
  const nextNode = remove.next;

  if (prevNode) {
    prevNode.next = nextNode;
  }
  if (nextNode) {
    nextNode.prev = prevNode;
  }

  remove.prev = remove.next = null;
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

  console.log(head);

  for (const node of nodeArray) {
    removeNode(node);
    console.log(head);
  }
}

main();
