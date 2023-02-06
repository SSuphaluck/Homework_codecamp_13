// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears);
// * คืนค่าเป็น object ที่มีค่าเป็น { yearNeptuneDiscovered: 1846,
// yearMarsDiscovered: 1659 } เพราะเรียกใช้ด้วย rest parameter
