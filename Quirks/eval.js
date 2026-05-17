/**
 * Eval inherits the context (variables, functions. etc.) of your current script,
 * most linters forbid (as in with a warning, not an error) using this, due to what you could do in it.
 * a lot of sites use have CSP, and CSP prevents eval from being used by default
 * (unless they explicitly add `unsafe-eval` to their CSP). It's EVIL, not EVAL!
 * this allows you to do dumb stuff like...
 * @module
 */
let i = 0;

// most things that analyze code without looking at how it actually runs fall for this,
// since they don't try to analyze the code passed to eval.
eval("i = 1");

if (i !== 0) {
    console.error(`i !== 0, what could've possibly happened! it's ${i} instead now.`);
}