function Node(data) {
  this.data = data;
  this.next = null;
}

/**
 * 1. 노드 생성/소멸
 * 2. 노드 추가
 * 3. 노드 탐색
 * 4. 노드 삭제
 * 5. 노드 삽입
 */

const createNode = (data) => {
  const node = new Node(data);
  return node;
};

const appendNode = (head, newNode) => {
  /* 예상한대로 작동하지 않는다.
        그 이유: Javascript는 call by value로 작동하고 
        function head는 새로운 식별자이다. 
        head가 원시값을 받게 되면 값을 복사한 새로운 메모리의 주소값을 참조한다.
        head에 newNode를 대입하면 head는 newNode의 주소값을 참조하지만 function이 끝난후에는 스택 메모리에서 삭제된다.
        appendNode로 입력한 main의 head의 메모리 주소는 보존된다.
        
        head가 객체를 받게되면 객체의 동일 주소값을 복사하여 head가 같게된다.
        head는 식별자 그냥 주소값을 보존하는 컨테이너다. -> 컨테이너에는 새로운 주소값을 보존할 수 있다.
        head에 newNode를 대입하면 head는 newNode의 주소값을 보존한다. 하지만 스택 메모리에서 삭제되기 때문에
        heap 메모리 작업을 하지 않는 이상 main의 head 객체는 변화가 없다.
        
    if(!head.next) {
        head = newNode;
    }
    */

  /*
    while(head) {
        head = head.next;
    }
    console.log(head);
    head = newNode;
    */

  while (1) {
    if (head.next) {
      head = head.next;
    } else {
      head.next = newNode;
      return;
    }
  }
};

const getNodeAt = (head, index) => {
  while (head.next && index !== 0) {
    head = head.next;
    index--;
  }

  if (index !== 0) {
    return Error("There is no data");
  }

  return head.data;
};

const removeNode = (head, node) => {
  while (head) {
    if (head.next === node) {
    }
  }
};

function main() {
  //head node
  const head = createNode(null);
  const nodeList = ["first", "second", "third"].map((value) => {
    return createNode(value);
  });

  for (const node of nodeList) {
    appendNode(head, node);
  }

  console.log(getNodeAt(head, 4));
}

main();
