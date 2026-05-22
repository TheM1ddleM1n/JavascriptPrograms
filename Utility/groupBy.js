/**
 * `groupBy` takes an array of objects and a key, and groups the objects by the value
 * of that key — returning an object where each property is a group.
 * This is similar to SQL's `GROUP BY` clause, and is so commonly needed that it was
 * finally added to JavaScript natively as `Object.groupBy` in ES2024.
 * This implementation covers the same idea and also accepts a function instead of a key
 * string, so you can group by a computed value rather than just a direct property.
 * See: [Object.groupBy on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
 * @module
 */
function groupBy(arr, keyOrFn) {
  const fn = typeof keyOrFn === "function" ? keyOrFn : (item) => item[keyOrFn];
  return arr.reduce((groups, item) => {
    const key = fn(item);
    (groups[key] ??= []).push(item);
    return groups;
  }, {});
}

const people = [
  { name: "Alice", department: "engineering" },
  { name: "Bob", department: "design" },
  { name: "Carol", department: "engineering" },
  { name: "Dave", department: "design" },
  { name: "Eve", department: "engineering" }
];

console.log(groupBy(people, "department"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(groupBy(numbers, n => n % 2 === 0 ? "even" : "odd"));
