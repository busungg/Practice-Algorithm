/**
 * 1. 노드 삽입
 * 2. 노드 삭제
 * 3. 노드 탐색
 */

function binarySearch(node, target) {
  if (!node) {
    return null;
  }

  if (target === node.data) {
    return node;
  } else if (target > node.data) {
    return binarySearch(node.right, target);
  } else {
    return binarySearch(node.left, target);
  }
}

function binaryInsertNode(tree, child) {
  if (tree.data < child.data) {
    if (!tree.right) {
      tree.right = child;
    } else {
      binaryInsertNode(tree.right, child);
    }
  } else if (tree.data > child.data) {
    if (!tree.left) {
      tree.left = child;
    } else {
      binaryInsertNode(tree.left, child);
    }
  }
}
