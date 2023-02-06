// จงเขียนฟังก์ชัน mergeObjects
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน
// (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

// const mergeObjects = (...objs) => {
//   let reObj = objs.reverse();
//   let newObj = {};

//   newObj = reObj.reduce((acc, item) => {
//     Object.assign(acc, item);
//     return acc;
//   }, {});

//   return newObj;
// };

function mergeObjects(...objs) {
  return objs.reduce((acc, item) => {
    for (let key in item) {
      if (!acc[key]) {
        acc[key] = item[key];
      }
    }
    return acc;
  }, {});
}

const obj1 = { num1: 1 };
const obj2 = { num2: 2, num3: 3, num4: 4 };

console.log(mergeObjects(obj1, obj2));

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { c: 4, d: 5, e: 6 };
// const obj3 = { e: 7, b: 8, g: 9 };
// const obj4 = { g: 10, h: 11, i: 12 };

// const merged = mergeObjects(obj1, obj2, obj3, obj4);
// console.log(merged);
