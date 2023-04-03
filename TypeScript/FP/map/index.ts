export = {};
const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map((a) => a * 2).map((a) => a + 1);
console.log(array2);

const f = (array: any[]) => array.map((a) => a * 2).map((a) => a + 1);

// // Array.mapのようにメソッドチェーンで書きたいのでこれはなし
// console.log(f(array1));

// // メソッドチェーンでかけるが、fは引数に配列を期待しているため、mapに渡ってくるのは配列の要素にならないとだめ
// // Array.mapのままではメソッドチェーンはかけない
// console.log([array1].map(f));

// // flatで階層を下げればメソッドチェーンでかける
console.log([array1].map(f).flat());
