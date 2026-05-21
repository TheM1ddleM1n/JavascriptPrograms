/**
 * Older JavaScript functions have access to a special `arguments` object — an array-like
 * object containing all the values passed to the function. It looks like an array but isn't
 * one, so array methods like `.map()` or `.filter()` don't work on it directly.
 * Arrow functions don't have their own `arguments` object at all.
 * Rest parameters (`...args`) were introduced in ES6 as the proper replacement. They collect
 * remaining arguments into a real array, work in arrow functions, and can be named meaningfully.
 * There's almost no reason to use `arguments` in modern JavaScript.
 * See: [rest parameters on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
 * @module
 */
function oldStyle() {
  console.log(arguments);
  console.log(Array.isArray(arguments));
  const asArray = Array.from(arguments);
  console.log(asArray.map(x => x * 2));
}

oldStyle(1, 2, 3);

function newStyle(...args) {
  console.log(args);
  console.log(Array.isArray(args));
  console.log(args.map(x => x * 2));
}

newStyle(1, 2, 3);

function firstAndRest(first, ...rest) {
  console.log(first);
  console.log(rest);
}

firstAndRest("a", "b", "c", "d");

const arrowFn = (...args) => console.log(args);
arrowFn(10, 20, 30);
