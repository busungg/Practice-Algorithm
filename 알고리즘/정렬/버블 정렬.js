const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    //횟수
    let tmp = 0;
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
};

const array = [4, 2, 3, 10, 5, 6, 10, 7];
bubbleSort(array);
console.log(array);
