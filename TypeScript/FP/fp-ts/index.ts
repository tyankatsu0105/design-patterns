import E from "fp-ts/Either";

import { pipe } from "fp-ts/function";

const fn = () => {
  return pipe(
    E.right(2),
    E.match(
      (err) => `Error is ${err}`, // onLeft handler
      (head) => `Result is ${head}` // onRight handler
    )
  );
};
