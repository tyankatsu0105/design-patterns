import { Wrapper } from "./wrapper";
import { identity } from "./combinator";
import { Maybe } from "./maybe";

const wrap = Wrapper.of(10);
const plus50 = (a: number) => a + 50;
const wrappedValue = wrap.map(plus50).map(identity);
console.log(wrappedValue);

console.log(Wrapper.of(Wrapper.of(Wrapper.of(Wrapper.of("hello")))));
console.log(Wrapper.of(Wrapper.of(Wrapper.of(Wrapper.of("hello")))).join());

const safe = Maybe.fromNullable("aaaaaaaa");
console.log({ safe });
