// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3
// ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

const array1 = [1, 2, 3, 4, 5, 6, 7];

function indexThreeSquare(arr) {
  // let array2 = [...arr];
  // array2.splice(3, 1, arr[3] ** 2);
  // return array2;
  return arr.map((item, index) => (index === 3 ? item ** 2 : item));
}

console.log(indexThreeSquare(array1));
console.log(array1);
