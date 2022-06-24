import { stringify } from "qs";
let arr = [
  { name: "1", type: 0 },
  { name: "2", type: 0 },
];
console.log(
  stringify(
    Object.entries(
      arr.reduce(
        (acc, next) => (
          acc[next.type]
            ? acc[next.type].push(next)
            : (acc[next.type] = [next]),
          acc
        ),
        {}
      )
    ).map(([key, values]) => ({ type: +key, values })),
    null,
    2
  )
);
