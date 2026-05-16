/**
 * A lot of people use [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) for comparing in JavaScript, but there's something that a lot of people don't remember:
 * `==` will try and convert both to the same type! This causes unexpected behavior like:
 * `"1" == 1` is true, but a string shouldn't be equal to a number due to them having different types.
 * `0 == false` is true, but one is a number, and another is a boolean.
 * I can't be asked to give more examples, since I don't have any others.
 * So, how do we fix this? By using [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)!
 * Strict Equality doesn't try to convert both to the same type
 * @module
 */

const l1 = "1" == 1;
const l2 = 0 == false;
const l3 = 1 == true;
console.info(`Using "==", 1 = ${l1}, 2 = ${l2}, 3 = ${l3}`);

// now, all of these are false...

const s1 = "1" === 1;
const s2 = 0 === false;
const s3 = 1 === true;

console.info(`Using "===", 1 = ${s1}, 2 = ${s2}, 3 = ${s3}`);
