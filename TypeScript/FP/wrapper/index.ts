export = {};

class Wrapper<V> {
  constructor(private value: V) {}

  public map<R>(func: (args: V) => R) {
    return func(this.value);
  }
  public fmap<R>(func: (args: V) => R) {
    return new Wrapper(func(this.value));
  }
  public toString() {
    return `Wrapper ${this.value}`;
  }
}

const identity = <V>(v: V) => v;

// const wrap = new Wrapper(1);
// const wrapperdValue = wrap.map(identity);
// console.log({ wrapperdValue });

const plus = (a: number) => (b: number) => a + b;
const plus3 = plus(3);
const wrap = new Wrapper(10);
const fmappedWrapper = wrap.fmap(plus3);
console.log(fmappedWrapper.map(identity));
