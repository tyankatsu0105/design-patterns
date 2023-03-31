/**
 * ES6 versions of Either monad used in FP in JS
 * Author: Luis Atencio
 */
export class Either<V> {
  constructor(public value: V) {}

  static left(a) {
    return new Left(a);
  }

  static right(a) {
    return new Right(a);
  }

  static fromNullable(val) {
    if (val === null || val === undefined) return Either.left(val);

    return Either.right(val);
  }

  static of(a) {
    return Either.right(a);
  }
}

export class Left<V> extends Either<V> {
  map(_) {
    return this; // noop
  }

  get value() {
    throw new TypeError("Can't extract the value of a Left(a).");
  }

  getOrElse(other) {
    return other;
  }

  orElse(f) {
    return f(this.value);
  }

  chain(f) {
    return this;
  }

  getOrElseThrow(a) {
    throw new Error(a);
  }

  filter(f) {
    return this;
  }

  get isRight() {
    return false;
  }

  get isLeft() {
    return true;
  }

  toString() {
    return `Either.Left(${this.value})`;
  }
}

export class Right<V> extends Either<V> {
  map(f) {
    return Either.of(f(this.value));
  }

  getOrElse(other) {
    return this.value;
  }

  orElse() {
    return this;
  }

  chain(f) {
    return f(this.value);
  }

  getOrElseThrow(_) {
    return this.value;
  }

  filter(f) {
    return Either.fromNullable(f(this.value) ? this.value : null);
  }

  get isRight() {
    return true;
  }

  get isLeft() {
    return false;
  }

  toString() {
    return `Either.Right(${this.value})`;
  }
}
