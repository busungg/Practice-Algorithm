/**
 * 1. 정렬
 *  - Y가 큰 순서 X가 작은 순서
 *
 * 2. 정렬 리스트 2진 노드로 구현
 *
 */

function solution(nodeinfo) {
  var answer = [];

  const sortedNodes = nodeinfo
    .map((item, index) => {
      return { x: item[0], y: item[1], index: index + 1 };
    })
    .sort((a, b) => {
      if (b.y - a.y !== 0) {
        return b.y - a.y;
      } else {
        return a.x - b.x;
      }
    });

  const head = new Node(sortedNodes[0], null);
  for (let i = 1; i < sortedNodes.length; i++) {
    insertNode(head, sortedNodes[i]);
  }

  const preResult = [],
    postResult = [];
  preOrder(head, preResult);
  postOrder(head, postResult);
  answer.push(preResult, postResult);

  return answer;
}

function preOrder(parent, result) {
  if (!parent) {
    return;
  }
  result.push(parent.index);
  preOrder(parent.left, result);
  preOrder(parent.right, result);
}

function postOrder(parent, result) {
  if (!parent) {
    return;
  }

  postOrder(parent.left, result);
  postOrder(parent.right, result);
  result.push(parent.index);
}

function insertNode(parent, info) {
  if (parent.x > info.x) {
    if (!parent.left) {
      new Node(info, parent);
    } else {
      insertNode(parent.left, info);
    }
  } else {
    if (!parent.right) {
      new Node(info, parent);
    } else {
      insertNode(parent.right, info);
    }
  }
}

function Node(info, parent) {
  if (parent) {
    this.parent = parent;
    if (parent.x > info.x) {
      parent.left = this;
    } else {
      parent.right = this;
    }
  }

  this.index = info.index;
  this.x = info.x;
  this.y = info.y;
  this.left = this.right = null;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
