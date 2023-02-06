// จงเขียนฟังก์ชัน filterOutOdds
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

const filterOutOdds = (...nums) => nums.filter((acc) => acc % 2 === 0);

console.log(filterOutOdds(1, 2, 5, 6, 7, 9, 10, 11, 23, 22));
