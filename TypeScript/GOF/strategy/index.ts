export {};

type Dataset = number[];

const bubbleSort = (dataset: Dataset) => {
  console.log("Sorting with bubble sort");
  // ...
  // ...
  return dataset;
};

const quickSort = (dataset: Dataset) => {
  console.log("Sorting with quick sort");
  // ...
  // ...
  return dataset;
};

const sorter = (dataset: Dataset) => {
  if (dataset.length > 5) {
    return quickSort;
  } else {
    return bubbleSort;
  }
};

const longDataSet = [1, 5, 4, 3, 2, 8];
const shortDataSet = [1, 5, 4];

const sorter1 = sorter(longDataSet);
const sorter2 = sorter(shortDataSet);

sorter1(longDataSet);
sorter2(shortDataSet);
