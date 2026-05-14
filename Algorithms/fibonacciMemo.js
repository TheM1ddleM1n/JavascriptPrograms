function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

for (let i = 0; i <= 10; i++) {
  process.stdout.write(fibonacci(i) + (i < 10 ? ", " : "\n"));
}
