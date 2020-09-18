/**
 * 1. 수식 이진 트리
 * 수식을 트리 형태로 표현하여 계산하게 하는 식
 *
 * 2. 이진 탐색 트리
 * 아주 빠른 데이터 검색을 가능케 하는 식
 */

function Node(data) {
  this.data = data;
  this.left = this.right = null;
}

const createNode = (data) => {
  return new Node(data);
};

const preOrderPrint = (node) => {
  if (node === null) {
    return;
  }

  console.log(node.data);
  preOrderPrint(node.left);
  preOrderPrint(node.right);
};

const inOrderPrint = (node) => {
  if (node === null) {
    return;
  }

  preOrderPrint(node.left);
  console.log(node.data);
  preOrderPrint(node.right);
};

const postOrderPrint = (node) => {
  if (node === null) {
    return;
  }

  preOrderPrint(node.left);
  preOrderPrint(node.right);
  console.log(data);
};

function main() {
  const aNode = createNode("A");
  const bNode = createNode("B");
  const cNode = createNode("C");
  const dNode = createNode("D");
  const eNode = createNode("E");
  const fNode = createNode("F");
  const gNode = createNode("G");

  aNode.left = bNode;
  aNode.right = cNode;
  bNode.left = dNode;
  bNode.right = eNode;
  cNode.left = fNode;
  cNode.right = gNode;

  preOrderPrint(aNode);
}

main();
