//왼쪽 자식 오른쪽 형제
//Left Child Right Sibling => LCRS 사용
//N개의 자식을 가질 수 있는 트리

function Node(data) {
  this.child = null;
  this.sibling = null;
  this.data = data;
}

function createNode(data) {
  return new Node(data);
}

function appendChild(parent, child) {
  if (!parent.child) {
    parent.child = child;
  } else {
    let lastSibling = parent.child;
    while (lastSibling.sibling) {
      lastSibling = lastSibling.sibling;
    }

    lastSibling.sibling = child;
  }
}

function printTree(node, depth) {
  let indent = " ".repeat(depth * 4);

  console.log(`${indent}${node.data}`);

  if (node.child) {
    printTree(node.child, depth + 1);
  }

  if (node.sibling) {
    printTree(node.sibling, depth);
  }
}

function solution(datas) {
  const root = createNode("Root node");
  const rootChild = createNode("Root child node");
  appendChild(root, rootChild);

  appendChild(root, createNode("Root child node2"));

  const children = [1, 2, 3, 4, 5].map((value) => {
    return createNode(value);
  });

  for (let child of children) {
    appendChild(rootChild, child);
  }

  printTree(root, 0);
}

console.log(solution());
