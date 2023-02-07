// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
// - max ให้ return ค่ามากสุดของตัวเลขใน Array
// - sum ให้ return ผลรวมของตัวเลขใน Array

Array.prototype.max = function () {
  return Math.max(...this);
};

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

let numbers = [1, 2, 3, 4, 5, 6, 3, 10, 9];
console.log(numbers.max()); // Output: 5
console.log(numbers.sum()); // Output: 15
