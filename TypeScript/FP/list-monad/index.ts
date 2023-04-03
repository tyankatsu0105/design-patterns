export = {};

const unit = <V>(a: V) => [a];
const array1 = [1, 2, 3, 4, 5];

// const array2 = array1.map((a) => unit(a * 2)).flat();
// const array2 = array1
//   .map((a) => unit(a * 2))
//   .flat()
//   .map((a) => unit(a + 1))
//   .flat();
const array2 = array1.flatMap((a) => unit(a * 2)).flatMap((a) => unit(a + 1));

console.log(array2);
