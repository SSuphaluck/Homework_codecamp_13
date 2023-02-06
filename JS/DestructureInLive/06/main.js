// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }));
/* เพราะมีการเพิ่มค่าของ firstName ให้เป็น 'Alejandro' 
และมีการแทนที่ค่าของ favoriteColor เป็น 'purple'
เมื่อมีการเรียกใช้ฟังก์ชั่นนี้เลยได้ออกมาแบบนี้
Your name is Alejandro and you like purple
*/
console.log(getUserData({ firstName: 'Melissa' }));
/* เพราะมีการเพิ่มค่าของ firstName ให้เป็น 'Melisa' 
แต่ไม่มีการแทนที่ค่าของ favoriteColor
เมื่อมีการเรียกใช้ฟังก์ชั่นนี้เลยได้ออกมาแบบนี้
Your name is Melissa and you like green
*/
console.log(getUserData({}));
/* เพราะไม่มีการเพิ่มค่า firstName เลยมีค่าเป็น 'undefined'
และไม่มีการแทนที่ค่าของ favoriteColor
เมื่อมีการเรียกใช้ฟังก์ชั่นนี้เลยได้ออกมาแบบนี้
Your name is undefined and you like green
*/
