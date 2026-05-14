function formatDate(date, locale = "en-US", options = {}) {
  const defaults = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat(locale, { ...defaults, ...options }).format(date);
}

console.log(formatDate(new Date()));
console.log(formatDate(new Date(), "en-GB"));
console.log(formatDate(new Date(), "ja-JP"));
