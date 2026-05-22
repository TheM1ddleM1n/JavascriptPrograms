/**
 * Currying transforms a function that takes multiple arguments into a chain of functions
 * that each take one argument at a time. `add(1, 2, 3)` becomes `add(1)(2)(3)`.
 * This lets you partially apply a function — fix some arguments now and supply the rest later.
 * For example, you can create a `double` function from a generic `multiply` just by
 * partially applying one argument, without writing a new function from scratch.
 * Currying is a core concept in functional programming and heavily used in libraries like
 * [Ramda](https://ramdajs.com/).
 * See: [Currying on MDN glossary](https://developer.mozilla.org/en-US/docs/Glossary/Currying)
 * @module
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...more) {
      return curried.apply(this, args.concat(more));
    };
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
console.log(add(1, 2, 3));

const multiply = curry((a, b) => a * b);
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));
console.log(triple(5));
