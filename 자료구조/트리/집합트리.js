/**
 * 1. 집합 탐색 연산은 원소가 속해 있는 집합을 찾는 연산입니다.
 */

function Node(data) {
  this.data = data;
  this.parent = null;
}

const insertNode = (root, data) => {
  const newNode = new Node(data);
  newNode.parent = root;

  return newNode;
};

const findRootNode = (node) => {
  if (!node.parent) {
    return node;
  }

  return findRootNode(node.parent);
};

const unionSet = (set1, set2) => {
  const set2Root = findRootNode(set2);
  set2Root.parent = set1;
};

function main() {
  const root1 = new Node("root1");
  insertNode(root1, 1);
  insertNode(root1, 2);
  const child1 = insertNode(root1, 3);
  insertNode(root1, 4);

  const root2 = new Node("root2");
  insertNode(root2, 1);
  const child2 = insertNode(root2, 2);

  console.log(findRootNode(child1));
  console.log(findRootNode(child2));

  unionSet(root1, root2);
  console.log(findRootNode(child1));
  console.log(findRootNode(child2));
}

main();
