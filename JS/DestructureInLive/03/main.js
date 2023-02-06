// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); //
/* ได้ [10, 30 ,20]
เพราะใช้ destructuring assignment 
ในการสลับค่าของ numbers[1] และ numbers[2]
ด้วยการ [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
แล้วสร้าง array ใหม่ด้วยการแทนค่า numbers[2], numbers[1] 
ในตำแหน่งเดียวกับ numbers[1], numbers[2] เลยได้ array ใหม่ออกมาแบบนี้
[10, 30, 20]
*/
