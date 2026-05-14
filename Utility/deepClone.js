function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, deepClone(v)])
  );
}

const original = { a: 1, b: { c: [2, 3] } };
const clone = deepClone(original);
clone.b.c.push(99);
console.log(original.b.c);
console.log(clone.b.c);
