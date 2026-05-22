/**
 * Diffing two objects means finding exactly what changed between them — which keys were
 * added, which were removed, and which had their value changed.
 * This is the core of how libraries like React, Vue, and Redux detect state changes,
 * and how tools like git know what lines changed between two versions of a file.
 * This implementation does a shallow diff, meaning nested objects are compared by reference
 * rather than recursively. If two nested objects have the same shape but different identity,
 * they'll show up as changed — see the last example below.
 * @module
 */
function diff(before, after) {
  const result = { added: {}, removed: {}, changed: {} };
  for (const key in after) {
    if (!(key in before)) result.added[key] = after[key];
    else if (before[key] !== after[key]) result.changed[key] = { before: before[key], after: after[key] };
  }
  for (const key in before) {
    if (!(key in after)) result.removed[key] = before[key];
  }
  return result;
}

const v1 = { name: "Alice", age: 30, role: "engineer" };
const v2 = { name: "Alice", age: 31, role: "engineer", team: "platform" };
console.log(diff(v1, v2));

const v3 = { a: 1, b: 2, c: 3 };
const v4 = { a: 1, c: 99 };
console.log(diff(v3, v4));

const v5 = { config: { timeout: 1000 } };
const v6 = { config: { timeout: 1000 } };
console.log(diff(v5, v6));
