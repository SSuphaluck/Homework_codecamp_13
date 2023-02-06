// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // * 'Maya' เพราะเป็นตัวแรกของ array นี้ที่อยู่ตำแหน่งเดียวกัน
console.log(second); // ** 'Marisa' ตัวที่อยู่ตำแหน่งตรงกัน
console.log(third); // *** 'Chi' ตำแหน่งตรงกัน
