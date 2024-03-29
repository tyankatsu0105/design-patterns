# FP

関数型言語のデザインパターン

# Setup

ts-node を利用する

```bash
npx ts-node lens/index/ts
```

# 参照

- https://book.impress.co.jp/books/1115101137
  - https://github.com/luijar/functional-programming-js
- https://github.com/ramda/ramda
- https://kentutorialbook.github.io/30minLearningJavaScriptMonad/
- https://kentutorialbook.github.io/functionalprogramming2022/
-

# 内容

## 基礎的概要

- 宣言型プログラミング
  - 処理の流れを書かずに、一連の処理を表現する
  - プログラムの記述と評価を分離
  - 再利用可能な形の抽象度の処理を量産
- 純粋関数
  - 副作用と状態変化を伴わない
  - 副作用を伴う処理は引数として受け取る
    - 例）db にアクセスする処理は、引数で db にアクセスする処理を受け取ることで、副作用を伴わないようになる
- 参照透過性
  - 入力された値に対して一定の値を常に返す
  - テストがしやすい
- 不変性
  - 処理の過程で値が変わらない
  - immutable
  - 参照渡しよりも値渡し

## FP とは

純粋関数を宣言的に評価すること。純粋関数は外部から観測可能な副作用を回避することで、不変性を持つプログラムを生成する。

- 分解と合成
  - FP は関数単位での分解と合成
    - 単一責任の原則
- call by need
  - 必要になって初めて実行されるプログラム
    - 遅延評価
  - 値を取得する関数を後で実行し、組み立ては先に行っておく
    - 高階関数を使う
      - カリー化
      - 部分適用
- リアクティブプログラミング
  - コードの抽象度を上げる

## lens（関数参照）

状態を持つオブジェクトを不変的に変更する方法  
愛顧地にハードコードする必要がない
関数型で getter と setter が定義できる手段を提供する

## 関数

FP における作業単位  
undefined を返す関数を void 関数と呼ぶ

## 制御フロー

プログラムが解決に至るフロー

- 命令型
  - 詳細にフローを記述
- 宣言型
  - 最小限の構成から成るフローを利用して抽象度を上げる

## メソッドチェーン

複数の処理を１つの命令文で呼び出す OOP パターン  
全メソッドが同じオブジェクトに存在している = メソッドカスケード
メソッドチェーンを呼び出した元の値が不変な場合は関数型と相性がいい

## ラムダ式

アロー関数のこと
一般的に値を返すことを求める

## LISP

関数型 JS の多くは、map,reduce,filter など、リストの処理が基本となる。  
原型の関数型言語は LISP(List Processing)である

## 関数型プログラムの宣言モデル

独立した純粋関数を評価するのがプログラムとみなす。
適度な抽象化を行うことで、アプリケーションに仕様や用語を確立可能。
それぞれの処理の命名を意味のあるもので書くことで、データのフローが追いやすくなる。

## 宣言的

関数型プログラミングは、命令型よりも強力な抽象化が可能である。
データの出力が「どのように得られるのか」ではなく、データ出力が「なにか」を説明する
愚直にデータフローを書いていって、その結果を得るのではなく、データフローを抽象化して、その結果を得る。

## 末尾呼び出し最適化(tail call optimization TCO)

「末尾呼び出し」とは、関数の最後に呼び出される関数呼び出しのこと。
「末尾呼び出し最適化」とは、関数の最後に呼び出される関数呼び出しを、関数呼び出しではなく、関数の実行に置き換えること。「末尾呼び出しの除去」とも呼ばれる。

https://js-next.hatenablog.com/entry/2016/01/28/232111

> ある関数 A から別の関数 B を呼び出すとき、処理系は後で戻って来れるように一旦 A の状態を保存し、関数 B の処理に入る。これが問題になるのは再帰の時で、数万回程度の再帰でスタックが一杯になり、エラーとなってしまう。しかし、もし関数 B 呼び出しの際に、関数 A に戻ってきて処理を続ける必要のない形で呼びだされていれば、状態の保存を省略して関数 B に移行する最適化が可能であり、ES2015 でその詳細が定義されることとなった。

```ts
// 末尾呼び出しのケース
function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }

  // 自分自身を呼び出して終わっているので、末尾呼び出し
  return factorial(n - 1, n * acc);
}

// 末尾呼び出しではないケース
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  // 自分自身を呼び出した後に、* による演算を行っているので末尾呼び出しではない。
  return n * factorial(n - 1);
}
```

## モジュール性

再利用可能な単位でコードを分割すること。
モジュール化されたパーツの意味から、プログラム全体の意味を推測できる。

## メソッドチェーンとパイプライン

メソッドチェーンは特定のオブジェクトに対して、メソッドを連続して呼び出しているので、その特定のオブジェクトに対して強い依存が生まれる。
一方でパイプラインは、関数の入出力にしか依存しないので、ゆるい依存しか生まれない。
パイプラインを扱う際の必要条件は

- 型
  - 入力となる関数の出力の型が入力の方と同じであること
    - fn(a: string)なら、string を返す関数を入力として引き受けなければならない
- アリティ（引数の個数）
  - 入力となる関数のアリティが同じであること
    - fn(a: string, b: string)なら、(a,b)を引数とする関数を入力として引き受けなければならない

