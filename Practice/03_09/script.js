/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: {
    brightness: 15,
    saturation: 34,
    crop: 50,
    hue: 40,
    contrast: 22,
  },
  pocketNum: {
    left: 45,
    right: 45,
  },
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
  
  // newPocketNum: function (leftPocket, rightPocket) {
  //   // this.volume = volume;
  //   this.newPocketNum.left = leftPocket;
  //   this.newPocketNum.right = rightPocket;
  // },
  
  // newColor: function (incSaturation, incBrightness, lessHue, lessCrop) {
  //   this.newColor.incSaturation = saturation;
  //   this.newColor.incBrightness = brightness;
  //   this.newColor.lessHue = hue;
  //   this.newColor.lessCrop = crop;
  // },
};

const laptop = {
  name: "MacBook Air 2021 Series",
  model: "MacBook Air",
  brand: "Apple",
  processsor: "Intel Core Chip",
  color: "grey",

  volumes: {
    storage: "128 GB",
    ram: "8 GB",
  },

  newVolumes: function (newStorage, newRam) {
    this.volumes.storage = newStorage;
    this.volumes.ram = newRam;
  },
};

console.log("RAM Before: ", laptop.volumes.ram);
console.log("Storage Before: ", laptop.volumes.storage);
laptop.newVolumes("512 GB", "16 GB");
console.log("RAM After: ", laptop.volumes.ram);
console.log("Storage After: ", laptop.volumes.storage);
