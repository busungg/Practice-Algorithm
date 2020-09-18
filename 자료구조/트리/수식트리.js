/**
 *  수식을 표현하는 이진 트리
 *  1. 피연산자는 잎 노드이다.
 *  2. 연산자는 루트 노드, 또는 가지 노드이다.
 *
 * 재귀함수로 Tree를 만든다는 것은 상상도 못했다.
 */

function Node(data) {
  this.data = data;
  this.right = this.left = null;
}

const isOperand = (token) => {
  switch (token) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
  }

  return false;
};

const buildTree = (tokens, node) => {
  const token = tokens[tokens.length - 1];
  tokens.length -= 1;

  if (isOperand(token)) {
    if (!node.right) {
      node.right = new Node(token);
    }

    buildTree(tokens, node.right);
  }
};

//{root: null}
// 10 117.32 11 + 1 / 10 - + 5 *
// (10 + ( ( 117.32 + 11 ) / 1 ) - 10 )* 5
