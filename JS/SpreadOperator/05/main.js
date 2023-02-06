// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array
// และ return ค่าเป็น Array ที่มี element
// ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

const removeRandom = (arr) => {
  arr.splice(Math.floor(Math.random() * arr.length), 1);
  return arr;
};

console.log(removeRandom([1, 2, 3, 4, 5, 6, 7]));