## タプル

有限かつ順番に並んだリストの要素。  
一般的に配列でタプルを実現する。  
値の順序が不要であり、名前付き要素が必要な場合は、オブジェクトを使う。

## カリー化

カリー化で処理の実行を遅らせることで、一部の引数を固定した関数を作成することができる。
それによって再利用性を高められたり、関数の抽象化が可能になったりする。

```ts
const add = (a: number) => (b: number) => a + b;
const add2 = add(2);
add2(3);
```

## 部分適用

元の関数の一部の引数を固定した関数を作成すること。
カリー化とは違って新しい関数を返さないので、再利用性は高くない。

```ts
const add = (a: number, b: number) => a + b;
const add2 = add.bind(null, 2);
add2(3);
```

## 関数束縛

特定の関数に固定された引数を持つ新しい関数を生成する手法

```ts
const add = (a: number, b: number) => a + b;
const add2 = (n: number) => add(2, n);
add2(3);
```

部分適用とほぼ同じ

## ポイントフリープログラミング

ポイントとは、関数の引数のこと。
関数の引数を意図的に明示的に指定せず、関数合成によって動作を定義するプログラミングスタイル
compose や pipe のような中間関数を使うことで、関数合成を行い、関数の引数を明示的に指定しないことができる。

```ts
// h,g,fの引数を明示的に指定していない
const result = compose(h, g, f)(2);
```

## 関数コンビネータ

関数合成を行う関数のこと。

### identity

I コンビネータ
引数を返すので、関数合成の中間関数として使うことができる。

```ts
const I = (a: any) => a;
```

### tap

K コンビネータ
void 型関数を合成に対して橋渡しするときに使う

```ts
const K = (a: any) => (b: any) => a;
```

### alternation

OR コンビネータ
2 つの関数を引数に取り、どちらかの関数が true を返したら true を返す関数を返す

```ts
const OR = (f: (a: any) => boolean, g: (a: any) => boolean) => (a: any) =>
  f(a) || g(a);
```

### sequense

S コンビネータ
2 個以上の関数を引数に取り新しい関数を返す
同じ値をそれら関数に渡して順次実行する

```ts
const S =
  (...funcs: ((a: any) => any)[]) =>
  (a: any) =>
    funcs.forEach((f) => f(a));
```

### fork

F コンビネータ
2 つの関数を引数に取り、新しい関数を返す
新しい関数は、2 つの関数をそれぞれ実行し、その結果を配列にして返す

```ts
function fork<T, U, V>(f: (x: T) => U, g: (x: T) => V) {
  return (x: T): [U, V] => {
    const result1 = f(x);
    const result2 = g(x);
    return [result1, result2];
  };
}

const addOne = (x: number) => x + 1;
const multiplyByTwo = (x: number) => x * 2;

const forked = fork(addOne, multiplyByTwo);
const result = forked(3);
console.log(result);
```

## 関数型プログラムで例外を投げない

try catch 句は関数型のお作法と反する

- 合成やチェーン化できない
- 参照透過性に反する。出口を増やしている
- エラーはシステム全体に波及する副作用発生の原因に成る
- エラーから復帰する処理は、関数呼び出しから離れているので局所性の原則に反する
- catch で後処理を行うため、呼び出し元に責任を負わせることになる

## ファンクター

関数をマッピングできるデータ構造のこと
値を入力してコンテナを生成する。次にコンテナを開いて与えられた関数を値に適用し、生成した値を新しいコンテナに入れる。  
安全ではない可能性のあるコードを、安全な箱（またはコンテナ）に入れるための仕組み  
値への直接のアクセスを禁止し、値へのアクセスはコンテナに処理をマッピングすることによってのみ  
格納された値を直接取得・変換することができないことがメリット

```ts
class Wrapper<V> {
  constructor(private value: V) {}

  public map<R>(func: (args: V) => R) {
    return func(this.value);
  }
  public fmap<R>(func: (args: V) => R) {
    return new Wrapper(func(this.value));
  }
}
```

fmap 関数のように、コンテナを返すのは、処理をつなげて連続処理を行えるようにするため  
Array#filter や filter などのメソッドはまさにファンクター。Array を ファンクター とみなし、その要素を変換するために map メソッドを使用している。

- 構造を保ったまま、要素を 1:1 で転写（map）する
  - 値を別の値に変換するために取り扱う口を設けている
- 自分自身の型と同じを返す
  - Array.map は Array オブジェクトを返す

の 2 つがファンクターには必要  
ファンクターは型変換を行うための一般的な手法

## モナド

ファンクターと似ている
処理を行う値についての知識を一切持たずに、連続したステップとして実行する計算を表現するために利用されるデザインパターン  
合成を利用する場合に安全かつ副作用なしでデータフロー管理できる

- map
  - オブジェクト自身を返す
- unit
  - コンテナに入れる
    - `value` => `[value]`
- flat
  - コンテナから剥がす
    - `[[value]]` => `[value]`

の 3 つの概念から構成される

## モナドチェーン

pipe のような合成の途中で null を返すとその後の処理が失敗する  
そのため、null を途中で返しても全体が失敗せず、後続の処理で任意のタイミングで null をハンドリングできるようにする
