// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // * 8 ดึงค่ามาจาก facts
console.log(yearNeptuneDiscovered); // ** 1846 ดึงค่ามาจาก facts
