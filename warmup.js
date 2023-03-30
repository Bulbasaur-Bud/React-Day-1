/*

Write a function, gooseRemover, that takes an array of strings as an argument and returns an array with all the geese removed

The geese are any strings in the following array, which is pre-populated in your solution:
let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

*/

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item) => !geese.includes(item));
}

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const exampleArr = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];

//Ibtehal

// function withoutGeese(geese,arr){
//   return arr.filter((item)=>{
//     return geese.indexOf(item) === -1;
//   })
// };

//Hafiz

// const geeseRemover = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     geese.forEach((g) => {
//       if (g == arr[i]) {
//         arr.splice(i, 1);
//         i--;
//       }
//     });
//   }
//   console.log(arr);
// };

// geeseRemover(exampleArr);
