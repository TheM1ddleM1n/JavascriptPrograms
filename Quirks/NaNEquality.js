/**
 * NaN (Not a Number) is the only value in JavaScript that is not equal to itself.
 * This means `NaN === NaN` is false, which makes checking for NaN with `==` or `===` useless.
 * The old workaround was the global `isNaN()`, but it has a catch: it coerces its argument
 * to a number first, so `isNaN("hello")` returns true — even though "hello" isn't NaN, it's a string.
 * `Number.isNaN()` was introduced in ES6 to fix this. It returns true only if the value
 * is actually NaN, with no coercion tricks.
 * See: [Number.isNaN on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
 * @module
 */
const a = NaN;

console.log(a === NaN);
console.log(a == NaN);

console.log(isNaN("hello"));
console.log(isNaN(undefined));
console.log(isNaN(NaN));

console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(NaN));

const result = 0 / 0;
console.log(Number.isNaN(result));
