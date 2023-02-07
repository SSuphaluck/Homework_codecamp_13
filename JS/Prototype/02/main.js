// ให้เพิ่ม Method defer เข้าไปใน Prototype ของ Function
// โดยให้ได้ผลลัพธ์ตามด้านล่าง (Hint: setTimeout)

Function.prototype.defer = function (time) {
  setTimeout(this, time);
};

function f() {
  alert('Hello!');
}
f.defer(1000); // shows "Hello!" after 1 second
