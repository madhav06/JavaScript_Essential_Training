/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let simpleArray = ["everyday", "nippo", 5, false, 54.3, "duracell"];
 // remove the last item
simpleArray.pop()
 // Add the last item as the first item on the array 
simpleArray.unshift("duracell")
// Sort the items by alphabetical order
simpleArray.sort()
// Use the find() method to find a specific item in the array
let boolItem = simpleArray.find(function (item) {
    if (item == "duracell") {
      return item;
      
    }
    console.log("Item found!");
  });
// Remove the item you found using the find method from the array.
 // we have an array of objects, we want to remove one object using only the id property

var carIndex = simpleArray.indexOf("nippo");
//remove car from the colors array
simpleArray.splice(carIndex, 1); 

console.log(simpleArray.join(", "));


