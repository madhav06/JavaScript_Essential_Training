/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
// object - T-shirt
import TShirt from "./Tshirt.js";

const casualWear = new TShirt(
    "round Neck White T-Shirt for Men",
    "Van Heusen Gym Wear",
    "white",
    "M",
    1399
);
console.log(casualWear.name);
console.log(casualWear.brand);
console.log("Price then: ", casualWear.price);

casualWear.priceVariant(1799);

console.log("Price now: ", casualWear.price);


