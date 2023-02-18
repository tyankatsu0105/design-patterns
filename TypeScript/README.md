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

- [simple factory](./simple-factory/index.ts)
  - オブジェクトを生成するオブジェクト
  - インスタント生成ロジックは外に露出しない
- [factory method](./factory-method/index.ts)
  - ベースクラスで実装を作り、派生クラスでそれを override する
  - ファクトリーメソッドはそのベースクラスのメソッド
  - ファクトリーメソッドを呼び出してオブジェクトを作成する
  - サブクラス定義時に動的に決定したいときに使う
- [abstract factory](./abstract-factory/index.ts)
  - 共通の目的を持ったファクトリグループを、抽象化することなくカプセル化する
  - グループ化することで、間違ったファクトリを使うことを防ぐ
- [builder](./builder/index.ts)
  - Telescoping constructor アンチパターンの解決策のためのオブジェクト生成パターン
    - Telescoping constructor アンチパターンとは、パラメータが増え続け、パラメータの理解に乏しくなり、このパラメータは今後も拡張し続けていくようになってしまうこと
    - `constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {...}`
- [prototype](./prototype/index.ts)
  - 既存のオブジェクトをもとにクローンとなるオブジェクトを生成する
- [singleton](./singleton/index.ts)
  - 特定のクラスのインスタンス化を一度だけに制限する
  - アプリケーション全体で統一したい場合にインスタンス化の回数を制限する

## Structual Design Pattern

## Behavioral Design Pattern
