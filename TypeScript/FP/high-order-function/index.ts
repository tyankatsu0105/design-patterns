export {};

const add = (a: number) => (b: number) => a + b;
const add10 = add(10);
console.log(add10(30));
