/**
 * A very funny quirk of JavaScript is that arrays are considered objects.
 * In order to check if something is actually an array, you need to use `Array.isArray`
 * @module
 */
const obj = []; // try 
const typeofArray = typeof obj;
const isArray = Array.isArray(obj);
console.info(`the type of an array is ${typeofArray}, but it's ${isArray ? "actually an array" : "not an array"}`);
