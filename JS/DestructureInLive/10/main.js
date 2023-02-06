// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(salaries) {
  let mostsalary = 0;
  let whoMostSalary = null;

  for (name in salaries) {
    if (salaries[name] > mostsalary) {
      mostsalary = salaries[name];
      whoMostSalary = name;
    }
  }
  return whoMostSalary;
}

console.log(topSalary(salaries));
