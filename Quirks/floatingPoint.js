/**
 * JavaScript uses 64-bit floating point numbers (IEEE 754), just like most languages.
 * The problem is that some decimal fractions can't be represented exactly in binary —
 * similar to how 1/3 can't be represented exactly in decimal (0.333...).
 * This means `0.1 + 0.2` doesn't equal `0.3` — it equals `0.30000000000000004`.
 * The standard fix is to compare within a small tolerance (epsilon) rather than directly,
 * or to use `toFixed()` when displaying, or multiply up to integers before doing math.
 * See: [Number.EPSILON on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)
 * @module
 */
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

function nearlyEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(nearlyEqual(0.1 + 0.2, 0.3));

console.log((0.1 + 0.2).toFixed(1));

console.log((1 + 2) / 10 === 3 / 10);
