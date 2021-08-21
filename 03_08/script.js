/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

/*
this is how we acess objects and values
*/
console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

/*
access method, update method by passing args, then run the method again to see updation
*/
console.log("Left Before: ", backpack.strapLength.left); 
backpack.newStrapLength(30,30)
console.log("Left After: ", backpack.strapLength.left);

