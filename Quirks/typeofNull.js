/**
 * `typeof null` returns `"object"` — but null is not an object, it's its own primitive type.
 * This is a bug that has existed since JavaScript's very first version in 1995.
 * The reason it wasn't fixed is the same as most JavaScript quirks: fixing it would break
 * the enormous amount of existing code that may rely on this behavior.
 * The correct way to check for null is a strict equality check against null directly,
 * since null is the only value that is both falsy and returns `"object"` from typeof.
 * See: [typeof on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
 * @module
 */
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});

console.log(null === null);
console.log(typeof null === "object" && null === null);

const value = null;
if (typeof value === "object" && value !== null) {
  console.log("It's actually an object!");
} else {
  console.log("It's null, not an object!");
}
