myarr=[1,2,4]
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}
function sum(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
// console.log(calculate(sum, 0, [1, 2, 4]));      // => 7
// calculate(multiply, 1, [1, 2, 4]); // => 8

console.log(calculate(multiply,1,myarr));
console.log(calculate(sum,0,myarr));
