/* จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object 
ที่มี keys เป็น firstName lastName และ age โดยถ้า user 
มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล 
ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน
(ใช้ destructuring) */

const checkAge = ({ firstName, lastName, age }) =>
  age > 18 ? `ยินดีต้อนรับ ${firstName} ${lastName}` : 'ไม่มีสิทธิ์เข้าใช้งาน';

let user = {
  firstName: 'Ai',
  lastName: 'Robot',
  age: 13
};

console.log(checkAge(user));
