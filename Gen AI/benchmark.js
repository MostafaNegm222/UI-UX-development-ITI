// benchmark.js
const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));
console.time('QuickSort');
quickSort([...arr]);
console.timeEnd('QuickSort');

console.time('Array.sort');
[...arr].sort((a, b) => a - b);
console.timeEnd('Array.sort');