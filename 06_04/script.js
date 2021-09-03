/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue";
  document.querySelector(".title").style.color = titleColor;
  console.log("inside: ", titleColor);
}

headingColor();

console.log("outside: ", titleColor);
document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
// for most of situation when we want to changable or mutable variable,
// we use " let that include we can also use them locally, globally".
// if we want immutable variable with global scope all the time, use " var ".