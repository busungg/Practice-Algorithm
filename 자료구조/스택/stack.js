function TagNode(data) {
  this.data = data;
}

function TagStack() {
  this.capacity;
  this.top;
  this.nodes;
}

const createStack = (capacity) => {
  const stack = new TagStack();
  stack.capacity = capacity;
  stack.top = 0;
  stack.nodes = [];

  return stack;
};

const destroyStack = (stack) => {
  stack.nodes = null;
};

const push = (stack, data) => {
  stack.nodes[stack.top] = data;
  stack.top++;
};

const pop = (stack) => {
  if (stack.top != 0) {
    const data = stack.nodes[stack.top - 1].data;
    delete stack.nodes[stack.top - 1];
    stack.top--;

    return data;
  } else {
    return null;
  }
};

function main() {
  const nodes = [1, 2, 3, 4, 5].map((value) => {
    return new TagNode(value);
  });

  const stack = createStack(10);
  for (const node of nodes) {
    push(stack, node);
  }

  console.log(stack);

  console.log(pop(stack));
  console.log(pop(stack));
  console.log(pop(stack));
  console.log(pop(stack));
  console.log(pop(stack));
  console.log(pop(stack));
}

main();
