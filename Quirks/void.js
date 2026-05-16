// void quirk #1: void <any expression> will return `undefined`.
const undef = void 0;
const undef2 = void 67;

console.log(`void 0 = ${undef}, void 67 = ${undef2}.`);

// void <math expression> "breaks" (not really) this rule by returning NaN.
// it's because (void 6) is undefined, and doing any number operation with `undefined` will return `NaN`.
const NaN2 = void 6+7;
const NaN3 = undefined * 0; // even though the answer to <anything> * 0 is ALWAYS 0 in math, JavaScript still returns NaN.
console.log(`2 = ${NaN2}, 3 = ${NaN3}.`);
// not related to the void earlier stuff, but lol.
const zero = null * 2; // but this doesn't return NaN? instead, `null` is converted to 0.
console.log(`zero = ${zero}`);
