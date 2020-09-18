const getOperandPriority = (operand) => {
  switch (operand) {
    case "*":
    case "/":
    case "%":
      return 2;
    case "+":
    case "-":
      return 1;
    case "(":
      return 0;
  }
};

const isOperand = (token) => {
  switch (token) {
    case "*":
    case "/":
    case "%":
    case "+":
    case "-":
    case "(":
    case ")":
      return true;
    default:
      return false;
  }
};

const getOperand = (stack, operand) => {
  let result = "";
  if (stack.length === 0) {
    stack.push(operand);
  } else {
    if (operand === ")") {
      while (stack[stack.length - 1] !== "(") {
        result += stack.pop() + " ";
      }
      // remove '('
      stack.pop();
      return result;
    } else if (operand === "(") {
      stack.push(operand);
    } else {
      const top = stack[stack.length - 1];
      if (getOperandPriority(top) - getOperandPriority(operand) > 0) {
        return operand + " ";
      } else {
        stack.push(operand);
      }
    }
  }

  return "";
};

//infix 분리
const divideString = (str) => {
  str = str.replace(/\s/gi, "");
  const result = [];
  let tmpStr = "";
  for (let i = 0; i < str.length; i++) {
    if (isOperand(str[i])) {
      if (tmpStr) {
        result.push(tmpStr);
        tmpStr = "";
      }
      result.push(str[i]);
    } else {
      tmpStr += str[i];
    }
  }

  if (tmpStr) {
    result.push(tmpStr);
  }

  return result;
};

const getPostfix = (infix) => {
  let postfix = "",
    token,
    stack = [];

  for (let i = 0; i < infix.length; i++) {
    token = infix[i];

    if (!isOperand(token)) {
      postfix += token + " ";
    } else {
      postfix += getOperand(stack, token);
    }
  }

  if (stack.length > 0) {
    while (stack.length !== 0) {
      postfix += stack.pop() + " ";
    }
  }

  return postfix;
};

console.log(
  getPostfix(divideString("(10 + ( ( 117.32 + 11 ) / 1 ) - 10 )* 5 "))
);
