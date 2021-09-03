/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pigy", "headlamp", "pen"];

// backpackContents.push("pencil", 5); -- add at back of array
// backpackContents.unshift("pencil", 5); -- add at front of array
// backpackContents.pop() -- remove at back of array
// backpackContents.shift() -- remove at front of array


backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

console.log(backpackContents.join(", "));
