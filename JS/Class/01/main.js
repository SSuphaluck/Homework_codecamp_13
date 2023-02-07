// - ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// - value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด)
//   เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// - sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// - subtract() ให้รับค่าตัวเลขและหักออกจาก value
// - multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// - divide() ให้รับค่าตัวเลขและนำไปหาร value
// - show() ให้ alert ค่า value

class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  sum(number) {
    this.value += number;
  }
  subtract(number) {
    this.value -= number;
  }
  multiply(number) {
    this.value *= number;
  }
  divide(number) {
    this.value /= number;
  }

  show() {
    alert(this.value);
  }
}
