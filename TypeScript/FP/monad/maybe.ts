export class Maybe {
  static just<V>(value: V) {
    return new Just(value);
  }
  static nothing() {
    return new Nothing();
  }
  static fromNullable<V>(value: V) {
    if (value == null) return Maybe.nothing();

    return Maybe.just(value);
  }

  static of<V>(value: V) {
    return this.just(value);
  }

  get isNothing() {
    return false;
  }
  get isJust() {
    return false;
  }
}

class Just<V> extends Maybe {
  constructor(public value: V) {
    super();
  }

  map(func: (args: V) => V) {
    return Maybe.fromNullable(func(this.value));
  }

  getOrElse() {
    return this.value;
  }

  filter(func: (args: V) => boolean) {
    Maybe.fromNullable(func(this.value) ? this.value : null);
  }

  chain(func: (args: V) => Maybe) {
    return func(this.value);
  }

  toString() {
    return `Maybe.Just(${this.value})`;
  }
}

class Nothing extends Maybe {
  map(func: Function) {
    return this;
  }

  get value() {
    throw new TypeError("Can not extract the value of a Nothing");
  }

  getOrElse(other: any) {
    return other;
  }

  filter(func: Function) {
    return this;
  }

  chain(func: Function) {
    return this;
  }

  toString() {
    return "Maybe.Nothing";
  }
}
