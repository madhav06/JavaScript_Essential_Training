/**
 * The const statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

const color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
/*
The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, 
this means the object's contents (e.g., its properties) can be altered.
*/