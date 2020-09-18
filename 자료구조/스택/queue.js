//순환 큐
function Queue(capacity) {
  this.capacity = capacity;
  this.front = this.rear = 0;
  this.nodes = [];
}

const createQueue = (capacity) => {
  return new Queue(capacity);
};

const enqueue = (queue, data) => {
  let position = 0;
  if (queue.rear === queue.capacity) {
    queue.rear = 1;
  } else {
    position = queue.rear++;
  }

  queue.nodes[position] = data;
};

const dequeue = (queue) => {
  let position = queue.front;

  if (queue.front === queue.capacity) {
    queue.front = 0;
  } else {
    queue.front++;
  }

  return queue.nodes[position];
};

const isEmpty = (queue) => {
  return queue.front === queue.rear;
};

const isFull = (queue) => {
  if (queue.front < queue.rear) {
    return queue.rear - queue.front === queue.capacity;
  } else {
    return queue.front - queue.rear === 1;
  }
};

function main() {
  const queue = createQueue(5);

  [1, 2, 3, 4, 5, 6].forEach((value) => {
    if (!isFull(queue)) {
      enqueue(queue, value);
    } else {
      console.log(value);
      console.log(queue);
    }
  });

  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  if (isEmpty(queue)) {
    //console.log(dequeue(queue));
  }

  enqueue(queue, 10);
  enqueue(queue, 11);
  enqueue(queue, 12);
  enqueue(queue, 13);
  enqueue(queue, 14);

  if (isFull(queue)) {
    console.log(queue);
  }
}

main();

//순환큐 잘 모르겠다.
