/**
 * Negate works for not only actual boolean values, but even truthy and falsy values!
 * example: 0 and NaN is falsy, 1 and arrays is truthy. doing !0 gives true, and !1 gives false.
 * You can double negate to get !!0 -> false, !!1 -> true
 * @module
 */
// whatever this is...
const falseArray = ![];
// however, we can make it true by double negating, since arrays are truthy.
const trueArray = !![];
console.log(`falseArray = ${falseArray}, trueArray = ${trueArray}`);

// bundlers usually abuse this quirk by transforming true/false to !0/!1.
// for some reason,
// my brain sometimes doesn't know what the value of !0 or !1 is (:sob:) so I run it in somewhere that can run JavaScript.
const falseNumber = !1;
const trueNumber = !0;
console.log(`falseNumber = ${falseNumber}, trueNumber = ${trueNumber}`);

const falseNaN = !!NaN;
const trueNaN = !NaN;
console.log(`falseNaN = ${falseNaN}, trueNaN = ${trueNaN}`);
