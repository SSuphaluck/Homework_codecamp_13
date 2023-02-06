// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// function multiply(...nums) {
//   let result = 1;
//   for (let num of nums) {
//     result *= num;
//   }
//   return result;
// }

// console.log(multiply(1, 2, 3, 4));

const multiply = (...nums) => nums.reduce((acc, item) => acc * item, 1);

console.log(multiply(1, 2, 3, 4));
