/**
 * Hoisting is JavaScript's behavior of moving declarations to the top of their scope
 * before code runs. `var` declarations are hoisted and initialized as `undefined`,
 * which means you can reference a `var` variable before its line without an error — you
 * just get `undefined`, which is a common source of subtle bugs.
 * `let` and `const` are also hoisted, but they are NOT initialized. Accessing them before
 * their declaration throws a ReferenceError. The gap between the start of the scope and
 * the declaration is called the Temporal Dead Zone (TDZ).
 * Function declarations are hoisted entirely — both the name and the body — so you can
 * call them before they appear in the file. Function expressions assigned to `const` are not.
 * See: [Hoisting on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
 * @module
 */
console.log(hoistedVar);
var hoistedVar = "I was hoisted";
console.log(hoistedVar);

try {
  console.log(notHoisted);
  let notHoisted = "I was not";
} catch (e) {
  console.error(`let in the TDZ: ${e.message}`);
}

console.log(declaredFn());

function declaredFn() {
  return "function declarations are fully hoisted";
}

try {
  console.log(exprFn());
} catch (e) {
  console.error(`function expression: ${e.message}`);
}

const exprFn = () => "function expressions are not hoisted";
