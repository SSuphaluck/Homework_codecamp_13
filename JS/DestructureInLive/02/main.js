// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens'
];
console.log(raindrops); // * 'Raindrops on roses' เป็นตัวแรกของ Array นี้
console.log(whiskers); // ** 'whiskers on kittens' เป็นตัวที่สองของ Array นี้
console.log(aFewOfMyFavoriteThings);
// *** ['Bright copper kettles', 'warm woolen mittens']
// เป็นตัวที่เหลือของ Array นี้ กำหนดด้วยการใช้ rest parameter
