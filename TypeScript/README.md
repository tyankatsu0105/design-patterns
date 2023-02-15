# Setup

Deno を利用する

```bash
deno run TypeScript/simple-factory/index.ts
```

# 参照

- https://github.com/sohamkamani/javascript-design-patterns-for-humans

# Pattern type

## Creational Design Pattern

オブジェクト生成の方法を何らかのやり方で制御し、状況に適した方法で生成する仕組みを提供する

- [simple factory](./simple-factory)
  - オブジェクトを生成するオブジェクト
  - インスタント生成ロジックは外に露出しない
- [factory method](./factory-method/)
  - ベースクラスで実装を作り、派生クラスでそれを override する
  - ファクトリーメソッドはそのベースクラスのメソッド
  - ファクトリーメソッドを呼び出してオブジェクトを作成する
  - サブクラス定義時に動的に決定したいときに使う

## Structual Design Pattern

## Behavioral Design Pattern
