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

const buildTree = (tokens) => {
  if (tokens.length === 0) {
    return null;
  }

  const root = new Node(tokens.pop());
  const build = (root, token) => {
    if (!root) {
      return null;
    }

    if (isOperand(root.data)) {
      if (!build(root.right, token)) {
        root.right = new Node(token);
      } else if (!build(root.left, token)) {
        root.left = new Node(token);
      }
    }

    return true;
  };

  while (tokens.length !== 0) {
    build(root, tokens.pop());
  }

  return root;
};

const inOrder = (root, result) => {
  if (root.left) {
    inOrder(root.left, result);
  }

  result.push(root.data);

  if (root.right) {
    inOrder(root.right, result);
  }
};

const calculate = (root, result) => {
  if (root.left) {
    calculate(root.left, result);
  }

  if (root.right) {
    calculate(root.right, result);
  }

  if (isOperand(root.data)) {
    let b = result.pop(),
      a = result.pop();

    switch (root.data) {
      case "+":
        result.push(a + b);
        break;
      case "-":
        result.push(a - b);
        break;
      case "/":
        result.push(a / b);
        break;
      case "*":
        result.push(a * b);
        break;
    }
  } else {
    result.push(root.data);
  }
};

function main() {
  const root = buildTree([10, 110.5, 11, "+", 1, "/", 10, "-", "+", 5, "*"]);
  const result = [],
    calResult = [];
  inOrder(root, result);
  calculate(root, calResult);

  console.log(result.join(" "));
  console.log(calResult[0]);
}

main();

//{root: null}
// 10 110.5 11 + 1 / 10 - + 5 *
// (10 + ( ( 110.5 + 11 ) / 1 ) - 10 )* 5
