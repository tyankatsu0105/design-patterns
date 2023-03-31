export class Wrapper<V> {
  constructor(private value: V) {}

  /**
   * モナド構造に値を挿入する
   */
  static of<R>(value: R) {
    return new Wrapper(value);
  }

  /**
   * 処理をチェーン化する
   */
  map<R>(func: (args: V) => R) {
    return Wrapper.of(func(this.value));
  }

  join() {
    if (!(this.value instanceof Wrapper)) return this;

    return this.value.join();
  }

  get() {
    return this.value;
  }
}
