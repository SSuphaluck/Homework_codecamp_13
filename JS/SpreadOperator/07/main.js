// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object
// และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

const object = [{ num1: 1, num2: 2 }, { num1: 1 }, { num1: 1 }, { num1: 1 }];
let cloneObject = [...object];

console.log(object);
console.log(cloneObject);
